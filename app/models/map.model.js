const sql = require("./db");

const Map = {};

Map.findById = mapId => new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM maps WHERE id = ${sql.escape(mapId)} OR uid = ${sql.escape(mapId)}`, (err, res) => {
        if (err) {
            console.log("Map.findById : ", err);
            reject(err);
            return;
        }

        if (res.length) {
            resolve(res[0]);
            return;
        }

        // Not found
        resolve(null);
    });
});

Map.getAll = () => new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM maps`, (err, res) => {
        if (err) {
            console.log("Map.getAll : ", err);
            reject(err);
            return;
        }

        resolve(res);
    });
});

module.exports = Object.freeze(Map);
