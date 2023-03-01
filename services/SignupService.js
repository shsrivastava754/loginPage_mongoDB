const Users = require('../models/users');

const register = async (email,username,hashedPass)=>{
    const newUser = new Users({
        email: email,
        username: username,
        password: hashedPass
    });
    
    const result = await newUser.save();
    return result;
};

module.exports.register = register;