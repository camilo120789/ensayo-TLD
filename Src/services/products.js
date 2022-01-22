//const db = require("../config/db");

const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "MATIAS3003",
  port: 5432,
});

pool.connect();

const searchProducts = async ({ category, brand, store }) => {
  let query = `
    SELECT stores.store_name, products.product_id, products.product_name, stocks.quantity
    FROM products 
    INNER JOIN stocks ON products.product_id = stocks.product_id
    INNER JOIN stores ON stocks.store_id = stores.store_id 
    WHERE products.product_name IS NOT NULL
  `;
  if (store) query += ` AND stores.store_id = ${store}`;
  if (category) query += ` AND products.category_id = ${category}`;
  if (brand) query += ` AND products.brand_id = ${brand}`;


  const result = await pool.query(query);

  return result;
}

module.exports = {
  searchProducts
}