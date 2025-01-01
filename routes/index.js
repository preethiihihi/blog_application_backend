const express = require("express");
const router = express.Router();

const loginRouterFile = require("./login");

router.use("/", loginRouterFile);

module.exports = router;
