var Book = require("../models/book");
var Author = require("../models/author");
var Genre = require("../models/genre");

exports.book_list = (req, res) => {
  res.send("Books list");
};

exports.index = (req, res) => {
  books = Book.find((err, data) => {
    if (err) return res.json({ books: [] });

    return res.json({ books: data });
  });
};

exports.create_book = (req, res) => {
  console.log(req.body);
  const reqParams = req.body;

  const book_title = reqParams.title.value;
  const author = reqParams.author.value;
  const genre = reqParams.genre.value;

  let genreObj = new Genre({ name: genre });
  genreObj.save(function(err) {
    if (err) throw err;
    else console.log("Genre saved successfully!!!");
  });

  let authorObj = new Author({ family_name: author });
  authorObj.save(function(err) {
    if (err) throw err;
    else console.log("Author saved successfully!!!");
  });

  let bookObj = new Book({
    title: book_title,
    summary: "Sample summary",
    author: authorObj,
    genre: [genreObj]
  });
  bookObj.save(function(err) {
    if (err) throw err;
    else console.log("Book saved successfully!!!");
  });

  console.log(book_title);
  console.log(author);
  console.log(genre);

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
