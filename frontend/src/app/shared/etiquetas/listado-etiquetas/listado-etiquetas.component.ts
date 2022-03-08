import { Component, Input, OnInit } from '@angular/core';
import { EtiquetasService } from '../etiquetas.service';

@Component({
  selector: 'app-listado-etiquetas',
  templateUrl: './listado-etiquetas.component.html',
  styleUrls: ['./listado-etiquetas.component.scss'],
})
export class ListadoEtiquetasComponent implements OnInit {
  _arrayEtiquetas?: string[];

  @Input() set arrayEtiquetas(valores: string[]) {
    this._arrayEtiquetas = valores;
    this.etiquetaService
      .obtenerNombresEtiquetas(this._arrayEtiquetas)
      .subscribe((datosRecibidos) => {
        console.log('Datos recibidos:', datosRecibidos);
      });
  }

  constructor(private etiquetaService: EtiquetasService) {}

  ngOnInit(): void {
    console.log('Array de ids:', this._arrayEtiquetas);
  }
}
