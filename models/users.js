const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

require('dotenv').config();
const uri = process.env.MONGO_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected with the DB");
  })
  .catch((err) => {
    console.log(err);
  });

const dbScehma = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
});

const Users = new mongoose.model("Users", dbScehma);

module.exports = Users;
