const Pb = require("../models/pb.model");

exports.findAllByPlayer = (req, res) => {
    const id = req.params.playerId;
    
    Pb.getAllByPlayer(id)
        .then(pbs => res.json(pbs))
        .catch(err => res.status(500).json({ message: err.message }));
};

exports.findAllByMap = (req, res) => {
    const id = req.params.mapId;
    
    Pb.getAllByMap(id)
        .then(pbs => res.json(pbs))
        .catch(err => res.status(500).json({ message: err.message }));
};
