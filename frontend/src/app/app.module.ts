import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { UtilsModule } from './utils/utils.module';


@NgModule({
  declarations: [AppComponent],
  imports: [PagesModule, BrowserModule, AppRoutingModule, HttpClientModule, UtilsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
