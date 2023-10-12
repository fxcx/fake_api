import express from "express";
import FAKE_DB from "./db";

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Ruta para obtener todos los productos
app.get("/api/products", (req, res) => {
  res.json(FAKE_DB);
});

// Ruta para obtener productos por categoría
app.get("/api/products/category/:category", (req, res) => {
  const category = req.params.category;
  const productsInCategory = FAKE_DB.filter((product) => product.category === category);
  res.json(productsInCategory);
});


module.exports = app;