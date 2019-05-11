var Genre = require("../models/genre");

exports.index = (req, res) => {
  res.send("genre_controller#genre");
};

exports.create_genre = (req, res) => {
  res.send("genre_controller#create_genre");
};

exports.show_genre = (req, res) => {
  res.send("genre_controller#show_genre");
};

exports.delete_genre = (req, res) => {
  res.send("genre_controller#delete_genre");
};

exports.update_genre = (req, res) => {
  res.send("genre_controller#update_genre");
};
