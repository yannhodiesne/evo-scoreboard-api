module.exports = app => {
    const players = require("../controllers/player.controller.js");

    app.get("/players", players.findAll);
    app.get("/players/:playerId", players.findOne);
};
