import { FotosService } from './../../../services/fotos.service';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss'],
})
export class FotosComponent implements OnInit, AfterViewInit {
  // Array indeoendiente donde meto uno a uno los registros
  public arrayIndepe:any[] = [];

  // Todos los archivos (fotos y videos) nuevos y viejos
  public filesTemp:any[] = [];

  // Todos los nuevos archivos
  public filesNew:any[] = [];

  // Los archivos nuevos que se están mostrando
  public filesNewsTemp:any[] = [];



  public filesOld:any[] = [];


  //public linesToWrite: string[] = [];

  // Infinite Scroll New Files
  private actualPageNew: number = 1;
  private finishPageNew: number = 1;

  // Infinite Scroll Old Files
  private actualPageOld: number = 1;
  private finishPageOld: number = 1;

  public showGoUpButton:boolean = false;
  private filesPerPage:number = 40;
  private showScrollHeight:number = 400;
  private hideScrollHeight:number = 200;

  public Object = Object;

  constructor(private fotosService: FotosService) {
  }

  ngOnInit(): void {
    this.getFiles();

  }

  ngAfterViewInit(){
    //this.resizeAllGridItems();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('Hago scroll');
    if (( window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if ( this.showGoUpButton &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop)
      < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

  add40NewFiles() {
    // const line = 'Another new line -- ';
    // let lineCounter = this.linesToWrite.length;
    // for (let i = 0; i < 40; i ++) {
    //   this.linesToWrite.push(line + lineCounter);
    //   lineCounter ++;
    // }
    console.log('Añado esto', this.arrayIndepe);
    this.filesNewsTemp.push(this.arrayIndepe);
    console.log('Así queda this.arrayIndepe', this.arrayIndepe.length);
  }

  // add40Oldlines() {

  // }

  onScrollNew() {
    console.log('Entro a onScrollNew')
    if (this.actualPageNew < this.finishPageNew) {
      var startSlice = this.actualPageNew * this.filesPerPage;
      var endSlice = startSlice + this.filesPerPage;
      var nuevas = this.filesNew.slice(startSlice,endSlice);
      nuevas.forEach(
        (elem)=>{
          this.arrayIndepe.push(elem)
        }
      );
      this.add40NewFiles();
      this.actualPageNew ++;
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
     this.fotosService.getFiles().subscribe( (res:any) => {
        this.filesTemp = Array.from(res.totalFiles);
        this.filesNew = this.filesTemp.filter(file => file.etiquetas.length < 1);
        this.filesOld = this.filesTemp.filter(file => file.etiquetas.length > 0);

        this.finishPageNew = Math.ceil(this.filesNew.length / this.filesPerPage);
        var filesTemp = Array.from(this.filesNew.slice(0,this.filesPerPage));
        filesTemp.forEach(
          (elem)=>{
            this.arrayIndepe.push(elem)
          }
        );
        this.add40NewFiles();
     });
  }

  insertarFotos(){
      this.fotosService.insertarFotos().subscribe( (res:any) => {
        console.log('Resultado de la insercción:', res.resultado);
     });
  }

  isHtmlPrintable(value:any){
    return value === "" || typeof value === "string" || typeof value === "number";
  }


  resizeGridItem(item:any){
    var grid = document.getElementsByClassName("grid")[0];
    var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    var rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
      item.style.gridRowEnd = "span "+rowSpan;
  }

  resizeAllGridItems(){
    var allItems = document.getElementsByClassName("item");
    for(let x=0;x<allItems.length;x++){
      this.resizeGridItem(allItems[x]);
    }
  }

  resizeInstance(instance:any){
    var item = instance.elements[0];
    this.resizeGridItem(item);
  }


  //window.addEventListener("resize", resizeAllGridItems);

  @HostListener('window:resize', [])
  onWindowResize() {
    console.log('Hago resize');
    this.resizeAllGridItems();
  }

}



