const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ragister = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists." });
    }
    const savedData = await newUser.save();
    res.status(200).json({ message: "User created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
    if (user) {
      if (user.password === password)
        {
          const token = jwt.sign({ username }, "your_jwt_secret");
          res.status(200).json({ token , user});
        }
        else
        {
          return res.status(401).send("incorrect password")
        }
    }
    else
    {
      return res.status(401).send("User not found");
    }
};

module.exports = { ragister, login };
