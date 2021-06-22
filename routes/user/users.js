const express = require("express");
const { getUsers , signUp, signIn } = require("../../controllers/user.controller");
const router = express.Router();


//select user
router.get("/welcome" , getUsers)

//create user
router.post("/signup" , signUp)

router.post("/signin" , signIn)




module.exports = router; 


