const Users = require('./models/users');

// create new document
const createDocument = async ()=>{
    const docs = new Users({
        email: "garvsrivastava2001@gmail.com",
        username: "garv1830",
        password: "garv1830"
    });
    
    const res = await docs.save();
    console.log(res);
    
}

createDocument();