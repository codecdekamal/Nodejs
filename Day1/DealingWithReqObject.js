const http = require("http")
const server = http.createServer((req,res)=>{
    if(req.url==="/contact"){
        res.writeHead(200,{"content-type":"text/html"},)
        res.write("<h1>contact</h1>")
        res.end()
    }
   else if(req.url==="/home"){
        res.writeHead(200,{"content-type":"text/html"},)
        res.write("<h1>Home</h1>")
        res.end()
    }
    else if(req.url==="/about"){
        res.writeHead(200,{"content-type":"text/html"},)
        res.write("<h1>about</h1>")
        res.end()
    }
    else{
        res.writeHead(404,{"content-type":"text/html"},)
        res.write("<h1>Not Found</h1>")
        res.end()
    }
    

})
server.listen(3000);