import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EtiquetasComponent } from './etiquetas.component';
import { ListadoEtiquetasComponent } from './listado-etiquetas/listado-etiquetas.component';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  declarations: [EtiquetasComponent, ListadoEtiquetasComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule
  ],
  exports: [EtiquetasComponent, ListadoEtiquetasComponent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EtiquetasModule {}
