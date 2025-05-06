import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cors());

// Basic route to test server
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Product routes with proper error handling
app.use('/api/products', (req, res, next) => {
  try {
    productRoutes(req, res, next);
  } catch (error) {
    console.error('Route Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve((__dirname, 'frontend', 'dist', 'index.html')));
  });
}

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
