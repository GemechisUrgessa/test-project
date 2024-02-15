const Song = require("../models/song");
// Here You are also expected to generate overall statistics:
// Total # of songs, artists, albums, genres
// # of songs in every genre
// # of songs & albums each artist has
// # songs in each album ... and so on.

// This function will return the total number of songs in the database
const totalSongs = async () => {
  try {
    const songs = await Song.find();
    return songs.length;
  } catch (error) {
    throw new Error(error.message);
  }
};

// This function will return the total number of artists in the database
const totalArtists = async () => {
  try {
    const artists = await Song.find().distinct("artist");
    return artists.length;
  } catch (error) {
    return error.message;
  }
};

// This function will return the total number of albums in the database
const totalAlbums = async () => {
  try {
    const albums = await Song.find().distinct("album");
    return albums.length;
  } catch (error) {
    return error.message;
  }
};

// This function will return the total number of genres in the database
const totalGenres = async () => {
  try {
    const genres = await Song.find().distinct("genre");
    return genres.length;
  } catch (error) {
    return error.message;
  }
};

// This function will return the number of songs in each genre
const songsInGenres = async () => {
  try {
    const genres = await Song.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);
    return genres;
  } catch (error) {
    return error.message;
  }
};

// This function will return the number of songs each artist has
const songsByArtists = async () => {
  try {
    const artists = await Song.aggregate([
      { $group: { _id: "$artist", count: { $sum: 1 } } },
    ]);
    return artists;
  } catch (error) {
    return error.message;
  }
};

// This function will return the number of songs in each album
const songsInAlbums = async () => {
  try {
    const albums = await Song.aggregate([
      { $group: { _id: "$album", count: { $sum: 1 } } },
    ]);
    return albums;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  totalSongs,
  totalArtists,
  totalAlbums,
  totalGenres,
  songsInGenres,
  songsByArtists,
  songsInAlbums,
};
