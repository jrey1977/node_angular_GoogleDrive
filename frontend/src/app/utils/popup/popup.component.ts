import { Component, OnInit } from '@angular/core';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';
import { PopupService } from 'src/app/utils/popup/services/popup.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  popup!: Archivo;
  statePopup:boolean = false;
  public urlImg = environment.urlImgGoogle;

  constructor(public popupService: PopupService) {}

  ngOnInit(): void {
    this.popupService.getPopup$().subscribe((popupRecibido) => {
      this.popup = popupRecibido;
    });
    this.popupService.getPopupState$().subscribe((estado) => {
      this.statePopup = estado;
    });
  }

  cerrarPopup() {
    console.log('Entro en cerrarPopup');
    this.popupService.cerrarPopup();
  }
}
