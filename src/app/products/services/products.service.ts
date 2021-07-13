import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  

  constructor() { }
  

  private productList=[{
    id:1,
    name:'product1',
    quantity:10,
    description:' this product has all the features of phones earhones generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    image:'https://www.shutterbug.com/images/styles/600_wide/public/10-Photography-Tricks.jpg', 
      stars:50, 
  },
{
  id:2,
    name:'product2',
    quantity:10,
    description: 'this product has all the features of phones earhones generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    image:'https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg',
    stars:150,

}
]
getproductlist():any []{
  return  this.productList;
  }

  
getProductDetails(id:number):{}{
return this.productList.find(element => element.id===id)!;
}
deleteProduct(id:number){
 const index= this.productList.findIndex(element => element.id);
 this.productList.splice (index,1)
}
increaseProductQuantity(id:number):void{
 const index=this.productList.findIndex(element=> element.id===id)!;
 this.productList[index].quantity++;
}
decreaseProductQuantity(id:number):void{
  const index=this.productList.findIndex(element=> element.id===id)!;
  this.productList[index].quantity--;
 }
 addProduct(product: { id: number; name: string; quantity: number; description: string; image: string; stars: number; }):void{
  product.id=this.productList.length+1;
  this.productList.push(product);
 }

}