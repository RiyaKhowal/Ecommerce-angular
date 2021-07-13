import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.scss']
})
export class DetailsProductsComponent implements OnInit {
  id:number=0;
  productDecsription: any;

  constructor(private activatedRoute: ActivatedRoute,private productservice:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    console.log(this.id);
    this.getProductDescription(this.id);
  }
  getProductDescription(id:number){
    this.productDecsription=this.productservice.getProductDetails(id);
    console.log(this.productDecsription);
  }
  goBack(){
this.router.navigate(['']);
  }

}
