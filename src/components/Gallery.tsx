import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Portraits', 'Nature', 'Urban', 'Events'];

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Nature',
      title: 'Whale in Motion',
      description: 'Captured during a marine photography expedition off the coast of Iceland.'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Nature',
      title: 'Ocean Waves',
      description: 'The power and beauty of the ocean captured at golden hour.'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Portraits',
      title: 'Creative Session',
      description: 'A candid moment during a lifestyle portrait session.'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Nature',
      title: 'Forest Light',
      description: 'Sunbeams filtering through ancient forest canopy.'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Portraits',
      title: 'Professional Portrait',
      description: 'Corporate headshot with natural lighting.'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Nature',
      title: 'Mountain Lake',
      description: 'Serene lake surrounded by towering mountains at dawn.'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Urban',
      title: 'Urban Geometry',
      description: 'Grayscale architectural perspective showcasing modern design.'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Urban',
      title: 'City Lines',
      description: 'Low angle photography capturing the essence of urban architecture.'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Urban',
      title: 'Concrete Dreams',
      description: 'Minimalist white concrete structure against the sky.'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Urban',
      title: 'Glass Reflections',
      description: 'Bottom view of glass building creating geometric patterns.'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Urban',
      title: 'Skyward',
      description: 'Worms eye view of towering buildings reaching for the sky.'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Events',
      title: 'Tech Conference',
      description: 'Dynamic atmosphere at a technology conference with digital displays.'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Events',
      title: 'Collaborative Workspace',
      description: 'Capturing the energy of people working together in a modern environment.'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Events',
      title: 'Wedding Celebration',
      description: 'Intimate moment captured during a beautiful wedding ceremony.'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1551818255-e6e10975cd17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Events',
      title: 'Corporate Gathering',
      description: 'Professional networking event with engaging conversations.'
    }
  ];

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const totalImages = filteredImages.length;
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex === 0 ? totalImages - 1 : currentIndex - 1);
    } else {
      setSelectedImage(currentIndex === totalImages - 1 ? 0 : currentIndex + 1);
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Portfolio</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A curated selection of my work spanning nature, portraits, and urban photography.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 transition-all duration-300 ${
                filter === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden bg-gray-100 aspect-square cursor-pointer animate-zoom-in"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="font-serif text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>
              
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-serif text-xl font-semibold mb-1">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-sm text-gray-300">
                  {filteredImages[selectedImage].description}
                </p>
              </div>

              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;