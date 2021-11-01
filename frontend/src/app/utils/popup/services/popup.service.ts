import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private popupState$: Subject<boolean>;
  private popup$: Subject<Archivo>;

  constructor() {
    this.popup$ = new Subject();
    this.popupState$ = new Subject();
    this.popupState$.next(false);
  }

  abrirPopup(pArchivo: Archivo) {
    this.popupState$.next(true);
    this.popup$.next(pArchivo);
  }

  cerrarPopup() {
    this.popupState$.next(false);
  }

  getPopup$(): Observable<Archivo> {
    console.log('Se recibe dato');
    return this.popup$.asObservable();
  }

  getPopupState$(): Observable<boolean> {
    return this.popupState$.asObservable();
  }
}
