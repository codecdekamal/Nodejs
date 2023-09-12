const express = require("express");
const jsonData = require("./Day2/data")
const app = express();
app.get("/",(req,res)=>{
    res.json(jsonData)
})
app.listen(5000,()=>{
    console.log("listenting at port 5000.")
})