const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Director: {
    type: String,
    required: true
  },
  Genre: {
    type: String,
    required: false
  },
  Stars: {
    type: Number,
    required: false
  },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;