const albums = require("../albums");

const message = `Welcome to the albums API! There are ${albums["albums"].length} albums available.`;

function index() {
  return message;
}

module.exports = { index };
