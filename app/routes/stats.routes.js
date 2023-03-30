module.exports = app => {
    const stats = require("../controllers/stats.controller.js");

    app.get("/stats", stats.findAll);
}