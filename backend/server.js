const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;

// Config PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST || "db",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "secret",
  database: process.env.DB_NAME || "mydb",
});

app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:8080',
    'http://127.0.0.1:8080',
    'http://frontend',
  ],
  methods: ['GET','POST'],
  allowedHeaders: ['Content-Type']
}));

// GET tous les produits
app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Database error", error: err.message });
  }
});

// POST ajouter un produit
app.post("/api/products", async (req, res) => {
  const { name, price, category, quantity } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO products(name, price, category, quantity) VALUES($1, $2, $3, $4) RETURNING *",
      [name, price, category, quantity]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Database error", error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});

