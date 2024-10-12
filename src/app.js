const express = require("express");

const app = express();

app.use("/admin", (req, res, next) => {
  const token = "xyza";
  if (token !== "xyz") {
    res.status(401).send({ message: "user is not authorised" });
  } else {
    next();
  }
});

app.get("/admin/getData", (req, res) => {
  res.send("All data sent");
});

app.delete("/admin/getData", (req, res) => {
  res.send("user is deleted");
});

app.listen(3000, () => {
  console.log(`server is listening at port${3000}`);
});
