const express = require("express");
const app = express();

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");
const cors = require("cors");
const productRoute = require('./routes/product.route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// match GET localhost:4000/
app.get("/", (req, res) => {
  res.send("Sawasdee");
});

// match GET localhost:4000/products
app.get("/products", (req, res) => {
  res.send("Get products here");
});

// match GET localhost:4000/products/[id]
app.get("/products/:id", (req, res) => {
  res.send("Get products " + req.params.id);
});

app.use("/products", productRoute);
app.listen(port, () => {
  console.log("App started at port: " + port);
});
