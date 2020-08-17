module.exports = app => {
    const pbs = require("../controllers/pb.controller.js");

    app.get("/pbs/player/:playerId", pbs.findAllByPlayer);
    app.get("/pbs/map/:mapId", pbs.findAllByMap);
};
