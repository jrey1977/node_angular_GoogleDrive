import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';
import { environment } from 'src/environments/environment';
import { EtiquetasService } from './etiquetas.service';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.scss'],
})
export class EtiquetasComponent implements OnInit {
  public urlImg = environment.urlImgGoogle;
  public _fotoSeleccionada?: Archivo;
  @Input() set fotoSeleccionada(value: Archivo) {
    this._fotoSeleccionada = value;
    this.obtenerEtiquetas(this._fotoSeleccionada.id);
  }

  public etiquetas: string[] = [];
  constructor(
    public bsModalRef: BsModalRef,
    private etiquetaService: EtiquetasService
  ) {}

  ngOnInit(): void {
    console.log('Cargo componente de etiquetas');
  }

  obtenerEtiquetas(idParam: string) {
    console.log('this._fotoSeleccionada.id', idParam);
    this.etiquetaService.obtenerEtiquetas(idParam).subscribe((res: any) => {
      console.log('Etiquetas del archivo:', res.arrayLabelNames);
      this.etiquetas = res.arrayLabelNames;
    });
  }

  borrarEtiqueta(etiqueta: string) {
    console.log('Borro etiqueta con nombre:', etiqueta);
    this.etiquetaService.borrarEtiqueta(etiqueta);
  }
}
