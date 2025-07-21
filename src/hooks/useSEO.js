import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_CONFIG } from '../utils/constants';

export const useSEO = ({ 
  title, 
  description, 
  keywords, 
  image,
  type = 'website',
  author = SEO_CONFIG.AUTHOR,
  publishedTime,
  modifiedTime,
  canonical
}) => {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    const fullTitle = title 
      ? `${title} | ${SEO_CONFIG.DEFAULT_TITLE}`
      : SEO_CONFIG.DEFAULT_TITLE;
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMeta = (property, content, isProperty = false) => {
      if (!content) return;
      
      const selector = isProperty 
        ? `meta[property="${property}"]` 
        : `meta[name="${property}"]`;
      
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper function to update link tags
    const updateLink = (rel, href) => {
      if (!href) return;
      
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Basic meta tags
    updateMeta('description', description || SEO_CONFIG.DEFAULT_DESCRIPTION);
    updateMeta('keywords', keywords || SEO_CONFIG.DEFAULT_KEYWORDS);
    updateMeta('author', author);
    updateMeta('robots', 'index, follow');
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph meta tags
    const currentUrl = `${SEO_CONFIG.SITE_URL}${location.pathname}`;
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description || SEO_CONFIG.DEFAULT_DESCRIPTION, true);
    updateMeta('og:type', type, true);
    updateMeta('og:url', currentUrl, true);
    updateMeta('og:site_name', "B's DigitalDreams", true);
    updateMeta('og:locale', 'en_US', true);
    
    if (image) {
      updateMeta('og:image', image.startsWith('http') ? image : `${SEO_CONFIG.SITE_URL}${image}`, true);
      updateMeta('og:image:alt', title || 'B\'s DigitalDreams', true);
      updateMeta('og:image:width', '1200', true);
      updateMeta('og:image:height', '630', true);
    }

    // Twitter Card meta tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:site', SEO_CONFIG.TWITTER_HANDLE);
    updateMeta('twitter:creator', SEO_CONFIG.TWITTER_HANDLE);
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description || SEO_CONFIG.DEFAULT_DESCRIPTION);
    
    if (image) {
      updateMeta('twitter:image', image.startsWith('http') ? image : `${SEO_CONFIG.SITE_URL}${image}`);
      updateMeta('twitter:image:alt', title || 'B\'s DigitalDreams');
    }

    // Article meta tags (for blog posts, case studies, etc.)
    if (type === 'article') {
      updateMeta('article:author', author, true);
      if (publishedTime) {
        updateMeta('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        updateMeta('article:modified_time', modifiedTime, true);
      }
    }

    // Canonical URL
    updateLink('canonical', canonical || currentUrl);

    // Preconnect to external domains for performance
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://api.emailjs.com'
    ];

    preconnectDomains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        document.head.appendChild(link);
      }
    });

    // Add structured data for better SEO
    const addStructuredData = () => {
      const existingScript = document.querySelector('#structured-data');
      if (existingScript) {
        existingScript.remove();
      }

      const structuredData = {
        '@context': 'https://schema.org',
        '@type': type === 'article' ? 'Article' : 'WebPage',
        name: fullTitle,
        description: description || SEO_CONFIG.DEFAULT_DESCRIPTION,
        url: currentUrl,
        author: {
          '@type': 'Person',
          name: author,
          url: SEO_CONFIG.SITE_URL
        },
        publisher: {
          '@type': 'Organization',
          name: "B's DigitalDreams",
          url: SEO_CONFIG.SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SEO_CONFIG.SITE_URL}/bettylogo.png`
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl
        }
      };

      if (image) {
        structuredData.image = {
          '@type': 'ImageObject',
          url: image.startsWith('http') ? image : `${SEO_CONFIG.SITE_URL}${image}`,
          width: 1200,
          height: 630
        };
      }

      if (publishedTime) {
        structuredData.datePublished = publishedTime;
      }

      if (modifiedTime) {
        structuredData.dateModified = modifiedTime;
      }

      const script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    addStructuredData();

  }, [title, description, keywords, image, type, author, publishedTime, modifiedTime, canonical, location.pathname]);
};

// Hook for page-specific SEO
export const usePageSEO = (pageConfig) => {
  const seoConfig = {
    '/': {
      title: 'Home',
      description: 'Professional web development and design services that transform your digital presence.',
      keywords: 'web development, web design, portfolio, React developer, UI/UX design',
      image: '/graphic2.webp'
    },
    '/aboutus': {
      title: 'About Us',
      description: 'Learn about Onuoha-Mba Bethel and B\'s DigitalDreams - passionate web developer and designer.',
      keywords: 'about, web developer, designer, skills, experience, Onuoha-Mba Bethel',
      image: '/her.JPG'
    },
    '/portfolio': {
      title: 'Portfolio',
      description: 'Explore our portfolio of web development projects, e-commerce solutions, and design work.',
      keywords: 'portfolio, projects, web development, e-commerce, design, case studies',
      image: '/web1.jpg'
    },
    '/contact': {
      title: 'Contact',
      description: 'Get in touch for your next web development project. Free consultation available.',
      keywords: 'contact, web development services, consultation, hire developer, project quote',
      image: '/graphic1.jpeg'
    }
  };

  const location = useLocation();
  const config = pageConfig || seoConfig[location.pathname] || {};

  useSEO(config);
};

export default useSEO;
