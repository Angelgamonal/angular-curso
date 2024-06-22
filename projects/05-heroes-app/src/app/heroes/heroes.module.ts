import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './page/hero-page/hero-page.component';
import { LayoutComponent } from './layout/layout.component';
import { ListPageComponent } from './page/list-page/list-page.component';
import { NewPageComponent } from './page/new-page/new-page.component';
import { SearchPageComponent } from './page/search-page/search-page.component';

@NgModule({
  declarations: [HeroPageComponent, LayoutComponent, ListPageComponent, NewPageComponent, SearchPageComponent],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}