import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private popupState$: Subject<boolean>;
  private popupMultiState$: Subject<boolean>;
  private popup$: Subject<Archivo>;
  private popupMulti$: Subject<Archivo[]>;
  private checkedInputs$: Subject<boolean>;

  constructor() {
    this.popup$ = new Subject();
    this.popupMulti$ = new Subject();
    this.popupState$ = new Subject();
    this.popupState$.next(false);
    this.popupMultiState$ = new Subject();
    this.checkedInputs$ = new Subject();
  }

  abrirPopup(pArchivo: Archivo) {
    this.popupState$.next(true);
    this.popup$.next(pArchivo);
  }

  abrirPopupMulti(pArchivos: Archivo[]) {
    this.popupMultiState$.next(true);
    this.popupMulti$.next(pArchivos);
  }

  cerrarPopup() {
    this.popupState$.next(false);
  }

  getCheckedInputsState$(): Observable<boolean> {
    return this.checkedInputs$.asObservable();
  }

  cerrarPopupMulti() {
    this.popupMultiState$.next(false);
    this.checkedInputs$.next(false);
  }

  getPopup$(): Observable<Archivo> {
    console.log('Se recibe dato');
    return this.popup$.asObservable();
  }

  getMultiPopup$(): Observable<Archivo[]> {
    console.log('Se recibe array de datos');
    return this.popupMulti$.asObservable();
  }

  getPopupState$(): Observable<boolean> {
    return this.popupState$.asObservable();
  }

  getMultiPopupState$(): Observable<boolean> {
    return this.popupMultiState$.asObservable();
  }
}
