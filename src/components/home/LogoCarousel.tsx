import React from 'react';

const logos = [
  { name: 'Alma Lasers', src: 'https://ik.imagekit.io/boostkit/HiTech/Carousel/Alma_Logo.png?updatedAt=1759841217304' },
  { name: 'Apilus', src: 'https://ik.imagekit.io/boostkit/HiTech/Carousel/Apilus_Logo.png?updatedAt=1759841217659' },
  { name: 'Dermalux', src: 'https://ik.imagekit.io/boostkit/HiTech/Carousel/Dermalux_Logo.png?updatedAt=1759841217678' },
  { name: 'Hydrafacial', src: 'https://ik.imagekit.io/boostkit/HiTech/Carousel/Hydrafacial_Logo.png?updatedAt=1759841217718' },
  { name: 'Lynton', src: 'https://ik.imagekit.io/boostkit/HiTech/Carousel/Lynton_Logo.png?updatedAt=1759841217505' },
  { name: 'Obagi', src: 'https://ik.imagekit.io/boostkit/HiTech/Carousel/Obagi_Logo.webp?updatedAt=1760365528818' },
  { name: 'Sofwave', src: 'https://ik.imagekit.io/boostkit/HiTech/Logos/sofwave.png' },
  { name: 'SkinPen', src: 'https://ik.imagekit.io/boostkit/HiTech/Carousel/SkinPen_Logo.png?updatedAt=1759841217568' },
  { name: 'ZO Skin Health', src: 'https://ik.imagekit.io/boostkit/HiTech/Carousel/ZO_Logo.png?updatedAt=1759841217384' },
];

const LogoCarousel: React.FC = () => {
  // We duplicate the logos to create a seamless scrolling effect
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
        {extendedLogos.map((logo, index) => (
          <li key={index} className="flex items-center justify-center w-40 h-16">
            <img
              src={logo.src}
              alt={logo.name}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel; 