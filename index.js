const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 8080;
const PORT_DB = 27017;
const { API_VERSION } = require("./confing");
var homepage = require("./routes/homepage");
app.use("/homepage", homepage);

mongoose.connect(
  `mongodb://mongo:${PORT_DB}/mydatabase`,
  { useNewUrlParser: true, useUnifiedTopology: true },

  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("Se realiza conexion a la base de datos");
      app.listen(port, () => {
        console.log("Se realiza conexion exitosamente" + port);
      });
    }
  }
);
