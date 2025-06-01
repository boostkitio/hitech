import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  placeholderSrc?: string;
  eager?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholderSrc,
  eager = false,
}) => {
  // If eager loading is requested, use regular img tag
  if (eager) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading="eager"
      />
    );
  }

  // Use lazy loading for other images
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      placeholderSrc={placeholderSrc}
      effect="blur"
      threshold={100}
    />
  );
};

export default OptimizedImage;