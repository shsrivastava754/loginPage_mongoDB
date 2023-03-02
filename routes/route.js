const express = require("express");
const router = express.Router();
const login = require("../controllers/loginController");
const signup = require("../controllers/signupController");
const indexPage = require("../controllers/indexController");

router.get("/", login.login);
router.get("/signup", signup.signup);
router.get("/index", indexPage);

router.post("/signupPost", signup.register);
router.post("/loginPost", login.postLogin);

module.exports = router;
