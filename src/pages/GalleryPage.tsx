import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, X, Search } from 'lucide-react';

interface GalleryImage {
  id: string;
  category: string;
  treatment: string;
  before: string;
  after: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  // Hair Removal
  {
    id: '1',
    category: 'Hair Removal',
    treatment: 'Soprano Ice Platinum',
    before: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    after: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    description: 'Full leg laser hair removal after 6 sessions'
  },
  {
    id: '2',
    category: 'Hair Removal',
    treatment: 'Apilus xCell',
    before: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    after: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    description: 'Facial hair removal with electrolysis'
  },
  // Skin Rejuvenation
  {
    id: '3',
    category: 'Skin Rejuvenation',
    treatment: 'SkinPen Microneedling',
    before: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    after: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    description: 'Acne scar improvement after 4 treatments'
  },
  {
    id: '4',
    category: 'Skin Rejuvenation',
    treatment: 'Lynton IPL',
    before: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    after: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    description: 'Sun damage and pigmentation correction'
  },
  {
    id: '5',
    category: 'Skin Rejuvenation',
    treatment: 'Lynton RF',
    before: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    after: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    description: 'Skin tightening and lifting results'
  },
  // Injectable Treatments
  {
    id: '6',
    category: 'Injectable Treatments',
    treatment: 'Botox',
    before: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    after: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    description: 'Forehead lines and crow\'s feet treatment'
  },
  {
    id: '7',
    category: 'Injectable Treatments',
    treatment: 'Polynucleotides',
    before: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    after: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    description: 'Under-eye rejuvenation and skin quality improvement'
  },
  // Advanced Therapies
  {
    id: '8',
    category: 'Advanced Therapies',
    treatment: 'PRP Hair Restoration',
    before: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    after: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    description: 'Hair density improvement after 4 PRP sessions'
  },
  {
    id: '9',
    category: 'Advanced Therapies',
    treatment: 'Chemical Peels',
    before: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    after: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    description: 'Skin texture and tone improvement'
  },
  {
    id: '10',
    category: 'Advanced Therapies',
    treatment: 'Permanent Makeup',
    before: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    after: 'https://ik.imagekit.io/boostkit/HiTech/Microneedling.jpg?updatedAt=1749817105725',
    description: 'Microbladed eyebrows for natural enhancement'
  }
];

const categories = ['All', 'Hair Removal', 'Skin Rejuvenation', 'Injectable Treatments', 'Advanced Therapies'];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory;
    const matchesSearch = image.treatment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <>
      <Helmet>
        <title>Before & After Gallery | HiTech Aesthetics</title>
        <meta 
          name="description" 
          content="View real results from our aesthetic treatments. Browse our before and after gallery showcasing transformations from various procedures."
        />
      </Helmet>

      {/* Header Section */}
      <section ref={headerRef} className="pt-32 pb-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-white mb-6">Before & After Gallery</h1>
            <p className="text-xl text-neutral-100">
              Explore real results from our treatments. All images are from actual patients with their consent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search treatments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src={image.before}
                        alt={`${image.treatment} Before`}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                        Before
                      </span>
                    </div>
                    <div className="relative">
                      <img
                        src={image.after}
                        alt={`${image.treatment} After`}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute bottom-2 right-2 bg-primary-600 text-white px-2 py-1 text-xs rounded">
                        After
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{image.treatment}</h3>
                    <p className="text-neutral-600 text-sm">{image.description}</p>
                    <p className="text-primary-600 text-xs mt-2">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 text-lg">No images found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neutral-300"
              onClick={handlePrevious}
            >
              <ChevronLeft size={48} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-neutral-300"
              onClick={handleNext}
            >
              <ChevronRight size={48} />
            </button>

            {/* Image Content */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative">
                  <img
                    src={selectedImage.before}
                    alt={`${selectedImage.treatment} Before`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 text-sm rounded">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={selectedImage.after}
                    alt={`${selectedImage.treatment} After`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-4 right-4 bg-primary-600 text-white px-4 py-2 text-sm rounded">
                    After
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{selectedImage.treatment}</h3>
                <p className="text-neutral-600 mb-2">{selectedImage.description}</p>
                <p className="text-primary-600 text-sm">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-neutral-600 text-sm">
              <strong>Disclaimer:</strong> Individual results may vary. All before and after photos are from real patients 
              who have given their consent. Results shown are not guaranteed and depend on individual circumstances.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;