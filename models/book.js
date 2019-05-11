var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Fields
var BookSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true
  },
  summary: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }]
});

// Virtual fields
BookSchema.virtual("url").get(() => {
  return `/catalog/book/${this.id}`;
});

module.exports = mongoose.model("Book", BookSchema);
