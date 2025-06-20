import React from 'react';

const logos = [
  { name: 'Apilus', src: 'https://ik.imagekit.io/boostkit/HiTech/Logos/Apilus.svg?updatedAt=1750432721703' },
  { name: 'Skinpen', src: 'https://ik.imagekit.io/boostkit/HiTech/Logos/Skinpen.svg?updatedAt=1750432721657' },
  { name: 'Dermalux', src: 'https://ik.imagekit.io/boostkit/HiTech/Logos/Dermalux.svg?updatedAt=1750432721658' },
  { name: 'ZO Skin Health', src: 'https://ik.imagekit.io/boostkit/HiTech/Logos/ZO.svg?updatedAt=1750432721658' },
  { name: 'Lynton', src: 'https://ik.imagekit.io/boostkit/HiTech/Logos/Lynton.svg?updatedAt=1750432721598' },
  { name: 'Alma Lasers', src: 'https://ik.imagekit.io/boostkit/HiTech/Logos/Alma.svg?updatedAt=1750432721527' },
];

const LogoCarousel: React.FC = () => {
  // We duplicate the logos to create a seamless scrolling effect
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {extendedLogos.map((logo, index) => (
          <li key={index}>
            <img 
              src={logo.src} 
              alt={logo.name} 
              className="h-10 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel; 