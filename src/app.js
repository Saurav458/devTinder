const express = require("express");
const connectDb = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());
app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    const data = await user.save();
    res.send({ message: "user added successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.patch("/signup/:userId", async (req, res) => {
  try {
    const allowUpdates = ["gender", "photoUrl", "about", "skills"];
    const{skills}=req.body;
    if(skills.length>10){
        throw new Error("length is more")
    }
    const isAllowed = Object.keys(req.body).every((k) =>
      allowUpdates.includes(k)
    );
    if (!isAllowed) {
      throw new Error("you cannot update");
    }
    const { userId } = req.params;
    const { id } = req.body;
    const result = await User.findByIdAndUpdate({_id:userId}, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    res.send({ message: "updatedsuccessful", data: result });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
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
