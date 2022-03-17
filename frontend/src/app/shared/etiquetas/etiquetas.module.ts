import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtiquetasComponent } from './etiquetas.component';
import { BrowserModule } from '@angular/platform-browser';
import { ListadoEtiquetasComponent } from './listado-etiquetas/listado-etiquetas.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [EtiquetasComponent, ListadoEtiquetasComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  exports: [EtiquetasComponent, ListadoEtiquetasComponent, CommonModule],
})
export class EtiquetasModule {}
