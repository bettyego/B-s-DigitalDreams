import { useEffect, useState } from 'react';

export const useAccessibility = () => {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Detect keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        setIsKeyboardUser(true);
        document.body.classList.add('keyboard-user');
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardUser(false);
      document.body.classList.remove('keyboard-user');
    };

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e) => {
      setReducedMotion(e.matches);
    };

    // Check for high contrast preference
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    setHighContrast(contrastQuery.matches);

    const handleContrastChange = (e) => {
      setHighContrast(e.matches);
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    mediaQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      mediaQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  // Announce to screen readers
  const announce = (message, priority = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Focus management
  const focusElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.focus();
    }
  };

  // Trap focus within a container
  const trapFocus = (container) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    
    return () => {
      container.removeEventListener('keydown', handleTabKey);
    };
  };

  return {
    isKeyboardUser,
    reducedMotion,
    highContrast,
    announce,
    focusElement,
    trapFocus,
  };
};

// Utility functions for accessibility
export const a11yUtils = {
  // Generate unique IDs for form elements
  generateId: (prefix = 'element') => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  // Check if element is visible
  isElementVisible: (element) => {
    return !!(
      element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length
    );
  },

  // Get accessible name for an element
  getAccessibleName: (element) => {
    return (
      element.getAttribute('aria-label') ||
      element.getAttribute('aria-labelledby') ||
      element.textContent ||
      element.getAttribute('title') ||
      element.getAttribute('placeholder') ||
      ''
    ).trim();
  },

  // Check if element is focusable
  isFocusable: (element) => {
    const focusableSelectors = [
      'button',
      '[href]',
      'input',
      'select',
      'textarea',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ];

    return focusableSelectors.some(selector => 
      element.matches(selector) && !element.disabled
    );
  },

  // Create skip link
  createSkipLink: (target, text = 'Skip to main content') => {
    const skipLink = document.createElement('a');
    skipLink.href = target;
    skipLink.textContent = text;
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50';
    
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const targetElement = document.querySelector(target);
      if (targetElement) {
        targetElement.focus();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });

    return skipLink;
  },

  // Validate color contrast
  validateContrast: (foreground, background) => {
    // This is a simplified version - in production, use a proper contrast checking library
    const getLuminance = (color) => {
      const rgb = color.match(/\d+/g);
      if (!rgb) return 0;
      
      const [r, g, b] = rgb.map(c => {
        c = parseInt(c) / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    
    return {
      ratio,
      aa: ratio >= 4.5,
      aaa: ratio >= 7,
    };
  },
};

export default useAccessibility;
