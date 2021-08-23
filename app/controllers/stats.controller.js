const Stats = require("../models/stats.model");

exports.findAll = (req, res) => {
    Stats.getAll()
        .then(stats => res.json(stats))
        .catch(err => res.status(500).json({ message: err.message}));
};