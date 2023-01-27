const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
  setup: String,
  punchline: String,
});

const User = mongoose.model("broma", JokeSchema);

module.exports = User;
