const express = require("express");
const products = require("./data")
const whatWeWant = require("./whatweWant")
const app = express();

const gettingSorted =(val) =>{
  let {id,name,image} = val;
  return {id,name,image};
}

app.get("/",(req,res)=>{
    res.send(`<h1>Home Page</h1><a href="/api/products"/>products</a>`)
})

app.get("/api/products",(req,res)=>{
    const newProducts =  whatWeWant(products.products,gettingSorted)
    res.json(newProducts)
})

app.listen(5000,()=>{
  console.log("server is listening at port 5000")
})