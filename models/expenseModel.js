const con = require("../db");

var mongoose = require("mongoose");

var expenseSchema = new mongoose.Schema(
  {
    date: {
      required: true,
      type: String,
    },
    expense_type: {
      required: true,
      type: String,
    },
    amount: {
      required: true,
      type: String,
    },
    payment_type: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
    file:{
      type: String,
    },
    status:{
      type: Boolean,
      default : false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("expenses", expenseSchema);
