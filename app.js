const express = require("express");

const app = express();

const { API__VERSION } = require("./confing");

//midlerwares todas las funciones que transiten por aqui deberan ejecutaran
app.use(express.json()); //  convierte la respuesta en formato json
app.use(express.urlencoded({ extended: false })); //

// load routings
//const authRute = require("./routes/auth");
//const route = require("./routes/homepage");


const route  = require("./routes/user/users");
const router = require("./routes/task/task");

//headers // para no usar cors extension //Solo para desarrollo ** Permitiran conexion a api desde el host actual!
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

app.use(route); // usara la parametro Router
app.use(router);
//app.use(authRute);

module.exports = app;
