const express = require('express');
const app = express.Router();
const controller = require('../controllers/product.controller')
// match GET localhost:4000/
app.get("/", controller.get);
  
  // match GET localhost:4000/products/[id]
  app.get("/:id", controller.getById);

  // match GET localhost:4000/products
app.post("/", controller.create);

module.exports = app;