const express = require("express");

const router = express.Router();

const signUpController = require("../controllers/signUp_controller");

router.post("/", signUpController.signUp);

module.exports = router;