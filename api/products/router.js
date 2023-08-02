const express = require("express");
const router = express.Router();
const { getAllProducts, addProducts } = require("./controller");
//getall products
router.get("/products", getAllProducts);

//add  products
router.post("/addproducts", addProducts);

module.exports = router;
