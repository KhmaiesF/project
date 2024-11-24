import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Sun } from 'lucide-react';

const Navbar = ({ user }) => {
  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              MindSpace
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/daily-check-in" className="nav-link">Daily Check-In</Link>
            <Link to="/resources" className="nav-link">Resources</Link>
            <Link to="/community" className="nav-link">Community</Link>
            <Link to="/profile" className="flex items-center space-x-2">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </Link>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Sun className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;