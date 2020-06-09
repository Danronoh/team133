
const router = require("express");
const controller = require('../controllers/product.controller');

const productRouter = router();

productRouter.post("/api/products", controller.saveProduct);
productRouter.get("/api/products", controller.getProducts);

module.exports = productRouter
