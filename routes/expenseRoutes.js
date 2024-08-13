const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const expenseController = require("../controllers/expenseController");
const { cloudinaryFileUploder , uploadlocal} = require("../middleware/fileUploder");

router.post('/add_expense',cloudinaryFileUploder.single('file'), expenseController.add);
router.patch('/update_status/:id', expenseController.update_expense_status);
router.get('/expenses', expenseController.get_expenses);

module.exports = router;
