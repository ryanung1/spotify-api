const express = require("express");
const router = express.Router();
const albums = require("../controllers/albums");

router.get("/", albums.index);

router.get("/:id", albums.showAlbum);

router.get("/:id/track", albums.showTracks);

router.get("/:id/track/:trackNumber", albums.showTrackIndex);

module.exports = router;