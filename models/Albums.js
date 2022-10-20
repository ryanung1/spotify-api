const albums = require("../albums")

// const showAll = () => {
//     // console.log(albums)
//     return albums;
// };

// const showAlbum = (idx) => {
//     if (albums["albums"].length > idx) {
//         return albums["albums"][idx];
//       } else {
//         throw "Album not found.";
//       }
// }

// const showTracks = (idx) => {
//     if (albums["albums"].length > idx) {
//         return albums["albums"][idx]["tracks"]["items"];
//       } else {
//         throw "Tracks not found.";
//       }

// }

// const showTrackIndex = (idx1, idx2) => {
//     if (albums["albums"].length > idx1) {
//         return albums["albums"][idx1]["tracks"]["items"][idx2];
//       } else {
//         throw "Tracks not found.";
//       }

// }

class Album {
    constructor(album, artist, tracks, id) {
        this.album = album.albums['albums'][id]
        this.artist = album.albums['albums'][id]["artists"][0]["name"]
        this.id = id
    }
    
    static showAll() {
        return albums
            .filter((a) => Object.keys(a).length !== 0)
            .map((a,r, i) => new Quote(a, r, i));
    }
    
}



module.exports = {Album}