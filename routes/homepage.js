const express = require("express");
const router = express.Router();
const { addUser, signin, getUsers, getTaskersByRequeriment } = require("../controllers/User");
const md_authware = require("../middleware/authware");
// define the home page route
router.get("/", function (req, res) {
	res.send("Birds home page");
});

router.get("/users", function (req, res) {
	console.log("hey");
	res.send("hello");
});

router.post("/users", addUser);

router.post("/signin", signin);

router.get("/get-users", [md_authware.secureAuth], getUsers);

router.get("/get-taskers", [md_authware.secureAuth], getTaskersByRequeriment);

module.exports = router;
