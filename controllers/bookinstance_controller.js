var Bookinstance = require("../models/bookinstance");

exports.index = (req, res) => {
  res.send("bookinstances_controller#index");
};

exports.create_bookinstance = (req, res) => {
  res.send("bookinstances_controller#create_bookinstance");
};

exports.show_bookinstance = (req, res) => {
  res.send("bookinstances_controller#show_bookinstance");
};

exports.delete_bookinstance = (req, res) => {
  res.send("bookinstances_controller#delete_bookinstance");
};

exports.update_bookinstance = (req, res) => {
  res.send("bookinstances_controller#update_bookinstance");
};
