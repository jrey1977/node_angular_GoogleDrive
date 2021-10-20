import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Popup {
  type: string;
  src: string;
}

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private popup!: Popup;
  private popup$: Subject<Popup>;

  constructor() {
      this.popup$ = new Subject();
  }

  abrirPopup(pPopup: Popup){
      console.log('Se manda dato');
      this.popup = pPopup;
      this.popup$.next(this.popup);
  }

  getPopup$(): Observable<Popup> {
      console.log('Se recibe dato');
      return this.popup$.asObservable();
  }

}
