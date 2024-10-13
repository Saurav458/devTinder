const express = require("express");
const connectDb = require("./config/database");
const app = express();


const connectionDb=async()=>{
    try{
        const result=await connectDb()
        if(result){
            console.log("database connected successfully")
            app.listen(7777,()=>{
                console.log(`server is listening at port{7777}`)
            })
        }
    }catch(err){
        console.log(err.message)
    }
   
}
connectionDb()

