import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  shadow = 'md',
  rounded = 'lg',
  background = 'white',
  border = false,
  ...props
}) => {
  const baseClasses = 'transition-all duration-300';
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  };

  const roundeds = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  };

  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    purple: 'bg-purple-50',
    transparent: 'bg-transparent',
    gradient: 'bg-gradient-to-br from-purple-50 to-pink-50',
  };

  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';
  const borderClasses = border ? 'border border-gray-200' : '';

  const classes = `
    ${baseClasses}
    ${paddings[padding]}
    ${shadows[shadow]}
    ${roundeds[rounded]}
    ${backgrounds[background]}
    ${hoverClasses}
    ${borderClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Card sub-components for better composition
Card.Header = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

Card.Body = ({ children, className = '', ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '', ...props }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

Card.Title = ({ children, className = '', as: Component = 'h3', ...props }) => (
  <Component className={`text-xl font-semibold text-gray-900 ${className}`} {...props}>
    {children}
  </Component>
);

Card.Description = ({ children, className = '', ...props }) => (
  <p className={`text-gray-600 ${className}`} {...props}>
    {children}
  </p>
);

export default Card;
