import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../controller/product.controller.js';

const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Other routes...

export default router;
