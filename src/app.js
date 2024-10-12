const express = require("express");

const app = express();
// app.get("/test",(req,res,next)=>{
//     // res.send("2ndresponse")
//     next()
// })
// app.get("/test",(req,res,next)=>{
//     console.log("1stuser")
//     // next()
// })
const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  const cb2 = function (req, res) {
    res.send('Hello from C!')
  }
  
  app.get('/test/c', [cb0, cb1, cb2])
//   app.get('/test/c/:from-:to', [cb0, cb1, cb2])


app.listen(3000, () => {
  console.log(`server is listening at port${3000}`);
});
