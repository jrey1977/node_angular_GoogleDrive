import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EtiquetasService } from './etiquetas.service';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.scss'],
})
export class EtiquetasComponent implements OnInit {
  public _idArchivo: string = '';
  @Input() set idArchivo(value: string) {
    this._idArchivo = value;
    this.obtenerEtiquetas(this._idArchivo);
  }

  public etiquetas: string[] = [];
  constructor(
    public bsModalRef: BsModalRef,
    private etiquetaService: EtiquetasService
  ) {}

  ngOnInit(): void {}

  obtenerEtiquetas(idParam: string) {
    this.etiquetaService.obtenerEtiquetas(idParam).subscribe((res: any) => {
      console.log('Etiquetas del archivo:', res.etiquetas[0].etiquetas);
      this.etiquetas = Array.from(res.etiquetas[0].etiquetas);
    });
  }
}
3;
