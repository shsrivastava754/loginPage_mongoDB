const mongoose = require('mongoose');
mongoose.set('strictQuery',false);

mongoose.connect('mongodb://127.0.0.1:27017/loginDb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{console.log("Connected with the DB")})
.catch((err)=>{console.log(err)});

const dbScehma = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});

const Users = new mongoose.model("Users",dbScehma);

module.exports = Users;