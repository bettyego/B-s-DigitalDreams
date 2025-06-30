import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  as: Component = 'button',
  to,
  href,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500',
    secondary: 'bg-white hover:bg-gray-50 text-purple-600 border border-purple-600 focus:ring-purple-500',
    outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-gray-500',
    ghost: 'hover:bg-purple-100 text-purple-600 focus:ring-purple-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const handleClick = (e) => {
    if (loading || disabled) return;
    onClick?.(e);
  };

  const iconElement = loading ? (
    <Loader2 className={`${iconSizes[size]} animate-spin`} />
  ) : Icon ? (
    <Icon className={iconSizes[size]} />
  ) : null;

  // Determine the component to render
  const ElementType = Component === 'button' ? motion.button : motion(Component);

  // Prepare props based on component type
  const elementProps = {
    className: classes,
    onClick: handleClick,
    disabled: disabled || loading,
    whileHover: !disabled && !loading ? { scale: 1.02 } : {},
    whileTap: !disabled && !loading ? { scale: 0.98 } : {},
    ...props
  };

  // Add specific props based on component type
  if (Component === 'button') {
    elementProps.type = type;
  } else if (to) {
    elementProps.to = to;
  } else if (href) {
    elementProps.href = href;
  }

  return (
    <ElementType {...elementProps}>
      {iconElement && iconPosition === 'left' && (
        <span className={children ? 'mr-2' : ''}>{iconElement}</span>
      )}
      
      {loading && !Icon ? (
        <span className={children ? 'mr-2' : ''}>
          <Loader2 className={`${iconSizes[size]} animate-spin`} />
        </span>
      ) : null}
      
      {children}
      
      {iconElement && iconPosition === 'right' && (
        <span className={children ? 'ml-2' : ''}>{iconElement}</span>
      )}
    </ElementType>
  );
};

export default Button;
