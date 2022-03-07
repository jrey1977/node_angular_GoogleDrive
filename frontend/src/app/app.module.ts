import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { EtiquetasModule } from './shared/etiquetas/etiquetas.module';
import { UtilsModule } from './utils/utils.module';
import { ListadoEtiquetasComponent } from './src/app/shared/etiquetas/listado-etiquetas/listado-etiquetas.component';

@NgModule({
  declarations: [AppComponent, ListadoEtiquetasComponent],
  imports: [
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UtilsModule,
    CommonModule,
    EtiquetasModule,
  ],
  exports: [CommonModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
