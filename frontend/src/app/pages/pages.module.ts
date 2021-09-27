import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotosComponent } from './fotos/fotos/fotos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    FotosComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule
  ]
})
export class PagesModule { }
