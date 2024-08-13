const con = require("../db");

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    user_type: {
      type: String,
      enum: ["super_admin", "accountant", "ca"],
      default: "super_admin",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
