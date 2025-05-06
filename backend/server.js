import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/product.routes.js';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Mount routes
app.use('/api/products', productRoutes);

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
});
