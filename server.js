const express = require("express");
const app = express();
const port = 8000;

require("./servidor/config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const rutas = require("./servidor/routes/jokes.routes");
rutas(app);

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
