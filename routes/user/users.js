const express = require("express");
const { getUsers } = require("../../controllers/user.controller");
const router = express.Router();



router.get("/welcome" , getUsers)

module.exports = router; 


