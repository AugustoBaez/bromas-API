const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

require("./servidor/config/mongoose.config");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const rutas = require("./servidor/routes/jokes.routes");
rutas(app);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
