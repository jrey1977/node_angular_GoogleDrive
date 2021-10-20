import { Component, OnInit } from '@angular/core';
import { Popup, PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  popup!: Popup;

  constructor(
    private popupService: PopupService
  ) { }

  ngOnInit(): void {
      this.popupService.getPopup$().subscribe(popupRecibido => {
          this.popup = popupRecibido;
      })
  }

}
