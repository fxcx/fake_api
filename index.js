import express from "express";
import {FAKE_DB} from "./db";

const app = express();

app.get("/", (_req, res) => {
  res.send("Express on Vercel");
});

// Ruta para obtener productos de la categoría "acompañamiento"
app.get("/acompaniamiento", (_req, res) => {
  const productos = FAKE_DB.acompañamiento; // Obtiene la categoría de acompañamiento
  res.json(productos);
});

// Ruta para obtener productos de la categoría "postres"
app.get("/postres", (_req, res) => {
  const productos = FAKE_DB.postres; // Obtiene la categoría de postres
  res.json(productos);
});


module.exports = app;