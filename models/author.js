var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Fields
var AuthorSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date }
});

// Virtual fields
AuthorSchema.virtual("name").get(() => {
  return `${this.family_name}, ${this.first_name}`;
});

AuthorSchema.virtual("lifespan").get(() => {
  return (
    this.date_of_death.getYear() - this.date_of_birth.getYear()
  ).toString();
});

AuthorSchema.virtual("url").get(() => {
  return `/catalog/author/${this.id}`;
});

module.exports = mongoose.model("Author", AuthorSchema);
