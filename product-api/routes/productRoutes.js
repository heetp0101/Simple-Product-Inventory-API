// const express = require('express');
// const router = express.Router();

// // Sample GET route for testing
// router.get('/', (req, res) => {
//   res.json({ message: 'This will return all products soon.' });
// });

// module.exports = router;

// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  searchProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// Define routes
router.get('/', getAllProducts);
// router.get('/search', (req, res) => {
//   const { q } = req.query;
//   const searchTerm = q?.toLowerCase();

//   if (!searchTerm) {
//     return res.status(400).json({ error: 'Query parameter "q" is required' });
//   }

//   const matchedProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm) ||
//     product.description.toLowerCase().includes(searchTerm)
//   );

//   res.json(matchedProducts);
// });
router.get('/search',searchProduct)
router.get('/:id', getProductById);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
