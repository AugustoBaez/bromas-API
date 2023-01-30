const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((error) => res.json({ message: "error found", error: error }));
};

module.exports.findJoke = (req, res) => {
  Joke.find({ _id: req.params.id })
    .then((singleJoke) => res.json({ jokes: singleJoke }))
    .catch((error) => res.json({ message: "error found", error: error }));
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => res.json({ jokes: newJoke }))
    .catch((error) =>
      res.json({ message: "could not create new joke", error: error })
    );
};

module.exports.findRandom = (req, res) => {
  Joke.count()
    .then((count) =>
      Joke.findOne()
        .skip(Math.floor(Math.random() * count))
        .then((randomJoke) => res.json({ jokes: randomJoke }))
        .catch((error) => catchError(error, res))
    )
    .catch((error) => catchError(error, res));
};

module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    (updateJoke) =>
      res
        .json({ jokes: updateJoke })
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
