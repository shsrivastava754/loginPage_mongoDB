const path = require("path");
const bcrypt = require("bcrypt");
const LoginService = require("../services/LoginService");
const alert = require("alert");

const login = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
};

const postLogin = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
  
    let usersData = email.length==0 ? await LoginService.getWithUsername(username) : await LoginService.getWithEmail(email);
  
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
  } catch (error) {
    throw Error(error);
  }
  
};

module.exports.login = login;
module.exports.postLogin = postLogin;
