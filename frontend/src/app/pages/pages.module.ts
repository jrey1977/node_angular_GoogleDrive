import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ArchivosComponent, NotFoundComponent, HomeComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    NgxMasonryModule,
    BrowserAnimationsModule
  ],
})
export class PagesModule {}
