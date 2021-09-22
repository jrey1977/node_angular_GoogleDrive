import { FotosService } from './../../../services/fotos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss'],
})
export class FotosComponent implements OnInit {
  files:any[] = [];

  constructor(private fotosService: FotosService) {}

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles() {
     this.fotosService.getFiles().subscribe( res => {
        console.log('Archivos', res);
     });
  }

  insertarFotos(){
      this.fotosService.insertarFotos().subscribe( (res:any) => {
        console.log('Resultado de la insercción:', res.resultado);
     });
  }
}






