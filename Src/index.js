const express = require("express");
const path = require('path');

const { getBrands } = require("./services/brands");
const { getCategories } = require("./services/categories");
const { getStores } = require("./services/stores");
const { searchProducts } = require("./services/products");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get("/api/categories", async (req, res) => {
    const categories = await getCategories();
    res.json(categories);
})

app.get("/api/stores", async (req, res) => {
    const stores = await getStores();
    res.json(stores)
})

app.get("/api/brands", async (req, res) => {
    const brands = await getBrands();
    res.json(brands)
})

app.post("/api/products/search", async (req, res) => {
    const result = await searchProducts({ ...req.body });
    res.json(result)
})


app.listen(3000, () => console.log("App run on port 3000"))