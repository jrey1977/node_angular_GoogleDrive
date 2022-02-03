import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Notification } from './notification.interface';
import { NotificationService } from './notification.service';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate(
    '0.5s ease-in',
    style({
      opacity: 1,
    })
  ),
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate(
    '0.5s ease-out',
    style({
      opacity: 0,
    })
  ),
]);

const fadeIn = trigger('fadeIn', [enterTransition]);

const fadeOut = trigger('fadeOut', [leaveTrans]);

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [fadeIn, fadeOut],
})
export class NotificationComponent implements OnInit {
  notification!: Notification;
  show!: boolean;
  fixed!: boolean;

  constructor(public notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.getMessage$().subscribe((notificationReceived) => {
      this.show = true;
      // No es fixed, así que se face fade out
      if (!notificationReceived.fixed) {
        setTimeout(() => {
          // Se vuelve a comprobar que no es fixed, por si
          // ha habido una notificación posterior que si lo es
          if (this.fixed !== true) {
            this.show = false;
          }
        }, 1000);
      } else {
        this.fixed = true;
      }
      this.notification = notificationReceived;
    });
  }
}
