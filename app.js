const express = require("express");

const app = express();

const { API__VERSION } = require("./confing");

//midlerwares
app.use(express.json()); // se declarar antes ya
app.use(express.urlencoded({ extended: false }));

// load routings
const authRute = require("./routes/auth");
const route = require("./routes/homepage");

//headers // para no usar cors extension //Solo para desarrollo
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Authorization, X-API-KEY , Origin , X-Requested-With , Content-Type, Accept, Access-Control-Allow-Request-Method"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT , DELETE");
	res.header("Allow", "GET, POST, OPTIONS, PUT , DELETE");
	next();
});

app.use(route);
app.use(authRute);

module.exports = app;
