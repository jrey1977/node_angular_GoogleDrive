import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { NotificationComponent } from './notification/notification.component';
import { LoadingComponent } from './loading/loading.component';
import { EtiquetasModule } from '../shared/etiquetas/etiquetas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [PopupComponent, NotificationComponent, LoadingComponent],
  imports: [
    CommonModule,
    EtiquetasModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  exports: [PopupComponent, NotificationComponent, LoadingComponent],
})
export class UtilsModule {}
