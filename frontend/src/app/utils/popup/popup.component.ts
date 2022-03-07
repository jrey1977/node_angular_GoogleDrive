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
  multiPopup!: Archivo[];
  statePopup: boolean = false;
  stateMultiPopup: boolean = false;
  public urlImg = environment.urlImgGoogle;
  public etiquetas: any[] = [];

  constructor(
    public popupService: PopupService,
    private etiquetaService: EtiquetasService
  ) {}

  ngOnInit(): void {
    // Me suscribo a los cambios que haya en popup y que se envían como parámetro en
    // el "next" de la función "abrirPopup" del service
    this.popupService.getPopup$().subscribe((popupRecibido) => {
      this.popup = popupRecibido;
      this.obtenerEtiquetas(this.popup.id);
    });
    this.popupService.getPopupState$().subscribe((estado) => {
      this.statePopup = estado;
    });

    // Me suscribo a los cambios que haya en popup de multi edit y que se envían como parámetro en
    // el "next" de la función "abrirMultiPopup" del service
    this.popupService.getMultiPopup$().subscribe((popupRecibido) => {
      this.multiPopup = popupRecibido;
    });
    this.popupService.getMultiPopupState$().subscribe((estado) => {
      this.stateMultiPopup = estado;
    });
  }

  obtenerEtiquetas(idParam: string) {
    this.etiquetas = [];
    this.etiquetaService.obtenerEtiquetas(idParam).subscribe((res: any) => {
      console.log('Etiquetas del archivo:', res.arrayLabelNames);
      this.etiquetas = res.arrayLabelNames;
    });
  }

  cerrarPopup() {
    console.log('Entro en cerrarPopup');
    this.popupService.cerrarPopup();
  }

  cerrarMultiPopup() {
    console.log('Entro en cerrarMultiPopup');
    this.popupService.cerrarPopupMulti();
  }
}
