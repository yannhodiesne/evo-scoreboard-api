const Map = require("../models/map.model");

exports.findAll = (req, res) => {
    Map.getAll()
        .then(maps => res.json(maps))
        .catch(err => res.status(500).json({ message: err.message }));
};

exports.findOne = (req, res) => {
    const id = req.params.mapId;

    Map.findById(id)
        .then(map => map ? res.json(map) : res.status(404).json({ message: `Map ${id} could not be found` }))
        .catch(err => res.status(500).json({ message: err.message }));
};
