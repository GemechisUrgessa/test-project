const SongService = require("../../../services/songService");
const handleAsync = require("../../../utils/handleAsync");

exports.getAllSongs = handleAsync(async (req, res) => {
  const songs = await SongService.findAll();
  res.status(200).json(songs);
});

exports.getSong = handleAsync(async (req, res) => {
  const song = await SongService.findById(req.params.id);
  res.status(200).json({ success: true, data: song });
});

exports.createSong = handleAsync(async (req, res) => {
  const newSong = await SongService.create(req.body);
  res.status(201).json({ success: true, data: newSong });
});

exports.updateSong = handleAsync(async (req, res) => {
  const updatedSong = await SongService.update(req.params.id, req.body);
  res.status(200).json({ success: true, data: updatedSong });
});

exports.deleteSong = handleAsync(async (req, res) => {
  await SongService.delete(req.params.id);
  res.status(204).json({ success: true });
});

exports.filterSongs = handleAsync(async (req, res) => {
  const { genre, artist, album } = req.query;
  const songs = await SongService.filter({ genre, artist, album });
  res.status(200).json({ success: true, data: songs });
});

exports.getStats = handleAsync(async (req, res) => {
  console.log("getStats");

  const stats = await SongService.getStats();
  res.status(200).json({ success: true, data: stats });
});
