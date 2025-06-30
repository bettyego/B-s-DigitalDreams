import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import { useTheme } from '../../context/ThemeContext';

const Layout = ({ children }) => {
  const location = useLocation();
  const { preferences } = useTheme();
  
  // Determine if we should show header/footer based on route
  const isHomePage = location.pathname === '/';
  const showHeaderFooter = true; // You can customize this logic

  return (
    <div className="min-h-screen flex flex-col">
      {showHeaderFooter && <Header />}
      
      <main 
        className="flex-1"
        role="main"
        aria-label="Main content"
      >
        {children}
      </main>
      
      {showHeaderFooter && <Footer />}
      
      <ScrollToTop />
      
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default Layout;
