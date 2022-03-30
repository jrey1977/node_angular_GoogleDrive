import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { first, take } from 'rxjs/operators';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';
import { EtiquetasService } from 'src/app/shared/etiquetas/etiquetas.service';
import { Etiqueta } from 'src/app/shared/etiquetas/models/etiquetas.interface';
import { PopupService } from 'src/app/utils/popup/services/popup.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popup',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '110px',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          height: '12px',
          opacity: 0.8,
          overflow: 'hidden',
        })
      ),
      transition('open => closed', [animate('0.3s ease-out')]),
      transition('closed => open', [animate('0.4s ease-in')]),
    ]),
  ],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  popup!: Archivo;
  multiPopup!: Archivo[];
  statePopup: boolean = false;
  stateMultiPopup: boolean = false;
  public urlImg = environment.urlImgGoogle;
  public etiquetas: Etiqueta[] = [];

  isOpen = false;

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

  toggle() {
    this.isOpen = !this.isOpen;
  }

  borrarEtiqueta(etiqueta: any) {
    console.log('Etiqueta que se borra:', etiqueta);
  }

  obtenerEtiquetas(idParam: string) {
    this.etiquetas = [];
    this.etiquetaService.obtenerEtiquetas(idParam).subscribe((res: any) => {
      this.etiquetas = res.arrayLabelNames;
    });
  }

  cerrarPopup() {
    this.popupService.cerrarPopup();
    this.isOpen = false;
  }

  cerrarMultiPopup() {
    this.popupService.cerrarPopupMulti();
  }
}
