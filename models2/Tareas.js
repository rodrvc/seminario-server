const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TareaSchema = new Schema({
  id: String,
  titulo: String,
  descripcion: String,
  fecha: String,
  autor: String,
});

module.exports = mongoose.model("Tarea", TareaSchema);
