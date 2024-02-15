const express = require("express");
const controllers = require("../controllers/songs");
const router = express.Router();

router.get("/", controllers.getAllSongs);
router.post("/", controllers.createSong);
router.get("/filter", controllers.filterSongs);
router.get("/stats", controllers.getStats);
router.put("/:id", controllers.updateSong);
router.delete("/:id", controllers.deleteSong);
router.get("/:id", controllers.getSong);

module.exports = router;
