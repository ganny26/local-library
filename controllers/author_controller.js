var Author = require("../models/author");

exports.index = (req, res) => {
  res.send("authors_controller#index");
};

exports.create_author = (req, res) => {
  res.send("authors_controller#create_author");
};

exports.show_author = (req, res) => {
  res.send("authors_controller#show_author");
};

exports.delete_author = (req, res) => {
  res.send("authors_controller#delete_author");
};

exports.update_author = (req, res) => {
  res.send("authors_controller#update_author");
};
