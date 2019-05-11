var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const bookInstanceStatuses = ["Available", "Maintenance", "Loaned", "Reserved"];
// Fields
var BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: bookInstanceStatuses,
    default: "Maintenance"
  },
  due_back: [{ type: Date, default: Date.now }]
});

// Virtual fields
BookInstanceSchema.virtual("url").get(() => {
  return `/catalog/bookinstance/${this.id}`;
});

module.exports = mongoose.model("BookInstance", BookInstanceSchema);
