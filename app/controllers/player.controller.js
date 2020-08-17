const Player = require("../models/player.model");

exports.findAll = (req, res) => {
    Player.getAll()
        .then(players => res.json(players))
        .catch(err => res.status(500).json({ message: err.message }));
};

exports.findOne = (req, res) => {
    const player = req.params.playerId;

    Player.findById(player)
        .then(player => player ? res.json(player) : res.status(404).json({ message: `Player ${player} could not be found` }))
        .catch(err => res.status(500).json({ message: err.message }));
};
