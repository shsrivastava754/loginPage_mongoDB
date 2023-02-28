const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const Users = require('../models/users');

const signup = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/signup.html"));
};

const register = async (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

  let saltRounds = 10;
  let hashedPass = bcrypt.hashSync(password, saltRounds);

  const newUser = new Users({
    email: email,
    username: username,
    password: hashedPass
  });

  const result = await newUser.save();
  if(result){
    res.sendFile(path.join(__dirname, "../views/registerSuccessfull.html"));
  }else{
    res.send("Some Error");
  }
};

module.exports.signup = signup;
module.exports.register = register;