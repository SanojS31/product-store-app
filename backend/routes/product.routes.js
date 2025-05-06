import express from 'express';
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controller/product.controller.js';

const router = express.Router();

router.route('/').get(getProducts).post(createProduct);

router.route('/:id').put(updateProduct).delete(deleteProduct);

export default router;
