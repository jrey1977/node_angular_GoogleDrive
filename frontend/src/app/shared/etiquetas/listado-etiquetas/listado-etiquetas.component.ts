import { Component, Input, OnInit } from '@angular/core';
import { EtiquetasService } from '../etiquetas.service';

@Component({
  selector: 'app-listado-etiquetas',
  templateUrl: './listado-etiquetas.component.html',
  styleUrls: ['./listado-etiquetas.component.scss'],
})
export class ListadoEtiquetasComponent implements OnInit {
  _arrayEtiquetas?: string[];
  arrayNombres?: any[];

  @Input() set arrayEtiquetas(valores: string[]) {
    this._arrayEtiquetas = valores;
    this.etiquetaService
      .obtenerNombresEtiquetas(this._arrayEtiquetas)
      .subscribe((datosRecibidos: any) => {
        console.log('Datos recibidos:', Object.values(datosRecibidos.nombres));
        this.arrayNombres = Object.values(datosRecibidos.nombres);
      });
  }

  constructor(private etiquetaService: EtiquetasService) {}

  ngOnInit(): void {
    console.log('Array de ids:', this._arrayEtiquetas);
  }
}