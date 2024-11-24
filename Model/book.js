const mongoose = require("mongoose");

const schema = mongoose.Schema;

const bookSchema = new schema({
  booktitle: String,
  author: String,
  genre: {
    type: String,
    enum: ["Comedy", "Romance", "Tragedy", "Horror"],
  },
});

module.exports = mongoose.model("book", bookSchema);
