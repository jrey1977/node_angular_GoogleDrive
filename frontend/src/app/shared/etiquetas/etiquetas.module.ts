import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtiquetasComponent } from './etiquetas.component';
import { BrowserModule } from '@angular/platform-browser';
import { ListadoEtiquetasComponent } from './listado-etiquetas/listado-etiquetas.component';

@NgModule({
  declarations: [EtiquetasComponent, ListadoEtiquetasComponent],
  imports: [CommonModule, BrowserModule],
  exports: [EtiquetasComponent, ListadoEtiquetasComponent, CommonModule],
})
export class EtiquetasModule {}
