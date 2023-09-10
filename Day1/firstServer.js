const http = require("http")
const server = http.createServer((req,res)=>{
    console.log("Some one is knocking the door")
    res.writeHead(200,{"content-type":"text/html"},)
    res.write("<h1>Ice</h1>")
    res.end()
})
server.listen(3000);
// We have Setup our shop using createServer
//  and my shop address is 3000
//  and what kind of response You will get when you will
//  reach successful url(my shop channel) then you will 
//  get a ice cream