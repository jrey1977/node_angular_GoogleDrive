import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtiquetasComponent } from './etiquetas.component';



@NgModule({
  declarations: [EtiquetasComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EtiquetasComponent
  ]
})
export class EtiquetasModule { }
