const express = require("express");
const connectDb = require("./config/database");
const User=require('./models/user')
const app = express();

app.post("/signup", (req, res) => {
  const userObj = {
    firstName: "saurav",
    lastName: "jain",
    age: 20,
    gender: "male",
  };
// create the instance of User Model instance like documents of User Class
  const user=new User(userObj)
   user.save().then((data)=>{
    res.send({message:"user add successfully",data})

   }).catch((err)=>{
    res.send({message:"something",error:err.message})

   })
});

const connectionDb = async () => {
  try {
    const result = await connectDb();
    if (result) {
      console.log("database connected successfully");
      app.listen(7777, () => {
        console.log(`server is listening at port{7777}`);
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};
connectionDb();
