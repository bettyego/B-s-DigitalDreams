// Application Constants

// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};

// Theme Configuration
export const THEME_CONFIG = {
  COLORS: {
    primary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87',
    },
    secondary: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
    },
  },
  BREAKPOINTS: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  ANIMATIONS: {
    DURATION: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    EASING: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    },
  },
};

// Navigation Configuration
export const NAVIGATION = {
  MAIN: [
    { name: 'Home', href: '/', exact: true },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  FOOTER: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap' },
  ],
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1BnLnpmwrw/',
  instagram: 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=tdcpvow',
  twitter: '#',
  linkedin: '#',
  github: '#',
};

// Contact Information
export const CONTACT_INFO = {
  email: 'nwabethroseonuoha@gmail.com',
  phone: '+234 806 411 1501',
  location: 'Nigeria',
  timezone: 'WAT (UTC+1)',
  responseTime: 'Within 24 hours',
};

// Business Information
export const BUSINESS_INFO = {
  name: "B's DigitalDreams",
  tagline: 'Where Vision Meets Reality',
  description: 'Professional web development and design services that transform your digital presence.',
  founder: 'Onuoha-Mba Bethel',
  established: '2022',
  services: [
    'Custom Web Development',
    'Responsive Design',
    'E-commerce Solutions',
    'UI/UX Design',
    'SEO Optimization',
    'Performance Optimization',
  ],
};

// Project Categories
export const PROJECT_CATEGORIES = {
  ALL: 'all',
  ECOMMERCE: 'ecommerce',
  PORTFOLIO: 'portfolio',
  WEBAPP: 'webapp',
  BUSINESS: 'business',
  LANDING: 'landing',
};

// Form Configuration
export const FORM_CONFIG = {
  VALIDATION: {
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_REGEX: /^[\+]?[1-9][\d]{0,15}$/,
    MIN_MESSAGE_LENGTH: 10,
    MAX_MESSAGE_LENGTH: 1000,
  },
  PROJECT_TYPES: [
    'Website Development',
    'E-commerce Store',
    'Portfolio Website',
    'Business Website',
    'Landing Page',
    'Web Application',
    'UI/UX Design',
    'Other',
  ],
  BUDGET_RANGES: [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    "Let's discuss",
  ],
};

// SEO Configuration
export const SEO_CONFIG = {
  DEFAULT_TITLE: "B's DigitalDreams - Professional Web Development & Design Services",
  DEFAULT_DESCRIPTION: 'Transform your digital presence with expert web development, responsive design, and modern solutions that drive business growth.',
  DEFAULT_KEYWORDS: 'web development, web design, responsive design, React development, portfolio website, business website, e-commerce, UI/UX design',
  SITE_URL: 'https://bettyempire.vercel.app',
  AUTHOR: 'Onuoha-Mba Bethel',
  TWITTER_HANDLE: '@bettyempire',
};

// Performance Configuration
export const PERFORMANCE_CONFIG = {
  IMAGE_OPTIMIZATION: {
    QUALITY: 85,
    FORMATS: ['webp', 'jpg', 'png'],
    SIZES: [320, 640, 768, 1024, 1280, 1920],
  },
  LAZY_LOADING: {
    ROOT_MARGIN: '50px',
    THRESHOLD: 0.1,
  },
  CACHE: {
    STATIC_ASSETS: '1y',
    API_RESPONSES: '5m',
    IMAGES: '30d',
  },
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK: 'Network error. Please check your connection and try again.',
  SERVER: 'Server error. Please try again later.',
  VALIDATION: 'Please check your input and try again.',
  NOT_FOUND: 'The requested resource was not found.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORM_SUBMISSION: 'There was an error submitting the form. Please try again.',
  GENERIC: 'Something went wrong. Please try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMISSION: 'Thank you for your message! I\'ll get back to you within 24 hours.',
  SUBSCRIPTION: 'Successfully subscribed to updates!',
  CONTACT: 'Message sent successfully!',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'bettyempire-theme',
  PREFERENCES: 'bettyempire-preferences',
  FORM_DATA: 'bettyempire-form-data',
  VISITED: 'bettyempire-visited',
};

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  GOOGLE_ANALYTICS_ID: import.meta.env.VITE_GA_ID,
  EVENTS: {
    PAGE_VIEW: 'page_view',
    CONTACT_FORM: 'contact_form_submit',
    PROJECT_VIEW: 'project_view',
    DOWNLOAD_CV: 'download_cv',
    SOCIAL_CLICK: 'social_click',
  },
};

// Feature Flags
export const FEATURE_FLAGS = {
  DARK_MODE: true,
  ANIMATIONS: true,
  ANALYTICS: import.meta.env.PROD,
  SERVICE_WORKER: import.meta.env.PROD,
  ERROR_REPORTING: import.meta.env.PROD,
};

export default {
  API_CONFIG,
  THEME_CONFIG,
  NAVIGATION,
  SOCIAL_LINKS,
  CONTACT_INFO,
  BUSINESS_INFO,
  PROJECT_CATEGORIES,
  FORM_CONFIG,
  SEO_CONFIG,
  PERFORMANCE_CONFIG,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  STORAGE_KEYS,
  ANALYTICS_CONFIG,
  FEATURE_FLAGS,
};
