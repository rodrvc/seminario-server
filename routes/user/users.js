const express = require("express");
const { getUsers , signUp } = require("../../controllers/user.controller");
const router = express.Router();


//select user
router.get("/welcome" , getUsers)

//create user
router.post("/signup" , signUp)




module.exports = router; 


