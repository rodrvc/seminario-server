const express = require("express"); // frame works para manejo apis
const router = express.Router(); //  uso de http
const { addUser, signin, getUsers, getTaskersByRequeriment } = require("../controllers/User");
const md_authware = require("../middleware/authware");
// define the home page route
router.get("/", function (req, res) {
	res.send("Birds home page");
});

//funcion de pruba (verifica conexion)
router.get("/users", function (req, res) {
	console.log("hey");
	res.send("hello");
});

// para agregar usuarios y/o registrarlos en la app
router.post("/users", addUser);

// para ingresar  inicio de sesion
router.post("/signin", signin);
//obtiene usuarios (Todos)
router.get("/get-users", [md_authware.secureAuth], getUsers);
//obtiene usuarios taskers solicitados
router.get("/get-taskers", [md_authware.secureAuth], getTaskersByRequeriment);

module.exports = router;
