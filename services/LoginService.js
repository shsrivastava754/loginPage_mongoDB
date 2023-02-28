const Users = require("../models/users");

const getWithEmail = async (email) => {
  try {
    let users = await Users.findOne({ email: email });
    return users;
  } catch (error) {
    throw Error("Error while getting email");
  }
};

const getWithUsername = async (username) => {
  try {
    let users = await Users.findOne({ username: username });
    return users;
  } catch (error) {
    throw Error("Error while getting username");
  }
};

// module.exports = { getWithEmail, getWithUsername };
module.exports.getWithEmail = getWithEmail;
module.exports.getWithUsername = getWithUsername;