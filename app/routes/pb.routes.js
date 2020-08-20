module.exports = app => {
    const pbs = require("../controllers/pb.controller.js");

    app.get("/players/:playerId/pbs", pbs.findAllByPlayer);
    app.get("/maps/:mapId/pbs", pbs.findAllByMap);
};
