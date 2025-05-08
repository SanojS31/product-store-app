import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditModal from '../components/EditModal';
import config from '../config/config';
import { toast } from 'react-hot-toast';

const fetchWithTimeout = async (url, options = {}, timeout = 5000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
};

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${config.API_URL}/api/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('API Response:', result); // Debug log

      // Handle both data formats
      const productsData = result.data || result;
      setProducts(Array.isArray(productsData) ? productsData : []);
      setError(null);
    } catch (err) {
      console.error('Fetch error details:', {
        message: err.message,
        url: `${config.API_URL}/api/products`,
      });
      setError('Failed to fetch products. Please try again later.');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(
          `${config.API_URL}/api/products/${productId}`,
          {
            method: 'DELETE',
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setProducts(products.filter((product) => product._id !== productId));
        toast.success('Product deleted successfully!');
      } catch (err) {
        console.error('Delete error:', err);
        toast.error('Failed to delete product');
      }
    }
  };

  const handleUpdate = async () => {
    await fetchProducts();
    toast.success('Product updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
              Products Collection
            </h1>
            <p className="text-gray-600">Manage your products inventory</p>
          </div>
          <Link
            to="/create"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium
              hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-[1.02] shadow-md"
          >
            + Add New Product
          </Link>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No products found. Add some products to get started!
            </p>
            <Link
              to="/create"
              className="inline-block mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add Product
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                  <div className="flex flex-col space-y-4">
                    <span className="text-2xl font-bold text-green-600">
                      ₹{Number(product.price).toFixed(2)}
                    </span>
                    <div className="flex justify-between gap-2">
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsModalOpen(true);
                        }}
                        className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m4-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <EditModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default HomePage;
