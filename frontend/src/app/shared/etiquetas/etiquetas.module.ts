import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtiquetasComponent } from './etiquetas.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [EtiquetasComponent],
  imports: [CommonModule, BrowserModule],
  exports: [EtiquetasComponent, CommonModule],
})
export class EtiquetasModule {}
