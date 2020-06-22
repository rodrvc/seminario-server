const express = require("express");

const app = express();

const { API__VERSION } = require("./confing");

//midlerwares
app.use(express.json()); // se declarar antes ya
app.use(express.urlencoded({ extended: false }));

// load routings
const route = require("./routes/homepage");
app.use(route);

module.exports = app;
