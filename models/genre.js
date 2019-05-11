var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Fields
var GenreSchema = new Schema({
  name: { type: String, required: true, min: 3, max: 100 }
});

// Virtual fields
GenreSchema.virtual("url").get(() => {
  return `/catalog/genre/${this.id}`;
});

module.exports = mongoose.model("Genre", GenreSchema);
