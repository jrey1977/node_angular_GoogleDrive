import { animate, style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { EtiquetasComponent } from 'src/app/shared/etiquetas/etiquetas.component';
import { EtiquetasService } from 'src/app/shared/etiquetas/etiquetas.service';
import { NotificationService } from 'src/app/utils/notification/notification.service';
import { PopupService } from 'src/app/utils/popup/services/popup.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Archivo } from './models/archivos.interface';
import { ArchivosService } from './services/archivos.service';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.scss'],
})
export class ArchivosComponent implements OnInit {
  // Arrays independientes donde meto uno a uno los registros
  public new40Files: any[] = [];
  public old40Files: any[] = [];

  // Todos los archivos (fotos y videos) nuevos y viejos
  public filesTemp: any[] = [];

  // Todos los archivos con etiqueta
  public filesNew: any[] = [];

  // // Todos los viejos
  public filesOld: any[] = [];

  // Todos los archivos: con y sin etiqueta
  public filesAll: any[] = [];
  // Todos los archivos que se están mostrando
  public filesAllTemp: any[] = [];

  // Infinite Scroll All Files
  private actualPageAll: number = 1;
  private finishPageAll: number = 1;

  public showGoUpButton: boolean = false;
  private filesPerPage: number = 40;
  private showScrollHeight: number = 400;
  private hideScrollHeight: number = 200;

  public Object = Object;

  public urlImg = environment.urlImgGoogle;
  public notification: Boolean = false;
  private margenLateral: number = 0;
  public myOptions: NgxMasonryOptions = {};
  public showLoading: boolean = true;
  public contadorFotos: number = 40;
  public porcentaje: string = '0%';
  public porcentajeArchivo: number = 0;
  public showContextMenu: boolean = false;
  public fotoSeleccionada!: Archivo;
  public indexFotoSeleccionada!: number;
  private tipo!: string;
  private rightClickMenuPositionX!: string;
  private rightClickMenuPositionY!: string;
  public showEtiquetas: boolean = false;
  public multiEditMode: boolean = false;
  public arrayMultiEdit: any[] = [];
  public arrayMultiEditIds: number[] = [];
  public checkboxesChecked: boolean = false;
  public arraySeleccionados: any[] = [];
  modalRef?: BsModalRef;
  public cargado: boolean = false;
  public isMobile: boolean = false;
  public isTablet: boolean = false;
  public showMenu: boolean = false;

  @ViewChild('contentArchivosNuevos') ul!: ElementRef;
  @ViewChild('contextMenu') contextMenu!: ElementRef;
  @ViewChild('etiquetas') etiquetas!: ElementRef;
  @ViewChildren('checkboxMultiEdit') misCheckboxes!: QueryList<ElementRef>;
  @ViewChild(NgxMasonryComponent) masonry!: NgxMasonryComponent;

  constructor(
    private archivoService: ArchivosService,
    private deviceService: DeviceDetectorService,
    private popupService: PopupService,
    private renderer: Renderer2,
    private modalService: BsModalService,
    private etiquetaService: EtiquetasService,
    private notificationService: NotificationService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    // Suscripción: para actualizar fichero con una etiqueta nueva o con una etiqueta menos
    this.etiquetaService.getArchivosActualizados$().subscribe((data: any) => {
      this.filesAllTemp.forEach(function (item: any, index: number) {
        if (item.id == data.idArchivoData) {
          var etiquetasData = data.idNuevasEtiquetasData;
          etiquetasData.forEach( (tag:any)=>{
              var indexEtiqueta = item.etiquetas.indexOf(tag);
              if (item.etiquetas.indexOf(tag) != -1) {
                item.etiquetas.splice(indexEtiqueta, 1);
              } else {
                item.etiquetas.push(tag);
              }
          });
        }
      });
    });

    // Suscripción: para quitar la selección de checkboxes cuando se cierra la pop-up de edición múltiple
    this.popupService.getCheckedInputsState$().subscribe((data: boolean) => {
      if (!data) {
        this.misCheckboxes.forEach((element) => {
          element.nativeElement.checked = false;
        });
        this.arrayMultiEdit = [];
      }
    });

    // Suscripción: para actualizar listado de archivos
    this.archivoService
      .getListadoArchivos$()
      .subscribe((arrayDelete: number[]) => {
        let elementosBorrados = 0;
        arrayDelete.forEach((elementoBorrado) => {
          this.filesAllTemp[0].splice(elementoBorrado - elementosBorrados, 1);
          elementosBorrados++;
        });
      });

    // OPCIONES DE GRID MASONRY
    if (this.isMobile) {
      this.margenLateral = 5;
    } else {
      this.margenLateral = 20;
    }

    this.myOptions = {
      gutter: this.margenLateral,
      resize: true,
      animations: {
        show: [
          style({ opacity: 0 }),
          animate('400ms ease-in', style({ opacity: 1 })),
        ],
        hide: [
          style({ opacity: '*' }),
          animate('400ms ease-in', style({ opacity: 0 })),
        ],
      },
    };

    this.getNewFiles();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('Hago scroll');
    if (
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showGoUpButton = true;
    } else if (
      this.showGoUpButton &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showGoUpButton = false;
    }
  }

