const express = require("express");
const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.static("./Day3/methods-public"))
app.get("/",(req,res)=>{
  res.send("this is home page")
})
app.get("/about",(req,res)=>{
  res.send("about")
})
app.post("/login",(req,res)=>{
  console.log(req.method,",",req.url)
  const name =  req.body.name;
  console.log(req.body)
  if(name) return res.send(`hii ${name}`);
   if(name==="") return res.redirect("/")
})
app.listen(5000,()=>{
  console.log("Listening at port 5000")
})