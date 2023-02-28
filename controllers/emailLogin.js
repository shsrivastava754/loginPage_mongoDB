const path = require("path");
const bcrypt = require("bcrypt");
const alert = require("alert");
const EmailService = require("../services/LoginService");

const emailLogin = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/email.html"));
};

const postEmail = async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
  
    let usersData = await EmailService.getWithEmail(email);
  
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
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { emailLogin, postEmail };
