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
  private popupEdit$: Subject<Archivo>;
  private popupEditState$: Subject<boolean>;

  constructor() {
    this.popup$ = new Subject();
    this.popupMulti$ = new Subject();
    this.popupState$ = new Subject();
    this.popupState$.next(false);
    this.popupMultiState$ = new Subject();
    this.checkedInputs$ = new Subject();
    this.popupEdit$ = new Subject();
    this.popupEditState$ = new Subject();
  }

  abrirPopup(pArchivo: Archivo) {
    this.popupState$.next(true);
    this.popup$.next(pArchivo);
  }

  abrirCerrarPopupEdit(condition: boolean) {
    this.popupEditState$.next(condition);
  }

  abrirCerrarPopupMulti(condition: boolean) {
    this.popupMultiState$.next(condition);
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
    return this.popup$.asObservable();
  }

  getPopupState$(): Observable<boolean> {
    return this.popupState$.asObservable();
  }

  getEditPopup$(): Observable<Archivo> {
    return this.popupEdit$.asObservable();
  }

  getEditPopupState$(): Observable<boolean> {
    return this.popupEditState$.asObservable();
  }

  getMultiEditPopup$(): Observable<Archivo[]> {
    return this.popupMulti$.asObservable();
  }

  getMultiEditPopupState$(): Observable<boolean> {
    return this.popupMultiState$.asObservable();
  }
}
