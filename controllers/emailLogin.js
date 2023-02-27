const path = require("path");
const bcrypt = require("bcrypt");
const alert = require("alert");
const Users = require('../models/users');

const emailLogin = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/email.html"));
};

const postEmail = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let usersData = await Users.findOne({email:email});

  if (usersData) {
    let verified = bcrypt.compareSync(password, usersData.password);
    if (verified) {
      res.sendFile(path.join(__dirname, "../views/index.html"));
    } else {
      alert("Password Mismatch");
      res.sendFile(path.join(__dirname, "../views/email.html"));
    }
  } else {
    alert("Email does not exists");
    res.sendFile(path.join(__dirname, "../views/email.html"));
  }
};

module.exports.emailLogin = emailLogin;
module.exports.postEmail = postEmail;
