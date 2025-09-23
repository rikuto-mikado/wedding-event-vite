import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-600 text-white py-3 px-6 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-light tracking-wider">
          J&J <span className="text-sm ml-2 font-thin italic">june 28th, 2025</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-light uppercase tracking-wider">
          <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#story" className="hover:text-gray-300 transition-colors">Our Story</a>
          <a href="#details" className="hover:text-gray-300 transition-colors">Details</a>
          <a href="#rsvp" className="hover:text-gray-300 transition-colors">RSVP</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-600 md:hidden">
            <nav className="flex flex-col p-4 space-y-3 text-sm font-light uppercase tracking-wider">
              <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
              <a href="#story" className="hover:text-gray-300 transition-colors">Our Story</a>
              <a href="#details" className="hover:text-gray-300 transition-colors">Details</a>
              <a href="#rsvp" className="hover:text-gray-300 transition-colors">RSVP</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
