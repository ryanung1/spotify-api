const Home = require("../models/Home");

const index = (req, res) => {
    try {
        const home = Home.index();
        res.send(home);
    } catch (err) {
        res.status(500).send({ error: "Something went wrong on our side." });
    }
};

module.exports = index;
