import { FotosService } from './../../../services/fotos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss'],
})
export class FotosComponent implements OnInit {
  pag: number = 1;
  constructor(private fotosService: FotosService) {}

  ngOnInit(): void {
    this.getFotos();
  }

  async getFotos() {
    this.fotosService.getFotos().subscribe((respuesta) => {
      console.log('fotos filtradas, pág. ' + this.pag + ':', respuesta);
      this.pag++;
      if (this.pag < 5) {
        this.getFotos();
      }
    });
  }
}
