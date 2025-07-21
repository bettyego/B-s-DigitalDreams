import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  sizes = '(max-width: 768px) 100vw, 50vw',
  loading = 'lazy',
  placeholder = true,
  quality = 85,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Generate optimized image sources
  const generateSources = (originalSrc) => {
    const baseName = originalSrc.replace(/\.[^/.]+$/, '');
    const extension = originalSrc.split('.').pop();
    
    return {
      webp: `${baseName}.webp`,
      avif: `${baseName}.avif`,
      original: originalSrc,
      // For different sizes
      small: `${baseName}-small.${extension}`,
      medium: `${baseName}-medium.${extension}`,
      large: `${baseName}-large.${extension}`,
    };
  };

  const sources = generateSources(src);

  // Placeholder component
  const Placeholder = () => (
    <div 
      className={`bg-gradient-to-br from-purple-100 to-purple-200 animate-pulse flex items-center justify-center ${className}`}
      style={{ aspectRatio: '16/9' }}
    >
      <svg 
        className="w-8 h-8 text-purple-400" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path 
          fillRule="evenodd" 
          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
          clipRule="evenodd" 
        />
      </svg>
    </div>
  );

  // Error component
  const ErrorFallback = () => (
    <div 
      className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center ${className}`}
      style={{ aspectRatio: '16/9' }}
    >
      <div className="text-center text-gray-500">
        <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <p className="text-sm">Image failed to load</p>
      </div>
    </div>
  );

  if (hasError) {
    return <ErrorFallback />;
  }

  if (!isInView && loading === 'lazy') {
    return <div ref={imgRef}>{placeholder && <Placeholder />}</div>;
  }

  return (
    <div ref={imgRef} className="relative overflow-hidden">
      {/* Show placeholder while loading */}
      {!isLoaded && placeholder && (
        <div className="absolute inset-0 z-10">
          <Placeholder />
        </div>
      )}

      <picture className={className}>
        {/* AVIF format for modern browsers */}
        <source 
          srcSet={`
            ${sources.small.replace(/\.[^/.]+$/, '.avif')} 320w,
            ${sources.medium.replace(/\.[^/.]+$/, '.avif')} 768w,
            ${sources.large.replace(/\.[^/.]+$/, '.avif')} 1200w
          `}
          sizes={sizes}
          type="image/avif" 
        />
        
        {/* WebP format for better compression */}
        <source 
          srcSet={`
            ${sources.small.replace(/\.[^/.]+$/, '.webp')} 320w,
            ${sources.medium.replace(/\.[^/.]+$/, '.webp')} 768w,
            ${sources.large.replace(/\.[^/.]+$/, '.webp')} 1200w
          `}
          sizes={sizes}
          type="image/webp" 
        />
        
        {/* Fallback to original format */}
        <motion.img
          src={src}
          alt={alt}
          loading={loading}
          sizes={sizes}
          srcSet={`
            ${sources.small} 320w,
            ${sources.medium} 768w,
            ${sources.large} 1200w
          `}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      </picture>

      {/* Loading indicator */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
