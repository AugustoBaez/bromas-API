const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes/", JokesController.findAllJokes);
  app.get("/api/jokes/:id", JokesController.findJoke);
  app.put("/api/jokes/update/:id", JokesController.updateJoke);
  app.post("/api/jokes/new", JokesController.createNewJoke);
  app.get("/api/jokes/random", JokesController.findRandom);
  app.delete("/api/jokes/delete/:id", JokesController.deleteJoke);
};
