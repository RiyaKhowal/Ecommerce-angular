import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductsComponent } from './details-products/details-products.component';
import { ListProductsComponent } from './list-products/list-products.component';


const routes: Routes = [
  {
    path:'',
    component:ListProductsComponent
  },
  {
    path:"product/:id",
    component:DetailsProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
