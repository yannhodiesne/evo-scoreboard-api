const sql = require("./db");

const Stat = {};

Stat.getAll = () => new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM "server-stats"`, (err, res) => {
        if (err) {
            console.log("Stat.getAll : ", err);
            reject(err);
            return;
        }

        resolve(res);
    });
});

module.exports = Object.freeze(Stat);