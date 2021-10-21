import { Component, OnInit } from '@angular/core';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';
import { PopupService } from 'src/app/utils/popup/services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  popup!: Archivo;

  constructor(private popupService: PopupService) {}

  ngOnInit(): void {
    this.popupService.getPopup$().subscribe((popupRecibido) => {
      this.popup = popupRecibido;
    });
  }
}
