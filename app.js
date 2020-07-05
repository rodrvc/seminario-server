const express = require("express");

const app = express();

const { API__VERSION } = require("./confing");

//midlerwares
app.use(express.json()); // se declarar antes ya
app.use(express.urlencoded({ extended: false }));

// load routings
const authRute = require("./routes/auth");
const route = require("./routes/homepage");

app.use(route);
app.use(authRute);

module.exports = app;
