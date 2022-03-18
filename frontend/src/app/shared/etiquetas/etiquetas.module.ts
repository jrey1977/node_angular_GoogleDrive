import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { EtiquetasComponent } from './etiquetas.component';
import { ListadoEtiquetasComponent } from './listado-etiquetas/listado-etiquetas.component';
@NgModule({
  declarations: [EtiquetasComponent, ListadoEtiquetasComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [EtiquetasComponent, ListadoEtiquetasComponent, CommonModule],
})
export class EtiquetasModule {}
