import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../controller/product.controller.js';

const router = express.Router();

// GET all products
router.get('/', getProducts);

// POST new product
router.post('/', createProduct);

// PUT update product
router.put('/:id', updateProduct);

// DELETE product
router.delete('/:id', deleteProduct);

export default router;
