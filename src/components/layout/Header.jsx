import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href) => {
    return location.pathname === href;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg text-gray-900' 
          : 'bg-white/10 backdrop-blur-md text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            aria-label="B's DigitalDreams Home"
          >
            <img 
              src="/bettylogo.png" 
              alt="B's DigitalDreams Logo" 
              className="w-10 h-10 rounded-full shadow-md group-hover:shadow-lg transition-shadow"
            />
            <h1 className={`text-xl font-bold transition-colors ${
              scrolled ? 'text-purple-700' : 'text-white'
            }`}>
              B's DigitalDreams
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActiveLink(item.href)
                    ? scrolled 
                      ? 'text-purple-700' 
                      : 'text-purple-300'
                    : scrolled
                      ? 'text-gray-700 hover:text-purple-700'
                      : 'text-white hover:text-purple-300'
                }`}
              >
                {item.name}
                {isActiveLink(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      scrolled ? 'bg-purple-700' : 'bg-purple-300'
                    }`}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-purple-700 hover:bg-purple-100'
                  : 'text-white hover:text-purple-300 hover:bg-white/10'
              }`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-purple-700 hover:bg-purple-100'
                  : 'text-white hover:text-purple-300 hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 border-t border-white/20 pt-4"
            >
              <nav className="flex flex-col gap-4" role="navigation">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMenu}
                    className={`text-sm font-medium transition-colors py-2 ${
                      isActiveLink(item.href)
                        ? scrolled 
                          ? 'text-purple-700' 
                          : 'text-purple-300'
                        : scrolled
                          ? 'text-gray-700 hover:text-purple-700'
                          : 'text-white hover:text-purple-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
