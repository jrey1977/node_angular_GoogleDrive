import { Component, OnInit } from '@angular/core';
import { Notification } from './notification.interface';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  notification!: Notification;

  constructor(public notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.getMessage$().subscribe((notificationReceived) => {
      this.notification = notificationReceived;
    });
  }
}
