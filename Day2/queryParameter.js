const express = require("express");       
const {products} = require("../Day2/data");
const app = express();
app.get("/",(req,res)=>{
    res.send(`<h1>Home Page</h1><a href="api/products">api</a>`)
})

app.get("/api/products",(req,res)=>{
    res.json(products);
    // query is built in key in req object of http
 // So,It will tell there is any query after the url ends for example
 // in this case /api/products?search=100
    console.log(req.query) // output { search: '100' }
})
 

app.get("/api/products/query",(req,res)=>{
    let sortedProducts = [...products]
    let {search,limit} = req.query;
    if(search){
      sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(req.query.search)
         })
 }
     if(limit){
       sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
      return  res.status(200).json([{Success:true,data:[]}])
    }
   return  res.json(sortedProducts)
})
app.listen(5000,()=>{
    console.log("Listening on port 5000.")
})