  updateArrayMultiEdit(item: any, idItem: number) {
    if (this.arrayMultiEdit.includes(item)) {
      // Elimino archivo de array de archivos
      var index = this.arrayMultiEdit.indexOf(item);
      this.arrayMultiEdit.splice(index, 1);
      //Elimino índice de array de índices
      var indexIndice = this.arrayMultiEditIds.indexOf(idItem);
      this.arrayMultiEditIds.splice(indexIndice, 1);
    } else {
      this.arrayMultiEdit.push(item);
      this.arrayMultiEditIds.push(idItem);
    }
  }

  updateArrayMultiEditImg(item: any, idItem: number) {
    if (this.multiEditMode) {
      this.updateArrayMultiEdit(item, idItem);
    }
  }

  showHideMenu(elem: any) {
    console.log('Muestra menú!!');
    const menuContextual = elem.target.nextSibling;
    if (menuContextual.classList.contains('visible')) {
      this.renderer.removeClass(menuContextual,'visible');
    } else {
      this.renderer.addClass(menuContextual,'visible');
    }
  }

  agregarEtiquetas(foto: Archivo) {
    this.showContextMenu = true;
    this.showEtiquetas = true;
    this.modalRef = this.modalService.show(EtiquetasComponent);
    this.modalRef.content.fotoSeleccionada = foto;
    this.popupService.abrirCerrarPopupEdit(true);
  }

  edicionMultiple() {
    this.modalRef = this.modalService.show(EtiquetasComponent);
    this.modalRef.content.fotosSeleccionadas = this.arrayMultiEdit;
    this.popupService.abrirCerrarPopupMulti(true);
  }

  modoMultiEdit() {
    this.multiEditMode = !this.multiEditMode;
    this.document.body.classList.add('multi-edit');
  }

  cancelarMultiEdit() {
    this.multiEditMode = !this.multiEditMode;
    this.document.body.classList.remove('multi-edit');
  }

  /*onRightClick($event: any, archivo: Archivo, tipo: string, indexFoto: number) {
    $event.preventDefault();
    this.showContextMenu = false;
    this.fotoSeleccionada = archivo;
    this.indexFotoSeleccionada = indexFoto;
    this.tipo = tipo;

    this.rightClickMenuPositionX = $event.clientX + 'px';
    this.rightClickMenuPositionY = $event.clientY + 'px';

    this.renderer.setStyle(
      this.contextMenu.nativeElement,
      'left',
      this.rightClickMenuPositionX
    );
    this.renderer.setStyle(
      this.contextMenu.nativeElement,
      'top',
      this.rightClickMenuPositionY
    );
    this.showContextMenu = true;
  }*/

  add40NewFiles() {
    if (this.filesAllTemp.length) {
      console.log('Añado 40 archivos más...');
      this.filesAllTemp.concat(this.new40Files[0]);
    } else {
      console.log('¡Añado los primeros archivos!');
      this.filesAllTemp.push(this.new40Files);
      this.filesAllTemp = this.filesAllTemp[0];
      this.showLoading = false;
    }
  }

