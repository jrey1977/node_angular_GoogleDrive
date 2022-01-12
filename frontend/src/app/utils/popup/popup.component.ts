import { Component, OnInit } from '@angular/core';
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
  public etiquetas: string[] = [];

  constructor(
    public popupService: PopupService,
    private etiquetaService: EtiquetasService
  ) {}

  ngOnInit(): void {
    this.popupService.getPopup$().subscribe((popupRecibido) => {
      this.popup = popupRecibido;
      this.obtenerEtiquetas(this.popup.id);
    });
    this.popupService.getPopupState$().subscribe((estado) => {
      this.statePopup = estado;
    });
  }

  obtenerEtiquetas(idParam: string) {
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
