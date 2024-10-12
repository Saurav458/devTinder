const express = require("express");
const {adminAuth,userAuth}=require("./middlewares/auth")
const app = express();

app.use("/admin",adminAuth );

app.get("/user/data",userAuth,(req,res)=>{
    res.send("all user data sent")
})
app.get("/user/login",(req,res)=>{
    res.send("user is logigin")
})
app.get("/admin/getData", (req, res) => {
  res.send("All data sent");
});

app.delete("/admin/getData", (req, res) => {
  res.send("user is deleted");
});

app.listen(3000, () => {
  console.log(`server is listening at port${3000}`);
});
