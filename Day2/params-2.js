const express = require("express");
const {products} = require("../Day2/data")
const newProducts = products.map((element)=>{
    const {id,name,image} = element;
    return {id,name,image}
 })
const app =express();
app.get("/",(req,res)=>{
    res.send(`<h1>Home</h1><a href="/api/products">Products</a>`)
})
app.get("/api/products",(req,res)=>{
 
    res.json(newProducts);
})
app.get("/api/products/:id",(req,res)=>{
    /******************One Way of doing this but it is not most efficient way to this */
    // switch (parseInt(req.params["id"])) {
    //     case 1: res.send(newProducts[0])        
    //         break;
    //         case 2: res.send(newProducts[1])        
    //         break;
    //         case 3:  res.send(newProducts[2])   
    //         break;  
    //     default:
    //         break;
    // }
    // used destructring
        const {id} = req.params; // since id has type string
        console.log(id)
        console.log(req.params)
     const singleProducts = products.find((element)=>element.id === Number(id))
     if(singleProducts) res.json(singleProducts);
     else res.status(404).send("<h2>Product is not available</h2>")
  })
  
app.listen(5000,()=>{
    console.log("Your port has been started on 5000")
})