const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => ({ jokes: allJokes }))
    .catch((error) => res.json({ message: "error found", error: error }));
};

module.exports.findJoke = (req, res) => {
  Joke.find({ _id: req.params.id })
    .then((singleJoke) => ({ jokes: singleJoke }))
    .catch((error) => res.json({ message: "error found", error: error }));
};

module.exports.createNewJoke = (req, res) => {
  Joke.find(req.body)
    .then((newJoke) => res.json({ joke: newJoke }))
    .catch((error) =>
      res.json({ message: "could not create new joke", error: error })
    );
};

module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    (updateJoke) =>
      res
        .json({ joke: updateJoke })
        .catch((error) =>
          res.json({ message: "error updating joke", error: error })
        )
  );
};

module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((error) =>
      res.json({ message: "could not delete joke", error: error })
    );
};
