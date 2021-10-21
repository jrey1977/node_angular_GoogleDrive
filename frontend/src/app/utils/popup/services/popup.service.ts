import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private popup: boolean = false;
  private popup$: Subject<Archivo>;

  constructor() {
    this.popup$ = new Subject();
  }

  abrirPopup(pArchivo: Archivo) {
    console.log('Se manda dato');
    this.popup = true;
    this.popup$.next(pArchivo);
  }

  cerrarPopup() {
    console.log('Se elimina el dato');
    this.popup = false;
  }

  getPopup$(): Observable<Archivo> {
    console.log('Se recibe dato');
    return this.popup$.asObservable();
  }

  getPopupState() {
    return this.popup;
  }
}
