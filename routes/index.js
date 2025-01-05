const express = require("express");
const router = express.Router();

const loginRouterFile = require("./login");
const signUpRouterFile=require('./signUp');
const blogRouter=require('./blog');

router.use("/", loginRouterFile);
router.use("/signup",signUpRouterFile)
router.use('/blog',blogRouter)

module.exports = router;
