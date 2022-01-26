import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private message$: Subject<string>;

  constructor() {
    this.message$ = new Subject();
  }

  setMessage(mensaje: string) {
    this.message$.next(mensaje);
  }

  getMessage$(): Observable<string> {
    console.log('Se recibe mensaje:');
    return this.message$.asObservable();
  }
}
