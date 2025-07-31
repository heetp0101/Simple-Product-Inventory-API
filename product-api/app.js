// app.js

const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware to parse JSON
app.use(express.json());

// Base route
app.get('/', (req, res) => {
  res.send('Welcome to the Product Inventory API!');
});

// Use product routes
app.use('/products', productRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
