var express = require("express");
var router = express.Router();

var book_controller = require("../controllers/book_controller.js");
var bookinstance_controller = require("../controllers/bookinstance_controller.js");
var author_controller = require("../controllers/author_controller.js");
var genre_controller = require("../controllers/genre_controller.js");

router.get("/", book_controller.index);

// Book routes
router.get("/books", book_controller.index);
router.post("/book/create", book_controller.create_book);
router.get("/book/:id", book_controller.show_book);
router.post("book/:id/delete", book_controller.delete_book);
router.post("/book/:id/update", book_controller.update_book);

// Author routes
router.get("/authors", author_controller.index);
router.post("/author/create", author_controller.create_author);
router.get("/author/:id", author_controller.show_author);
router.post("author/:id/delete", author_controller.delete_author);
router.post("/author/:id/update", author_controller.update_author);

// Genre routes
router.get("/genre", genre_controller.index);
router.post("/genre/create", genre_controller.create_genre);
router.get("/genre/:id", genre_controller.show_genre);
router.post("genre/:id/delete", genre_controller.delete_genre);
router.post("/genre/:id/update", genre_controller.update_genre);

// BookInstance routes
router.get("/bookinstances", bookinstance_controller.index);
router.post(
  "/bookinstance/create",
  bookinstance_controller.create_bookinstance
);
router.get("/bookinstance/:id", bookinstance_controller.show_bookinstance);
router.post(
  "bookinstance/:id/delete",
  bookinstance_controller.delete_bookinstance
);
router.post(
  "/bookinstance/:id/update",
  bookinstance_controller.update_bookinstance
);

module.exports = router;
