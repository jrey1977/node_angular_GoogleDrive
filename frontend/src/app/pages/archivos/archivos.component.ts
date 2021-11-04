import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgxMasonryOptions } from 'ngx-masonry';
import { animate, style } from '@angular/animations';
import { DeviceDetectorService } from 'ngx-device-detector';
import { PopupService } from 'src/app/utils/popup/services/popup.service';
import { ArchivosService } from './services/archivos.service';
import { Archivo } from './models/archivos.interface';

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
  public notificationMessage: String = '';
  private margenLateral: number = 0;
  public myOptions: NgxMasonryOptions = {};
  public showLoading: boolean = true;
  public contadorFotos: number = 40;
  public porcentaje: string = '0%';
  public porcentajeArchivo: number = 0;
  private popup!: Archivo;
  private anchoUl!: number;

  @ViewChild('contentArchivosNuevos') ul!:ElementRef;

  constructor(
    private archivoService: ArchivosService,
    private deviceService: DeviceDetectorService,
    private popupService: PopupService
  ) {}

  ngOnInit(): void {
    const isMobile = this.deviceService.isMobile();
    if (isMobile) {
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

  scrollLeft(){
    console.log('Hago scroll a la izda.');
    let style = getComputedStyle(this.ul.nativeElement);
    this.anchoUl = parseInt(style.width);
    //this.ul.nativeElement.scrollLeft -= this.anchoUl;
    this.ul.nativeElement.scrollBy({
        left: -this.anchoUl,
        behavior: 'smooth'
    })
    console.log('ancho', this.anchoUl);
  }

  scrollRight(){
    console.log('Hago scroll a la dcha.');
    let style = getComputedStyle(this.ul.nativeElement);
    this.anchoUl = parseInt(style.width);
    //this.ul.nativeElement.scrollLeft += this.anchoUl
    this.ul.nativeElement.scrollBy({
        left: +this.anchoUl,
        behavior: 'smooth'
    })
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
    console.log('Entro a onScrollOld');
    if (this.actualPageOld < this.finishPageOld) {
      this.showLoading = true;
      var startSlice = this.actualPageOld * this.filesPerPage;
      var endSlice = startSlice + this.filesPerPage;
      var viejas = this.filesOld.slice(startSlice, endSlice);
      viejas.forEach((elem) => {
        console.log('porcentaje es', parseFloat(this.porcentaje));
        this.porcentaje =
          parseFloat(this.porcentaje) + this.porcentajeArchivo + '%';
        console.log('this.porcentaje', this.porcentaje);
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
    this.archivoService.getNewFiles().subscribe((res: any) => {
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
      console.log('porcentajeArchivo es ', this.porcentajeArchivo);
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

  borrarArchivo(idArchivo: string, indexArchivo: number) {
    var idArchivoEliminado = idArchivo;
    var indexArchivoEliminado = indexArchivo;
    this.archivoService
      .borraArchivo(idArchivoEliminado)
      .subscribe((res: any) => {
        // Se ha borrado el archivo de Google Drive
        if (res.respuesta.status === 204) {
          this.notification = true;
          this.notificationMessage =
            'Se ha borrado el archivo de la unidad de Google Drive';
          // Ahora lo borro de la base datos
          try {
            this.archivoService
              .borraArchivoBaseDatos(idArchivoEliminado)
              .subscribe((res: any) => {
                // Ahora borro el archivo de la página
                if (res.respuesta === 'ok') {
                  this.notificationMessage +=
                    'Se ha borrado el archivo de la Base de datos';
                  console.log('Ahora quito el fichero de la página');
                  this.filesNewsTemp[0].splice(indexArchivoEliminado, 1);
                  this.notification = false;
                } else {
                  console.log(
                    'Algo ha pasado que no llegó ok: ',
                    res.respuesta
                  );
                }
              });
          } catch (error) {
            this.notification = true;
            this.notificationMessage =
              'No se ha podido eliminar el archivo de la base de datos por:' +
              error;
          }
        } else {
          this.notificationMessage =
            'No se ha podido borrar el archivo de la unidad de Google Drive';
        }
      });
  }

  abrirPopup(pArchivo: Archivo) {
    this.popupService.abrirPopup(pArchivo);
  }
}
