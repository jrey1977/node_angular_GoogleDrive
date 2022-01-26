import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [PopupComponent, NotificationComponent],
  imports: [CommonModule],
  exports: [PopupComponent, NotificationComponent],
})
export class UtilsModule {}
