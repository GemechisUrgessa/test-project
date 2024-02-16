const Song = require("../models/song");
const totalSongs = async () => {
  try {
    const songs = await Song.find();
    return songs.length;
  } catch (error) {
    throw new Error(error.message);
  }
};

const totalArtists = async () => {
  try {
    const artists = await Song.find().distinct("artist");
    return artists.length;
  } catch (error) {
    throw new Error(error.message);
  }
};

const totalAlbums = async () => {
  try {
    const albums = await Song.find().distinct("album");
    return albums.length;
  } catch (error) {
    throw new Error(error.message);
  }
};

const totalGenres = async () => {
  try {
    const genres = await Song.find().distinct("genre");
    return genres.length;
  } catch (error) {
    throw new Error(error.message);
  }
};
const songsInGenres = async () => {
  try {
    const genres = await Song.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);
    return genres;
  } catch (error) {
    throw new Error(error.message);
  }
};

const songsByArtists = async () => {
  try {
    const artists = await Song.aggregate([
      { $group: { _id: "$artist", count: { $sum: 1 } } },
    ]);
    return artists;
  } catch (error) {
    throw new Error(error.message);
  }
};

const songsInAlbums = async () => {
  try {
    const albums = await Song.aggregate([
      { $group: { _id: "$album", count: { $sum: 1 } } },
    ]);
    return albums;
  } catch (error) {
    throw new Error(error.message);
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
