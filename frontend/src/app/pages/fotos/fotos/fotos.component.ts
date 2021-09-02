import { FotosService } from './../../../services/fotos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {

  constructor(
    private fotosService: FotosService
  ) { }

  ngOnInit(): void {
    this.getFotos();
  }

  async getFotos(){
    let fotos = await this.fotosService.getFotos();
    console.log('fotos:', fotos);
  }

}
