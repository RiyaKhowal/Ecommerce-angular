import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  productList: any;

  constructor(private service:ProductsService,private router:Router) { }
   value:any=null;
  searchText:string="";
  filteredProductList:any= null;

  ngOnInit(): void {
    this.value =  this.service.getproductlist();
 this.filteredProductList=this.value;
    }
  getProductDetails(id:number){
    this.router.navigate(['/product/'+id]);
  }

  filterProducts(){
    this.filteredProductList=this.value.filter((element: { name: string; }) => element.name.includes(this.searchText));
  
 }
 clearSearch(){
   this.filteredProductList=this.value;
   this.searchText="";
 }
}


