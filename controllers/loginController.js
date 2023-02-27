const path = require("path");
const bcrypt = require("bcrypt");
const fs = require("fs");
const alert = require("alert");
const Users = require('../models/users');

const login = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
};

const postLogin = async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let usersData = await Users.findOne({username:username});

  if (usersData) {
    let verified = bcrypt.compareSync(password, usersData.password);
    if (verified) {
      res.sendFile(path.join(__dirname, "../views/index.html"));
    } else {
      alert("Password Mismatch");
      res.sendFile(path.join(__dirname, "../views/login.html"));
    }
  } else {
    alert("Username does not exists");
    res.sendFile(path.join(__dirname, "../views/login.html"));
  }
};

module.exports.login = login;
module.exports.postLogin = postLogin;
