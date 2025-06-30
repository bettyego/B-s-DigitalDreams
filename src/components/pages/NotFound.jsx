import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Button from '../ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-purple-600 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-white max-w-2xl mx-auto"
      >
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[12rem] font-bold text-white/20 leading-none">
            404
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            as={Link}
            to="/"
            variant="secondary"
            size="lg"
            icon={Home}
            className="bg-white text-purple-600 hover:bg-purple-50"
          >
            Go Home
          </Button>
          
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
            icon={ArrowLeft}
            className="border-white text-white hover:bg-white/10"
          >
            Go Back
          </Button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <p className="text-sm text-purple-200 mb-4">
            Looking for something specific? Try these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              to="/aboutus" 
              className="text-purple-200 hover:text-white transition-colors underline"
            >
              About Us
            </Link>
            <Link 
              to="/portfolio" 
              className="text-purple-200 hover:text-white transition-colors underline"
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="text-purple-200 hover:text-white transition-colors underline"
            >
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-white/10"
        >
          <Search size={40} />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 text-white/10"
        >
          <Home size={50} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
