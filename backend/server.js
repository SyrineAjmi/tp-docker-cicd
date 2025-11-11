const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Route test
app.get('/', (req, res) => {
  res.json({
    message: "Hello from Backend with MongoDB!",
    timestamp: new Date(),
    client: req.headers.origin,
    success: true,
  });
});

// Routes produits
app.use('/api/products', productRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));

