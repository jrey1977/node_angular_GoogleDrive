import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-etiquetas',
  templateUrl: './listado-etiquetas.component.html',
  styleUrls: ['./listado-etiquetas.component.scss'],
})
export class ListadoEtiquetasComponent implements OnInit {
  _arrayEtiquetas!: string[];

  @Input() set arrayEtiquetas(valores: string[]) {
    this._arrayEtiquetas = valores;
  }

  constructor() {}

  ngOnInit(): void {
    console.log('Array de ids:', this._arrayEtiquetas);
  }
}
