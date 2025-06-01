import React, { useState } from 'react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = '#273a3d' }) => {
  const [imageError, setImageError] = useState(false);
  
  // Use light logo on dark backgrounds, dark logo on light backgrounds
  const isLightLogo = color === '#ffffff' || color === 'white';
  const logoSrc = isLightLogo ? '/images/logo-light.webp' : '/images/logo-dark.webp';
  
  // Fallback to text if image fails to load
  if (imageError) {
    return (
      <div className="flex items-center">
        <h1 className={`text-2xl md:text-3xl font-serif ${isLightLogo ? 'text-white' : 'text-primary-800'}`}>
          HiTech Aesthetics
        </h1>
      </div>
    );
  }
  
  return (
    <div className="flex items-center">
      <img 
        src={logoSrc} 
        alt="HiTech Aesthetics" 
        className="h-12 md:h-16"
        loading="eager"
        width="200"
        height="64"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default Logo;