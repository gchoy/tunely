var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//connecting to the tunely app
//mongoose.connect("mongodb://localhost/tunely");

//Defining a schema for album
var AlbumSchema = new Schema({
  artistName: String,
  name: String,
  releaseDate: String,
  genres: [String]
});


var Album = mongoose.model('Album',AlbumSchema);
module.exports = Album;
