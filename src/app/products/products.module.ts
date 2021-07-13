import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { DetailsProductsComponent } from './details-products/details-products.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    ListProductsComponent,
     DetailsProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,

  ]
})
export class ProductsModule { }
