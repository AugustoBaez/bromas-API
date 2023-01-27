const User = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
  User.find()
    .then((allDaUsers) => res.json({ users: allDaUsers }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};

module.exports.findSingleUser = (req, res) => {
  User.find({ _id: req.params.id })
    .then((singleUser) => res.json({ user: singleUser }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  User.find(req.body)
    .then((newUser) => res.json({ users: newUser }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};

module.exports.updateUser = (req, res) => {
  User.findAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updateUser) => res.json({ users: updateUser }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};

module.exports.deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};
