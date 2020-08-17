const sql = require("./db");

const Pb = {};

Pb.getAllByPlayer = playerId => new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM pbs WHERE player_id = ${playerId}`, (err, res) => {
        if (err) {
            console.log("Pb.getAllByPlayer : ", err);
            reject(err);
            return;
        }

        resolve(res);
    });
});

Pb.getAllByMap = mapId => new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM pbs WHERE map_id = ${mapId}`, (err, res) => {
        if (err) {
            console.log("Pb.getAllByMap : ", err);
            reject(err);
            return;
        }

        resolve(res);
    });
});

module.exports = Object.freeze(Pb);
