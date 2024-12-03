import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Info } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/users" className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
              <Users size={20} />
              <span>Users</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
              <Info size={20} />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;