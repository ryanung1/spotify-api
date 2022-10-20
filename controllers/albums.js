const Album = require("../models/Albums")

const index = (req, res) => {
    try {
        const albums = Album.showAll();
        res.send(albums)
    } catch (err) {
        res.status(500).send({ error: "Server error" });
    }
}

const showAlbum = (req, res) => {
    const idx = parseInt(req.params.id)

    try {
        const albums = Album.showAlbum(idx)
        res.send(albums)
    } catch (err) {
        res.status(500).send({ error: "Server error" });
    }
}

const showTracks = (req, res) => {
    const idx = parseInt(req.params.id)
    try {
        const albums = Album.showTracks(idx)
        res.send(albums)
    } catch (err) {
        res.status(500).send({ error: "Server error" });
    }
}

const showTrackIndex = (req, res) => {
    const idx1 = parseInt(req.params.id)
    const idx2 = parseInt(req.params.trackNumber)
    try {
        const albums = Album.showTrackIndex(idx1, idx2)
        res.send(albums)
    } catch (err) {
        res.status(500).send({ error: "Server error" });
    }
} 

module.exports = {index, showAlbum, showTracks, showTrackIndex};