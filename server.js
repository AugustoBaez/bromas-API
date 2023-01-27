const express = require("express");
const app = express();
const port = 8000;
require("./servidor/config/mongoose.config");
const rutas = require("./servidor/routes/jokes.routes");
rutas(app);
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
