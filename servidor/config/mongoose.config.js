const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/nameofyourdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("conexion establecida con la db"))
  .catch((err) => console.log("algo salio mal al conectar", err));
