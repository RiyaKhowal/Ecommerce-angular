var express= require('express');
var app=express();
const cors=require('cors');
app.use(cors());
var productList= ([{
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

}]);
app.get('/product', function(req,res){

    res.json(productList);
});

app.get('/getProductDetails/:id',function(req,res){
const rproduct = productList.find(element => element.id == req.params.id);
console.log(rproduct);
res.json(rproduct);
});

app.get('/deleteProduct/:id',function(req,res){
  const dproduct = productList.findIndex(element => element.id == req.params.id);
 productList.splice(dproduct,1);
  res.json(productList);
  });

  app.get('/increaseProductQuantity/:id', function(req,res){
  const index= productList.findIndex(element => element.id == req.params.id);
  productList[index].quantity++;
  res.send(productList);
  });

  app.get('/decreaseProductQuantity/:id', function(req,res){
    const index= productList.findIndex(element => element.id == req.params.id);
    productList[index].quantity--;
    res.send(productList);
    });



app.listen(4000);