  onScrollNew() {
    console.log('Entro a onScrollNew');
    if (this.actualPageAll < this.finishPageAll) {
      var startSlice = this.actualPageAll * this.filesPerPage;
      var endSlice = startSlice + this.filesPerPage;
      var nuevas = this.filesNew.slice(startSlice, endSlice);
      nuevas.forEach((elem) => {
        this.new40Files.push(elem);
      });
      this.add40NewFiles();
      this.actualPageAll++;
    } else {
      console.log('No more lines. Finish page!');
    }
  }

  scrollTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Other
  }

  // Compruebo si hay archivos nuevos en la unidad de Google Drive
  // y si es así los grabo en la base de datos
  getNewFiles() {
    this.archivoService.getFiles().subscribe((res: any) => {
      this.filesTemp = Array.from(res.totalFiles);
      this.filesNew = this.filesTemp.filter(
        (file) => file.etiquetas.length < 1
      );
      this.filesOld = this.filesTemp.filter(
        (file) => file.etiquetas.length > 0
      );

      this.finishPageAll = Math.ceil(this.filesTemp.length / this.filesPerPage);
      var filesNewsTemp = Array.from(
        this.filesTemp.slice(0, this.filesPerPage)
      );

      filesNewsTemp.forEach((elem) => {
        this.new40Files.push(elem);
      });
      this.add40NewFiles();
    });
  }

  creoBaseDatos() {
    this.archivoService.creoBaseDatos().subscribe((res: any) => {
      console.log('res de creoBaseDatos es', res);
    });
  }

  actualizoCantidades(numActual: number) {
    this.contadorFotos = numActual;
    this.filesOld.length = numActual;
  }

  borrarArchivo(fotoSeleccionadaParam: any, index: number) {
    Swal.fire({
      title: 'Estás seguro?',
      text: 'Si lo borras no podrás recuperar el archivo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, bórralo!',
    }).then((result: any) => {
      if (result.isConfirmed) {
        var idArchivoEliminado = fotoSeleccionadaParam.id;
        var indexArchivoEliminado = index;

        this.archivoService
          .borraArchivo(idArchivoEliminado)
          .subscribe((res: any) => {
            // Se ha borrado el archivo de Google Drive
            if (res.respuesta.status === 204) {
              this.mostrarNotificacion(
                'Se ha borrado el archivo de la unidad de Google Drive',
                'success'
              );
              // Ahora lo borro de la base datos
              try {
                this.mostrarNotificacion('Eliminando archivo...', 'info');
                this.archivoService
                  .borraArchivoBaseDatos(idArchivoEliminado)
                  .subscribe((res: any) => {
                    // Ahora borro el archivo de la página
                    if (res.respuesta === 'ok') {
                      this.mostrarNotificacion(
                        'Archivo eliminado',
                        'success',
                        true
                      );
                      this.filesAllTemp.splice(indexArchivoEliminado, 1);
                      Swal.close();
                    } else {
                      this.mostrarNotificacion(
                        'Algo ha pasado que no llegó ok: ' + res.respuesta,
                        'danger'
                      );
                    }
                  });
              } catch (error) {
                this.mostrarNotificacion(
                  'No se ha podido eliminar el archivo de la base de datos por: ' +
                    error,
                  'danger'
                );
              }
            } else {
              this.mostrarNotificacion(
                'No se ha podido borrar el archivo de la unidad de Google Drive',
                'danger'
              );
            }
          });
      }
    });
  }

  borradoMultiple() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Si los borras no podrás recuperar los archivos!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si joder, bórralos!',
    }).then((result: any) => {
      if (result.isConfirmed) {
        var arrayIds: any = [];
        this.arrayMultiEdit.forEach((archivo) => {
          arrayIds.push(archivo.id);
        });
        this.archivoService.borraArchivos(arrayIds, this.arrayMultiEditIds);
      }
    });
  }

  abrirPopup(pArchivo: Archivo) {
    this.document.body.classList.add('overflow-hidden');
    this.popupService.abrirPopup(pArchivo);
  }

  mostrarNotificacion(mensaje: string, tipo: string, fixed?: boolean) {
    let note = {
      message: mensaje,
      type: tipo,
      fixed: fixed,
    };
    this.notificationService.setMessage(note);
  }
}
