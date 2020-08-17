module.exports = app => {
    const maps = require("../controllers/map.controller.js");

    app.get("/maps", maps.findAll);
    app.get("/maps/:mapId", maps.findOne);
};
