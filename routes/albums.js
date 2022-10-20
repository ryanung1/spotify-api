const express = require("express");
const router = express.Router();
const albums = require("../controllers/albums");

router.get("/", albums.index);

// router.get("/:id", albums.showRandom);

// router.get("/:id/track", albums.showAlbumIndex);

// router.get("/:id/track/:id", quotes.showTrackIndex);

module.exports = router;