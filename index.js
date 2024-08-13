const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require('./routes/userRoutes.js');
const expenseRouter = require('./routes/expenseRoutes.js');
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/auth',userRouter);
app.use('/api',expenseRouter);

app.listen(process.env.PORT, () => {
  console.log("server running on port : " + process.env.PORT);
});

