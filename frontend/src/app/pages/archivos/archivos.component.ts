import { animate, style } from '@angular/animations';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
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

  // Los archivos nuevos y viejos que se están mostrando
  public filesNewsTemp: any[] = [];
  public filesOldTemp: any[] = [];

  // Todos los viejos
  public filesOld: any[] = [];

  // Infinite Scroll New Files
  private actualPageNew: number = 1;
  private finishPageNew: number = 1;

  // Infinite Scroll Old Files
  private actualPageOld: number = 1;
  private finishPageOld: number = 1;

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
  private popup!: Archivo;
  private anchoUl!: number;
  public showContextMenu: boolean = false;
  public fotoSeleccionada!: Archivo;
  public indexFotoSeleccionada!: number;
  private tipo!: string;
  private rightClickMenuPositionX!: string;
  private rightClickMenuPositionY!: string;
  public showEtiquetas: boolean = false;
  public multiEditMode: boolean = false;
  public arrayMultiEdit: any[] = [];
  public checkboxesChecked: boolean = false;
  modalRef?: BsModalRef;
  public cargado: boolean = false;

  @ViewChild('contentArchivosNuevos') ul!: ElementRef;
  @ViewChild('contextMenu') contextMenu!: ElementRef;
  @ViewChild('etiquetas') etiquetas!: ElementRef;
  @ViewChildren('checkboxMultiEdit') misCheckboxes!: QueryList<ElementRef>;
  @ViewChild(NgxMasonryComponent) masonry!: NgxMasonryComponent;
  @ViewChild('mtg') tg!: MatTabGroup;

  constructor(
    private archivoService: ArchivosService,
    private deviceService: DeviceDetectorService,
    private popupService: PopupService,
    private renderer: Renderer2,
    private modalService: BsModalService,
    private etiquetaService: EtiquetasService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    // Menú contextual al pinchar con el botón derecho en cualquier lugar de la pantalla
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        e.target !== this.contextMenu.nativeElement &&
        e.target !== this.contextMenu.nativeElement.querySelector('div') &&
        e.target !== this.contextMenu.nativeElement.querySelector('ul') &&
        e.target !== this.contextMenu.nativeElement.querySelector('li')
      ) {
        this.showContextMenu = false;
      }
    });

    // Suscripción: para pasar archivos etiquetados a listado de archivos sin etiquetar
    this.etiquetaService.getFileStateOldToNew$().subscribe((data: any) => {
      // Si el state es true, el archivo no tenía etiquetas antes
      // y lo debo mover al listado de archivos con etiqueta
      if (data.state === true) {
        let idArchivo = data.id;
        // Localizo el item a remover en el listado de archivos sin etiquetar
        let item_removido = this.filesNewsTemp[0].filter(
          (item: { [x: string]: any }) =>
            'id' in item && item['id'] === idArchivo
        );
        // Meto el archivo en el listado de archivos etiquetados
        this.filesOldTemp[0].unshift(item_removido[0]);
        this.masonry.reloadItems();
        this.masonry.layout();

        // Quito el archivo del listado de archivos sin etiquetar
        this.filesNewsTemp[0] = this.filesNewsTemp[0].filter(
          (item: { [x: string]: any }) =>
            'id' in item && item['id'] !== idArchivo
        );
        // Actualizo contadores de listados
        this.filesNew.length = this.filesNew.length - 1;
        this.filesOld.length = this.filesOld.length + 1;
      }
    });

    // Suscripción: para pasar archivos no etiquetados a listado de archivos etiquetados
    this.etiquetaService.getFileStateNewToOld$().subscribe((data: any) => {
      // Si el state es false, el archivo ya no tiene etiquetas
      // y lo debo moover al listado de artchivos sin etiqueta
      if (data.state === false) {
        let idArchivo = data.id;
        // Localizo el item a remover en el listado de archivos etiquetados
        let item_removido = this.filesOldTemp[0].filter(
          (item: { [x: string]: any }) =>
            'id' in item && item['id'] === idArchivo
        );
        // Meto el archivo en el listado de archivos sin etiquetar
        this.filesNewsTemp[0].unshift(item_removido[0]);
        // Quito el archivo del listado de archivos etiquetados
        this.filesOldTemp[0] = this.filesOldTemp[0].filter(
          (item: { [x: string]: any }) =>
            'id' in item && item['id'] !== idArchivo
        );
        this.masonry.reloadItems();
        this.masonry.layout();
        // Actualizo contadores de listados
        this.filesNew.length = this.filesNew.length + 1;
        this.filesOld.length = this.filesOld.length - 1;
      }
    });

    // Suscripción: para pasar actualizar fichero con nueva etiqueta en el listado que corresponda
    this.etiquetaService.getArchivosActualizados$().subscribe((data: any) => {
      this.filesNewsTemp[0].forEach(function (item: any, index: number) {
        if (item.id == data.idArchivoData) {
          console.log('Match!!');
          item.etiquetas.push(data.idNuevaEtiquetaData);
        }
      });
      this.filesOldTemp[0].forEach(function (item: any, index: number) {
        if (item.id == data.idArchivoData) {
          console.log('Match!!');
          item.etiquetas.push(data.idNuevaEtiquetaData);
        }
      });
    });

    // Suscripción: para que si no
    this.popupService.getCheckedInputsState$().subscribe((data: boolean) => {
      if (!data) {
        this.misCheckboxes.forEach((element) => {
          element.nativeElement.checked = false;
        });
        this.arrayMultiEdit = [];
      }
    });

    const isMobile = this.deviceService.isMobile();
    if (isMobile) {
      this.margenLateral = 5;
    } else {
      this.margenLateral = 20;
    }

    // OPCIONES DE GRID MASONRY
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

  selectedIndexChange(evt: any) {
    if (this.tg.selectedIndex) {
      this.cargado = true;
    }
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

  updateArrayMultiEdit(item: any) {
    if (this.arrayMultiEdit.includes(item)) {
      var index = this.arrayMultiEdit.indexOf(item);
      this.arrayMultiEdit.splice(index, 1);
    } else {
      this.arrayMultiEdit.push(item);
    }
    console.log('this.arrayMultiEdit es ', this.arrayMultiEdit);
  }

  agregarEtiquetas(foto: Archivo) {
    this.showContextMenu = true;
    this.showEtiquetas = true;
    this.modalRef = this.modalService.show(EtiquetasComponent);
    this.modalRef.content.fotoSeleccionada = foto;
  }

  onRightClick($event: any, archivo: Archivo, tipo: string, indexFoto: number) {
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
  }

  scrollLeft() {
    console.log('Hago scroll a la izda.');
    let style = getComputedStyle(this.ul.nativeElement);
    this.anchoUl = parseInt(style.width);
    //this.ul.nativeElement.scrollLeft -= this.anchoUl;
    this.ul.nativeElement.scrollBy({
      left: -this.anchoUl,
      behavior: 'smooth',
    });
    console.log('ancho', this.anchoUl);
  }

  scrollRight() {
    console.log('Hago scroll a la dcha.');
    let style = getComputedStyle(this.ul.nativeElement);
    this.anchoUl = parseInt(style.width);
    //this.ul.nativeElement.scrollLeft += this.anchoUl
    this.ul.nativeElement.scrollBy({
      left: +this.anchoUl,
      behavior: 'smooth',
    });
    console.log('ancho', this.anchoUl);
  }

  add40NewFiles() {
    if (this.filesNewsTemp.length) {
      this.filesNewsTemp.concat(this.new40Files);
    } else {
      this.filesNewsTemp.push(this.new40Files);
    }
  }

  add40OldFiles() {
    if (this.filesOldTemp.length) {
      this.filesOldTemp.concat(this.old40Files);
      this.contadorFotos = this.filesOldTemp[0].length;
      this.showLoading = false;
    } else {
      this.filesOldTemp.push(this.old40Files);
      this.contadorFotos = this.filesOldTemp[0].length;
      this.showLoading = false;
    }
  }

  onScrollNew() {
    console.log('Entro a onScrollNew');
    if (this.actualPageNew < this.finishPageNew) {
      var startSlice = this.actualPageNew * this.filesPerPage;
      var endSlice = startSlice + this.filesPerPage;
      var nuevas = this.filesNew.slice(startSlice, endSlice);
      nuevas.forEach((elem) => {
        this.new40Files.push(elem);
      });
      this.add40NewFiles();
      this.actualPageNew++;
    } else {
      console.log('No more lines. Finish page!');
    }
  }

  onScrollOld() {
    if (this.actualPageOld < this.finishPageOld) {
      this.showLoading = true;
      var startSlice = this.actualPageOld * this.filesPerPage;
      var endSlice = startSlice + this.filesPerPage;
      var viejas = this.filesOld.slice(startSlice, endSlice);
      viejas.forEach((elem) => {
        this.porcentaje =
          parseFloat(this.porcentaje) + this.porcentajeArchivo + '%';
        this.old40Files.push(elem);
      });
      this.showLoading = true;
      this.add40OldFiles();
      this.actualPageOld++;
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
      console.log('Recibo esto:', res);
      this.filesTemp = Array.from(res.totalFiles);
      this.filesNew = this.filesTemp.filter(
        (file) => file.etiquetas.length < 1
      );
      this.filesOld = this.filesTemp.filter(
        (file) => file.etiquetas.length > 0
      );

      this.finishPageNew = Math.ceil(this.filesNew.length / this.filesPerPage);
      this.finishPageOld = Math.ceil(this.filesOld.length / this.filesPerPage);
      var filesNewsTemp = Array.from(this.filesNew.slice(0, this.filesPerPage));
      var filesOldTemp = Array.from(this.filesOld.slice(0, this.filesPerPage));
      this.porcentajeArchivo = 100 / this.filesTemp.length;
      filesNewsTemp.forEach((elem) => {
        this.new40Files.push(elem);
      });
      this.add40NewFiles();
      filesOldTemp.forEach((elem) => {
        this.porcentaje =
          parseFloat(this.porcentaje) + this.porcentajeArchivo + '%';
        this.old40Files.push(elem);
      });
      this.add40OldFiles();
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

  borrarArchivo() {
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
        var idArchivoEliminado = this.fotoSeleccionada.id;
        var indexArchivoEliminado = this.indexFotoSeleccionada;

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
                      // Compruebo el listado y lo elimino
                      if (this.tipo === 'nuevo') {
                        this.filesNewsTemp[0].splice(indexArchivoEliminado, 1);
                        this.actualizoCantidades(this.filesNewsTemp[0].length);
                      } else {
                        this.filesOldTemp[0].splice(indexArchivoEliminado, 1);
                        this.actualizoCantidades(this.filesNewsTemp[0].length);
                      }
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

  abrirPopup(pArchivo: Archivo) {
    this.popupService.abrirPopup(pArchivo);
  }

  multiEdit() {
    this.popupService.abrirPopupMulti(this.arrayMultiEdit);
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
