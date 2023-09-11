const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("You have started the server")
})

app.listen(5000,()=>{
    console.log("Your server has been started.")
})