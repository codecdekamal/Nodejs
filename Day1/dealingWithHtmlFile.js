// You can this server by writing "nodemon firstServer.js"
// You can access the running server on "localhost:3000"
const http = require("http");
const {readFileSync} = require("fs");
// sending html file
const homePage =  readFileSync("./index.html");
const server = http.createServer((req,res)=>{
    if(req.url==="/contact"){
        res.writeHead(200,{"content-type":"text/html"},)
        res.write("<h1>Contacts</h1>")
        res.end();
    }
    // sending html file
   else if(req.url==="/home"){
    res.writeHead(200,{"content-type":"text/html"},)
    res.write(homePage)
    res.end();
    }
    else if(req.url==="/about"){
        res.writeHead(200,{"content-type":"text/html"},)
        res.write("<h1>about</h1>")
        res.end();
    }
    else{
        res.writeHead(404,{"content-type":"text/html"},)
        res.write("<h1>Not Found</h1>")
        res.end();
    }
    

})
server.listen(3000);