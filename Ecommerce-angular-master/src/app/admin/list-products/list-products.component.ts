import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  constructor(private service:ProductsService,private router:Router) { }
   value:any=null;
  searchText:string="";
  filteredProductList= null;

  ngOnInit(): void {
    this.value= this.service.getproductlist();
    console.log(this.value);
    this.filteredProductList=this.value;
  }

  gotoProductList(){
    this.router.navigate(['']);
  }

  filterProducts(){
   this.filteredProductList=this.value.filter((element: { name: string; }) => element.name.includes(this.searchText));
   console.log(this.filteredProductList);
 }
 clearSearch(){
   this.filteredProductList=this.value;
   this.searchText="";
 }
 deleteProduct(item:any){
this.service.deleteProduct(item.id);
console.log(this.filteredProductList);
 }
 increaseProductQuantity(item:any){
   this.service.increaseProductQuantity(item.id);
 }
 decreaseProductQuantity(item:any){
  this.service.decreaseProductQuantity(item.id);
  this.router.navigate(['/admin']);
}
 
}



