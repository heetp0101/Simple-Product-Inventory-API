// controllers/productController.js

let products = []; // In-memory product array
let currentId = 1; // To generate unique IDs

// GET /products - Get all products
// const getAllProducts = (req, res) => {
//   res.json(products);
// };


const getAllProducts = (req, res) => {
  const page = parseInt(req.query.page) || 1;       // Default to page 1
  const limit = parseInt(req.query.limit) || 10;    // Default to 10 products per page
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedProducts = products.slice(startIndex, endIndex);

  res.json({
    page,
    limit,
    totalProducts: products.length,
    products: paginatedProducts
  });
};

// GET /products/:id - Get a product by ID
const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
};

// POST /products - Add a new product
const addProduct = (req, res) => {
  const { name, price, description } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Product name is required and must be a string.' });
  }

  if (price === undefined || typeof price !== 'number') {
    return res.status(400).json({ error: 'Product price is required and must be a number.' });
  }

  const newProduct = {
    id: currentId++,
    name,
    price,
    description: description || ''
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};


const searchProduct = (req,res) => {

  const { q } = req.query;
  const searchTerm = q?.toLowerCase();

  if (!searchTerm) {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }

  const matchedProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );

  res.json(matchedProducts);

};


// PUT /products/:id - Update a product
const updateProduct = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const { name, price, description } = req.body;

  if (name !== undefined && typeof name !== 'string') {
    return res.status(400).json({ error: 'Product name must be a string.' });
  }

  if (price !== undefined && typeof price !== 'number') {
    return res.status(400).json({ error: 'Product price must be a number.' });
  }

  product.name = name ?? product.name;
  product.price = price ?? product.price;
  product.description = description ?? product.description;

  res.json(product);
};

// DELETE /products/:id - Delete a product
const deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  const deletedProduct = products.splice(index, 1);
  res.json(deletedProduct[0]);
};

// Export all functions
module.exports = {
  getAllProducts,
  searchProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
};
