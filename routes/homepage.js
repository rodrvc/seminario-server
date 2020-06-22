const express = require("express");
const router = express.Router();
const { addUser } = require("../controllers/User");

// define the home page route
router.get("/", function (req, res) {
  res.send("Birds home page");
});

router.get("/users", function (req, res) {
  console.log("hey");
  res.send("hello");
});

router.post("/users", addUser);

//router.post("/singin", singin);

module.exports = router;
