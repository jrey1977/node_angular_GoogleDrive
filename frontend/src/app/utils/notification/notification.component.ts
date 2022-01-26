import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  message?: string;

  constructor(public notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.getMessage$().subscribe((mensajeRecibido) => {
      this.message = mensajeRecibido;
    });
  }
}
