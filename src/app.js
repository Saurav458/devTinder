const express = require("express");

const app=express()

// this will match all the http methods with same endpoint because it is generic
app.use("/test/:userId/:password/:name",(req,res)=>{
    console.log(req.params)
    console.log("8re.query",req.query)
     res.send( "hello from server123")
})
app.listen(3000,()=>{
    console.log(`server is listening at port${3000}`)
})