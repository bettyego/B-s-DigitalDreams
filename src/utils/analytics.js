// Analytics utility functions for tracking user interactions and performance

import { ANALYTICS_CONFIG } from './constants';

// Initialize analytics
export const initAnalytics = () => {
  if (!ANALYTICS_CONFIG.GOOGLE_ANALYTICS_ID || !import.meta.env.PROD) {
    console.log('Analytics disabled in development mode');
    return;
  }

  // Google Analytics 4
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GOOGLE_ANALYTICS_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', ANALYTICS_CONFIG.GOOGLE_ANALYTICS_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true
  });

  // Initialize other analytics services
  initPlausible();
  initHotjar();
};

// Plausible Analytics (privacy-friendly alternative)
const initPlausible = () => {
  if (window.plausible) return;

  const script = document.createElement('script');
  script.defer = true;
  script.setAttribute('data-domain', window.location.hostname);
  script.src = 'https://plausible.io/js/plausible.js';
  document.head.appendChild(script);
};

// Hotjar for user behavior analytics
const initHotjar = () => {
  if (window.hj || !import.meta.env.VITE_HOTJAR_ID) return;

  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid: import.meta.env.VITE_HOTJAR_ID, hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
};

// Track custom events
export const trackEvent = (eventName, properties = {}) => {
  try {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: properties.category || 'engagement',
        event_label: properties.label,
        value: properties.value,
        ...properties
      });
    }

    // Plausible
    if (window.plausible) {
      window.plausible(eventName, { props: properties });
    }

    // Custom analytics endpoint (if you have one)
    if (import.meta.env.VITE_ANALYTICS_ENDPOINT) {
      fetch(import.meta.env.VITE_ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: eventName,
          properties: {
            ...properties,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent
          }
        })
      }).catch(console.error);
    }

    console.log('Event tracked:', eventName, properties);
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

// Track page views
export const trackPageView = (path, title) => {
  try {
    if (typeof gtag !== 'undefined') {
      gtag('config', ANALYTICS_CONFIG.GOOGLE_ANALYTICS_ID, {
        page_path: path,
        page_title: title || document.title
      });
    }

    if (window.plausible) {
      window.plausible('pageview', { 
        props: { 
          path: path,
          title: title || document.title 
        } 
      });
    }

    trackEvent(ANALYTICS_CONFIG.EVENTS.PAGE_VIEW, {
      page_path: path,
      page_title: title || document.title
    });
  } catch (error) {
    console.error('Page view tracking error:', error);
  }
};

// Track form submissions
export const trackFormSubmission = (formName, success = true, errorMessage = null) => {
  trackEvent(ANALYTICS_CONFIG.EVENTS.CONTACT_FORM, {
    form_name: formName,
    success: success,
    error_message: errorMessage,
    category: 'form'
  });
};

// Track project interactions
export const trackProjectView = (projectName, projectCategory) => {
  trackEvent(ANALYTICS_CONFIG.EVENTS.PROJECT_VIEW, {
    project_name: projectName,
    project_category: projectCategory,
    category: 'portfolio'
  });
};

// Track downloads
export const trackDownload = (fileName, fileType) => {
  trackEvent(ANALYTICS_CONFIG.EVENTS.DOWNLOAD_CV, {
    file_name: fileName,
    file_type: fileType,
    category: 'download'
  });
};

// Track social media clicks
export const trackSocialClick = (platform, url) => {
  trackEvent(ANALYTICS_CONFIG.EVENTS.SOCIAL_CLICK, {
    platform: platform,
    url: url,
    category: 'social'
  });
};

// Track performance metrics
export const trackPerformance = () => {
  if (!window.performance) return;

  // Wait for page to fully load
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');

      const metrics = {
        // Core Web Vitals
        dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        load_time: navigation.loadEventEnd - navigation.loadEventStart,
        first_paint: paint.find(p => p.name === 'first-paint')?.startTime,
        first_contentful_paint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
        
        // Network timing
        dns_lookup: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcp_connection: navigation.connectEnd - navigation.connectStart,
        server_response: navigation.responseEnd - navigation.requestStart,
        
        // Page size
        transfer_size: navigation.transferSize,
        encoded_body_size: navigation.encodedBodySize,
        decoded_body_size: navigation.decodedBodySize
      };

      trackEvent('performance_metrics', {
        ...metrics,
        category: 'performance'
      });

      // Track Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          trackEvent('largest_contentful_paint', {
            lcp_time: lastEntry.startTime,
            category: 'performance'
          });
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }
    }, 1000);
  });
};

// Track user engagement
export const trackEngagement = () => {
  let startTime = Date.now();
  let isActive = true;
  let totalTime = 0;

  // Track time on page
  const updateEngagement = () => {
    if (isActive) {
      totalTime += Date.now() - startTime;
      startTime = Date.now();
    }
  };

  // Track when user becomes inactive
  const handleVisibilityChange = () => {
    if (document.hidden) {
      updateEngagement();
      isActive = false;
    } else {
      startTime = Date.now();
      isActive = true;
    }
  };

  // Track scroll depth
  let maxScroll = 0;
  const trackScrollDepth = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      // Track milestone scroll depths
      if ([25, 50, 75, 90].includes(scrollPercent)) {
        trackEvent('scroll_depth', {
          scroll_percent: scrollPercent,
          category: 'engagement'
        });
      }
    }
  };

  // Event listeners
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('scroll', trackScrollDepth, { passive: true });
  
  // Send engagement data before page unload
  window.addEventListener('beforeunload', () => {
    updateEngagement();
    
    trackEvent('page_engagement', {
      time_on_page: Math.round(totalTime / 1000), // in seconds
      max_scroll_depth: maxScroll,
      category: 'engagement'
    });
  });
};

// Error tracking
export const trackError = (error, errorInfo = {}) => {
  trackEvent('javascript_error', {
    error_message: error.message,
    error_stack: error.stack,
    error_filename: error.filename,
    error_line: error.lineno,
    error_column: error.colno,
    ...errorInfo,
    category: 'error'
  });
};

// Initialize error tracking
export const initErrorTracking = () => {
  window.addEventListener('error', (event) => {
    trackError(event.error, {
      type: 'javascript_error',
      filename: event.filename,
      line: event.lineno,
      column: event.colno
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    trackError(new Error(event.reason), {
      type: 'unhandled_promise_rejection'
    });
  });
};

// Export all functions
export default {
  initAnalytics,
  trackEvent,
  trackPageView,
  trackFormSubmission,
  trackProjectView,
  trackDownload,
  trackSocialClick,
  trackPerformance,
  trackEngagement,
  trackError,
  initErrorTracking
};
