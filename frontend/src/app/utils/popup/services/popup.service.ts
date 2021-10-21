import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private popup!: Archivo;
  private popup$: Subject<Archivo>;

  constructor() {
    this.popup$ = new Subject();
  }

  abrirPopup(pArchivo: Archivo) {
    console.log('Se manda dato');
    this.popup = pArchivo;
    this.popup$.next(this.popup);
  }

  getPopup$(): Observable<Archivo> {
    console.log('Se recibe dato');
    return this.popup$.asObservable();
  }
}
