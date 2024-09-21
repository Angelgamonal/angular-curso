import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroPageComponent } from './page/hero-page/hero-page.component';
import { LayoutComponent } from './layout/layout.component';
import { ListPageComponent } from './page/list-page/list-page.component';
import { NewPageComponent } from './page/new-page/new-page.component';
import { SearchPageComponent } from './page/search-page/search-page.component';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipe/hero-image.pipe';
import { DialogContentDeleteComponent } from './components/dialog-content-delete/dialog-content-delete.component';

@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,
    DialogContentDeleteComponent,

    // Pipes
    HeroImagePipe,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class HeroesModule {}
