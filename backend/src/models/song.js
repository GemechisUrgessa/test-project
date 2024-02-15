// create one model to handle the song data. The expected information are Title Artist; Album; Genre;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
});

module.exports = mongoose.model("Song", songSchema);
