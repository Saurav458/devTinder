const mongoose = require("mongoose");
var validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      minLength: 5,
      maxLength: 20,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      validate(value){
          if(!validator.isEmail(value)){
              throw new Error("invalid email please provide valid email")
          }
      },
      unique: true,
    },
    age: {
      type: Number,
      min: 18,
      max: 60,
    },
    gender: {
      type: String,
      // enum:["male","female","other"]
      validate(value) {
        if (!["male", "female", "other"].includes(value)) {
          throw new Error("invalid gender");
        }
      },
    },
    about: {
      type: String,
      default: "this is about data",
    },
    skills: {
      type: [String],
    },
    photoUrl: {
      type: String,
      default: "",
      validate(value){
        if(!validator.isURL(value)){
            throw new Error("invalid url please provide valid url")
        }
      }
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
