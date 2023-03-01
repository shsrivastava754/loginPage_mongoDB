const path = require("path");
const bcrypt = require("bcrypt");
const SignupService = require('../services/SignupService');

const signup = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/signup.html"));
};

const register = async (req, res) => {
  try {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
  
    let saltRounds = 10;
    let hashedPass = bcrypt.hashSync(password, saltRounds);
  
    const result = await SignupService.register(email,username,hashedPass);

    if(result){
      res.sendFile(path.join(__dirname, "../views/registerSuccessfull.html"));
    }else{
      res.send("Some Error");
    }
  } catch (error) {
    throw Error(error);
  }
};

module.exports.signup = signup;
module.exports.register = register;