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

const getCategories = async () => {
    const res = await pool.query("SELECT * FROM categories ORDER BY category_name ASC");

    return res;
}

module.exports = {
    getCategories
}