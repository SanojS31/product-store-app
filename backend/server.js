import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://your-frontend-url.netlify.app'],
    credentials: true,
  })
);

app.use(express.json());
app.use('/api/products', productRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port ' + PORT);
});
