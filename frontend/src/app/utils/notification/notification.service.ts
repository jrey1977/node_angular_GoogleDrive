import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Notification } from './notification.interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private message$: Subject<Notification>;

  constructor() {
    this.message$ = new Subject();
  }

  setMessage(mensaje: Notification) {
    this.message$.next(mensaje);
  }

  getMessage$(): Observable<Notification> {
    return this.message$.asObservable();
  }
}
