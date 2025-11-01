import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex items-center">
            <span className="text-lg font-bold tracking-wide">Home Services</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-yellow-100 transition-colors">Home</Link>
            <Link to="/pooja" className="hover:text-yellow-100 transition-colors">Pooja</Link>
            <Link to="/lodge" className="hover:text-yellow-100 transition-colors">Lodge</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500 focus:ring-white"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-100">Home</Link>
          <Link to="/pooja" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-100">Pooja</Link>
          <Link to="/lodge" onClick={() => setIsOpen(false)} className="block py-2 hover:text-yellow-100">Lodge</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
