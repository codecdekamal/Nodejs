const express = require("express");
const app = express();
// { extended: false }: This is an option passed to express.urlencoded(). When extended is set to false, the values in the parsed data are strings or arrays, and it does not allow for nested objects in the data. If you set it to true, it allows for more complex data structures with nested objects.
app.use(express.urlencoded({extended:false}))
//  express.static(root, [options])
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