import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', text = 'Loading...', fullScreen = true }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const Spinner = () => (
    <motion.div
      variants={spinnerVariants}
      animate="animate"
      className={`${sizes[size]} border-4 border-purple-200 border-t-purple-600 rounded-full`}
    />
  );

  if (fullScreen) {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div className="text-center">
          <Spinner />
          {text && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-600 font-medium"
            >
              {text}
            </motion.p>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <Spinner />
        {text && (
          <p className="mt-4 text-gray-600 font-medium">{text}</p>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;
