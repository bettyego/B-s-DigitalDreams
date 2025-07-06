import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';

const Header = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">B's DigitalDreams</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-purple-300 transition">Home</Link>
          <Link to="/aboutus" className="hover:text-purple-300 transition">About Us</Link>
          <Link to="/portfolio" className="hover:text-purple-300 transition">Portfolio</Link>
          <Link to="/contact" className="hover:text-purple-300 transition">Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md px-6 py-4">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <Link to="/" onClick={toggleMenu} className="hover:text-purple-300">Home</Link>
            <Link to="/aboutus" onClick={toggleMenu} className="hover:text-purple-300">About Us</Link>
            <Link to="/portfolio" onClick={toggleMenu} className="hover:text-purple-300">Portfolio</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-purple-300">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
