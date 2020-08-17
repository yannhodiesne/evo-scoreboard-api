const sql = require("./db");

const Player = {};

Player.findById = playerId => new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM players WHERE id = ${sql.escape(playerId)}`, (err, res) => {
        if (err) {
            console.log("Player.findById : ", err);
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

Player.getAll = function () {
    return new Promise((resolve, reject) => {
        // Select only players who played on the server, thus having NickName specified instead of a random login
        sql.query(`SELECT * FROM players WHERE Login != NickName`, (err, res) => {
            if (err) {
                console.log("Player.getAll : ", err);
                reject(err);
                return;
            }

            resolve(res);
        });
    });
}

module.exports = Object.freeze(Player);
