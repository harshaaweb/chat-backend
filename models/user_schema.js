require("dotenv").config();
const mongoose = require("mongoose");

// schema
const user_sehema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  otp: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    reqired: true,
  },
  age: {
    type: String,
  },
  role: {
    type: String,
    reqired: true,
    default: "user",
    enum: ["user"],
  },
  image: {
    type: String,
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  profiletype: {
    type: String,
    default: "normal",
    enum: ["normal", "business", "group", "self"],
  }
},{
  timestamps: true,
});

module.exports = mongoose.model("User", user_sehema);
