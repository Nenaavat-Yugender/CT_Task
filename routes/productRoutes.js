const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');  // week-7 update 

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  updateAllProducts,
  deleteProduct,
  deleteAllProducts
} = require('../controllers/productController');

// CRUD routes for Product
router.post('/',verifyToken, createProduct);
router.get('/',verifyToken, getProducts);
router.get('/:id',verifyToken, getProductById);
router.put('/:id', verifyToken,updateProduct);
router.put('/', verifyToken,updateAllProducts);
router.delete('/:id',verifyToken, deleteProduct);
router.delete('/',verifyToken, deleteAllProducts);

module.exports = router;

