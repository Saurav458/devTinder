const adminAuth = (req, res, next) => {
  const token = "xyz";
  if (token !== "xyz") {
    res.status(401).send({ message: "user is not authorised" });
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
    const token = "xyza";
    if (token !== "xyz") {
      res.status(401).send({ message: "user is not authorised" });
    } else {
      next();
    }
  };
module.exports={adminAuth,userAuth}