//const db = require("../config/db")

const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "MATIAS3003",
    port: 5432,
});

pool.connect();

const getBrands = async () => {
    const result = await pool.query("SELECT * FROM brands ORDER BY brand_name ASC");

    return result
}

module.exports = {
    getBrands
}