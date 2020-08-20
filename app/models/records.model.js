const sql = require("./db");

const Records = {};

Records.findByPlayer = playerId => new Promise((resolve, reject) => {
    sql.query(`SELECT records.*, map.name AS MapName FROM \`local-records\` records JOIN maps map ON map.id = records.Map WHERE Player = ${sql.escape(playerId)}`, (err, res) => {
        if (err) {
            console.log("Records.findByPlayer : ", err);
            reject(err);
            return;
        }

        resolve(res);
    });
});

Records.findByMap = mapId => new Promise((resolve, reject) => {
    sql.query(`SELECT records.*, player.NickName AS PlayerName FROM \`local-records\` records JOIN players player ON records.Player = player.id WHERE records.Map = ${sql.escape(mapId)}`, (err, res) => {
        if (err) {
            console.log("Records.findByMap : ", err);
            reject(err);
            return;
        }

        resolve(res);
    });
});

module.exports = Object.freeze(Records);
