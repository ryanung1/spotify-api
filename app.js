const express = require("express");
const cors = require("cors");
const albums = require("./routes/albums")
const home = require("./routes/home");

//require router


const app = express()

//Setting middleware
app.use(express.json());
app.use(cors())

app.use("/", home)
app.use("/albums", albums)
// app.use("/artists", artists)


module.exports = app