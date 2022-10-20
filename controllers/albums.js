const Album = require("../models/Albums")

const index = (req, res) => {
    try {
        console.log("controller index test")
        const albums = Album.showAll();
        res.send(albums)
    } catch (err) {
        res.status(500).send({ error: "Server error" });
    }
}

module.exports = {index};