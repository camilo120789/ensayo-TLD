//const pool = require("../config/db");

const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "MATIAS3003",
    port: 5432,
});

pool.connect();

const getStores = async () => {
    const result = await pool.query("SELECT store_id, store_name FROM stores ORDER BY store_name ASC")

    return result;
}

module.exports = {
    getStores
}