module.exports = app => {
    const records = require("../controllers/records.controller.js");

    app.get("/players/:playerId/records", records.findByPlayer);
    app.get("/maps/:mapId/records", records.findByMap);
};
