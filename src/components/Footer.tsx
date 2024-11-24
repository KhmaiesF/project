import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="nav-link">About Us</Link></li>
              <li><Link to="/privacy" className="nav-link">Privacy Policy</Link></li>
              <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <a href="tel:1-800-273-8255" className="flex items-center space-x-2 nav-link">
                <Phone className="h-4 w-4" />
                <span>1-800-273-8255</span>
              </a>
              <a href="mailto:support@mindspace.com" className="flex items-center space-x-2 nav-link">
                <Mail className="h-4 w-4" />
                <span>support@mindspace.com</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="nav-link"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="nav-link"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="nav-link"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div className="space-y-4">
            <button className="btn-danger w-full flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Need Help Now?</span>
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              24/7 Crisis Support Available
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} MindSpace. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;