import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { NotificationComponent } from './notification/notification.component';
import { EtiquetasModule } from '../shared/etiquetas/etiquetas.module';

@NgModule({
  declarations: [PopupComponent, NotificationComponent],
  imports: [CommonModule, EtiquetasModule],
  exports: [PopupComponent, NotificationComponent],
})
export class UtilsModule {}
