const express = require("express"); // frame works para manejo apis
const router = express.Router(); // uso de http
const {
    addUser,
    signin,
    getUsers,
    getTaskersByRequeriment,
    addDatabase
} = require("../controllers/User");

const {
    addTarea,
    getTarea,
    getOneTask,
    putOneTask,
    deleteOneTask
} = require("../controllers/tareas");

const md_authware = require("../middleware/authware");
// define the home page route
router.get("/", function (req, res) {
    res.send("Birds home page");
});

// funcion de pruba (verifica conexion)
router.get("/users", function (req, res) {
    console.log("hey");
    res.send("hello");
});

// para agregar usuarios y/o registrarlos en la app
router.post("/add", addDatabase);

router.post("/tarea", addTarea);

// para ingresar  inicio de sesion
router.post("/signin", signin);
// obtiene usuarios (Todos)
router.get("/get-users", getUsers);

router.get("/tarea/:id", getOneTask);

router.put("/tarea/:id", putOneTask);

router.get("/tarea", getTarea);

// obtiene usuarios taskers solicitados
router.get("/get-taskers", getTaskersByRequeriment);

router.delete("/tarea/:id", deleteOneTask);

module.exports = router;
