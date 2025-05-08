import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Toaster position="top-right" />
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-white">
                  Product Manager
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link
                to="/"
                className="text-white hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-all"
              >
                Products
              </Link>
              <Link
                to="/create"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all"
              >
                Add Product
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block text-white hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-all"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/create"
                className="block bg-white text-blue-600 px-4 py-2 rounded-lg text-base font-medium hover:bg-gray-100 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Add Product
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
