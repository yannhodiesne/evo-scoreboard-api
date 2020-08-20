const Records = require("../models/records.model");

exports.findByPlayer = (req, res) => {
    const id = req.params.playerId;

    Records.findByPlayer(id)
        .then(records => res.json(records))
        .catch(err => res.status(500).json({ message: err.message }));
};

exports.findByMap = (req, res) => {
    const id = req.params.mapId;

    Records.findByMap(id)
        .then(records => res.json(records))
        .catch(err => res.status(500).json({ message: err.message }));
};
