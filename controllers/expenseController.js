const Expense = require("../models/expenseModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const add = async (req, res, file) => {
  const newExpense = new Expense({ ...req.body, file: req.file.path });
  try {
    const result = await newExpense.save();
    res.status(200).json({ message: "Expense Added successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

const get_expenses = async (req, res) => {
  try {
    const expenseData = await Expense.find();
    if (!expenseData || expenseData.length === 0) {
      return res.status(404).json({ message: "data not found." });
    }
    res.status(200).json(expenseData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

const update_expense_status = async (req,res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).send("Expense not found");
    }

    // Toggle status or set based on your logic
    expense.status = !expense.status;
    await expense.save();

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

module.exports = { add, get_expenses , update_expense_status};
