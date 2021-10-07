import { ArchivosService } from '../../../services/archivos.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgxMasonryOptions } from 'ngx-masonry';
import { animate, style } from '@angular/animations';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss'],
})
export class FotosComponent implements OnInit {
  // Array indeoendiente donde meto uno a uno los registros
  public arrayIndepe: any[] = [];

  public myOptions: NgxMasonryOptions = {
    gutter: 40,
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

  // Todos los archivos (fotos y videos) nuevos y viejos
  public filesTemp: any[] = [];

  // Todos los nuevos archivos
  public filesNew: any[] = [];

  // Los archivos nuevos que se están mostrando
  public filesNewsTemp: any[] = [];

  public filesOld: any[] = [];

  //public linesToWrite: string[] = [];

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
  public defaultImage = 'videoDefault.jpg';

  constructor(private archivoService: ArchivosService) {}

  ngOnInit(): void {
    this.getFiles();
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

  add40NewFiles() {
    if (this.filesNewsTemp.length) {
      this.filesNewsTemp.concat(this.arrayIndepe);
    } else {
      this.filesNewsTemp.push(this.arrayIndepe);
    }

    console.log('Así queda this.arrayIndepe', this.arrayIndepe);
    console.log('Así queda this.filesNewsTemp', this.filesNewsTemp);
  }

  onScrollNew() {
    console.log('Entro a onScrollNew');
    if (this.actualPageNew < this.finishPageNew) {
      var startSlice = this.actualPageNew * this.filesPerPage;
      var endSlice = startSlice + this.filesPerPage;
      var nuevas = this.filesNew.slice(startSlice, endSlice);
      nuevas.forEach((elem) => {
        this.arrayIndepe.push(elem);
      });
      this.add40NewFiles();
      this.actualPageNew++;
    } else {
      console.log('No more lines. Finish page!');
    }
  }

  // onScrollOld() {
  //   console.log('Entro a onScroll')
  //   if (this.actualPageOld < this.finishPageOld) {
  //     this.add40Oldlines();
  //     this.actualPageOld ++;
  //   } else {
  //     console.log('No more lines. Finish page!');
  //   }
  // }

  scrollTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Other
  }

  getFiles() {
    this.archivoService.getFiles().subscribe((res: any) => {
      this.filesTemp = Array.from(res.totalFiles);
      this.filesNew = this.filesTemp.filter(
        (file) => file.etiquetas.length < 1
      );
      this.filesOld = this.filesTemp.filter(
        (file) => file.etiquetas.length > 0
      );

      this.finishPageNew = Math.ceil(this.filesNew.length / this.filesPerPage);
      var filesNewsTemp = Array.from(this.filesNew.slice(0, this.filesPerPage));
      filesNewsTemp.forEach((elem) => {
        this.arrayIndepe.push(elem);
      });
      this.add40NewFiles();
    });
  }

  creoBaseDatos() {
    this.archivoService.creoBaseDatos().subscribe((res: any) => {
      console.log('res de creoBaseDatos es', res);
    });
  }

  /* insertarFotos() {
    this.archivoService.insertarFotos().subscribe((res: any) => {
      console.log('Resultado de la insercción:', res.resultado);
    });
  }
 */
  borrarArchivo(idArchivo: string) {
    console.log('Borro archivo del con id', idArchivo);
    this.archivoService.borraArchivo(idArchivo).subscribe((res: any) => {
      console.log('Resultado del delete:', res);
      if (res.status === 204) {
        console.log('Se ha borrado el archivo');
      } else {
        console.log('No se ha podido borrar el archivo:', res);
      }
    });
  }
}
