const mongoose = require("mongoose");

mongoose.get("strictQuery", true);

mongoose
  .connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("conexion establecida con la db"))
  .catch((err) => console.log("algo salio mal al conectar", err));
