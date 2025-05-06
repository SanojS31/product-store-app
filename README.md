# Product Management System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing products with CRUD operations.

## Features

- 📝 Create new products with name, price, and image URL
- 📖 View all products in a responsive grid layout
- ✏️ Edit existing products with real-time updates
- 🗑️ Delete products with confirmation
- 💅 Modern UI with Tailwind CSS
- 🔄 Loading states and error handling
- 🖼️ Image preview and hover effects

## Tech Stack

- **Frontend:**

  - React.js with Hooks
  - React Router for navigation
  - Tailwind CSS for styling
  - Vite for build tooling

- **Backend:**
  - Node.js & Express.js
  - MongoDB with Mongoose
  - CORS for cross-origin requests
  - dotenv for environment variables

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB account and database
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/SanojS31/product-store-app
cd product-store-app
```

2. Install backend dependencies:

```bash
npm install
```

3. Install frontend dependencies:

```bash
cd frontend
npm install
```

4. Create .env files:

Backend (.env):

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Frontend (.env):

```env
VITE_API_URL=http://localhost:5000
```

### Running the Application

1. Start the backend server:

```bash
npm run dev
```

2. Start the frontend development server:

```bash
cd frontend
npm run dev
```

## Deployment

- Backend deployed on [Render](https://render.com)
- Frontend deployed on [vercel](https://vercel.com)

## Project Structure

```
product-management-system/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── config/
│   │   └── App.jsx
│   └── index.html
└── README.md
```

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Tailwind CSS for the awesome styling utilities
- MongoDB Atlas for database hosting
- Render and Netlify for deployment services
