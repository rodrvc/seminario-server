const express = require("express");
const AuthController = require("../controllers/auth"); // se quiere para autentificacion

const api = express.Router(); // permite utilizar llamadas http

api.post("/refresh-access-token", AuthController.refreshAccessToken); // se refresca token

module.exports = api;
