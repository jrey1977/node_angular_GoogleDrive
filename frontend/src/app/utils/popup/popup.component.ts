import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';
import { EtiquetasService } from 'src/app/shared/etiquetas/etiquetas.service';
import { PopupService } from 'src/app/utils/popup/services/popup.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  popup!: Archivo;
  statePopup: boolean = false;
  public urlImg = environment.urlImgGoogle;
  public _fotoSeleccionada?: Archivo;
  @Input() set fotoSeleccionada(value: Archivo) {
    this._fotoSeleccionada = value;
    this.obtenerEtiquetas(this._fotoSeleccionada.id);
  }

  public etiquetas: string[] = [];
  constructor(
    public popupService: PopupService,
    public bsModalRef: BsModalRef,
    private etiquetaService: EtiquetasService
  ) {}

  ngOnInit(): void {
    this.popupService.getPopup$().subscribe((popupRecibido) => {
      this.popup = popupRecibido;
    });
    this.popupService.getPopupState$().subscribe((estado) => {
      this.statePopup = estado;
    });
  }

  obtenerEtiquetas(idParam: string) {
    console.log('this._fotoSeleccionada.id', idParam);
    this.etiquetaService.obtenerEtiquetas(idParam).subscribe((res: any) => {
      console.log('Etiquetas del archivo:', res.arrayLabelNames);
      this.etiquetas = res.arrayLabelNames;
    });
  }

  cerrarPopup() {
    console.log('Entro en cerrarPopup');
    this.popupService.cerrarPopup();
  }
}
