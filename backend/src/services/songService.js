const Song = require("../models/song");
const statServices = require("./statServices");
const mongoose = require("mongoose");
const {
  CasterError,
  FieldError,
  OneFieldRequiredError,
} = require("../utils/errors");

const findAll = async () => {
  return Song.find();
};

const findById = async (id) => {
  if (!mongoose.isValidObjectId(id)) {
    throw new CasterError("Caster error");
  }
  return Song.findById(id);
};

const create = async (data) => {
  if (!data.title || !data.artist || !data.album || !data.genre) {
    throw new FieldError("Field error");
  }
  const song = new Song(data);
  return song.save();
};

const update = async (id, data) => {
  if (!mongoose.isValidObjectId(id)) {
    throw new CasterError("Cast error");
  }
  return Song.findByIdAndUpdate(id, data, { new: true });
};

const deleteSong = async (id) => {
  if (!mongoose.isValidObjectId(someValue)) {
    throw new CasterError("Caster error");
  }
  return Song.findByIdAndDelete(id);
};

const filter = async (criteria) => {
  let query = {};
  Object.keys(criteria).forEach((key) => {
    if (criteria[key] !== undefined) {
      query[key] = criteria[key];
    }
  });
  if (Object.keys(query).length === 0) {
    throw new OneFieldRequiredError("One field required error");
  }
  return Song.find(criteria);
};

const getStats = async () => {
  return {
    totalSongs: await statServices.totalSongs(),
    totalArtists: await statServices.totalArtists(),
    totalAlbums: await statServices.totalAlbums(),
    totalGenres: await statServices.totalGenres(),
    songsInGenres: await statServices.songsInGenres(),
    songsByArtists: await statServices.songsByArtists(),
    songsInAlbums: await statServices.songsInAlbums(),
  };
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  delete: deleteSong,
  filter,
  getStats,
};
