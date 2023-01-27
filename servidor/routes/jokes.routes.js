const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("api/jokes/", JokesController.findAllJokes);
  app.get("api/jokes/:id", JokesController.findJoke);
  app.get("api/jokes/update/:id", JokesController.updateJoke);
  app.get("api/jokes/new", JokesController.createNewJoke);
  app.get("api/jokes/delete:id", JokesController.deleteJoke);
};
