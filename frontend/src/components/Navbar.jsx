import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Products Manager
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
