var Book = require("../models/book");

exports.book_list = (req, res) => {
  res.send("Books list");
};

exports.index = (req, res) => {
  res.send("books_controller#index");
};

exports.create_book = (req, res) => {
  res.send("books_controller#create_book");
};

exports.show_book = (req, res) => {
  res.send("books_controller#show_book");
};

exports.delete_book = (req, res) => {
  res.send("books_controller#delete_book");
};

exports.update_book = (req, res) => {
  res.send("books_controller#update_book");
};
