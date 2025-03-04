import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/shearch-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchBoxComponent,
    CardListComponent,
    CardItemComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class GifsModule {}
