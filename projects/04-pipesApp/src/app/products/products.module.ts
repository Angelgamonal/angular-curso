import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UnCommonPageComponent } from './pages/un-common-page/un-common-page.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UnCommonPageComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
