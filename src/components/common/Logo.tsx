import React from 'react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = '#273a3d' }) => {
  // Use regular version of logo on light backgrounds, dark version otherwise
  const logoSrc = color === '#ffffff' || color === 'white' 
    ? '/src/components/common/Logo.webp' 
    : '/src/components/common/Logo_dark.webp';
  
  return (
    <div className="flex items-center">
      <img 
        src={logoSrc} 
        alt="HiTech Aesthetics Logo" 
        className="h-12 md:h-16" 
      />
    </div>
  );
};

export default Logo;