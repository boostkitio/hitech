import React from 'react';
import { IKImage } from '../../lib/imagekit';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  quality?: number;
  transformation?: Array<{
    height?: number;
    width?: number;
    quality?: number;
    crop?: string;
    focus?: string;
  }>;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  quality = 80,
  transformation = [],
}) => {
  // If the image is already an ImageKit URL, use it directly
  const isImageKitUrl = src.includes('ik.imagekit.io');
  const imagePath = isImageKitUrl ? src : src.replace(/^\/+/, '');

  return (
    <IKImage
      path={imagePath}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      quality={quality}
      transformation={transformation}
      lqip={{ active: true, quality: 20, blur: 10 }}
    />
  );
};

export default OptimizedImage;