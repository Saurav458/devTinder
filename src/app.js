const express = require("express");

const app = express();

// we can wrape route handlers  inside array  it will give same output
//  app.use("/test",[rh1,rh2,rh3,rh4])
app.use(
  "/test",
  (req, res, next) => {
    // res.send("1stresponse")
    next();
  },
  (req, res, next) => {
    // res.send("2ndresponse")
    next();
  },
  (req, res) => {
    res.send("3rdndresponse");

    console.log("outputfinal;")
  }
);

app.listen(3000, () => {
  console.log(`server is listening at port${3000}`);
});
