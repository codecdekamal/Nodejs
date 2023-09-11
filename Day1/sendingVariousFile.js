
/*************For staring the file paste the code in app.js************** */
           // and run npm start

const http = require("http")
const {readFileSync} = require("fs")
const homePage =  readFileSync("./Day1/navbar-app/index.html");
const styles =  readFileSync("./Day1/navbar-app/styles.css");
const script =  readFileSync("./Day1/navbar-app/browser-app.js");
const svg =  readFileSync("./Day1/navbar-app/logo.svg");


const server = http.createServer((req,res)=>{

    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/html",},)
        res.write(homePage)
        res.end()
    }
    else if(req.url==="/styles.css"){
        res.writeHead(200,{"content-type":"text/css",},)
        res.write(styles)
        res.end()
    }
    else if(req.url ==="/browser-app.js"){
        res.writeHead(200,{"content-type":"text/js",},)
        res.write(script)
        res.end() 
    }
    else if(req.url ==="/logo.svg"){
        res.writeHead(200,{"content-type":"text/js",},)
        res.write(svg)
        res.end() 
    }
    else{
        res.writeHead(404,{"content-type":"text/html"},)
        res.write("<h1>Not Found</h1>")
        res.end()
    }
    })
server.listen(3000);