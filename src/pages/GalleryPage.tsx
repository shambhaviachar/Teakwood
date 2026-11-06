import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/resortData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'stay', label: 'Rooms, Suites & Bathrooms' },
    { id: 'pool', label: 'Swimming Pool (Day & Night)' },
    { id: 'activities', label: 'Activities & Games' },
    { id: 'campus', label: 'Teak Campus & Lawns' }
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleNext = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-[#2C1810] text-[#FAF7F2] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#3E2419]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
            Visual Experience
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Resort Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#D8C7B6] max-w-2xl leading-relaxed font-light">
            Take a visual tour through our teak groves, handcrafted villas, sparkling swimming pool, lawn game arenas, and tranquil Bangalore countryside surroundings.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#5C3A21] text-[#FAF7F2] shadow-sm'
                  : 'bg-white text-[#5C4A3E] border border-[#E8DFC8] hover:border-[#D5C4AC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#24160E]/10 border border-[#E8DFC8] shadow-sm cursor-pointer"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <div className="text-xs font-semibold">{photo.title}</div>
                <div className="text-[11px] text-[#E8DFC8] line-clamp-1">{photo.caption}</div>
                <div className="mt-2 text-[10px] text-[#D4AF37] flex items-center gap-1 font-medium">
                  <Maximize2 className="w-3 h-3" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhotoIndex !== null && filteredPhotos[activePhotoIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            aria-label="Close photo viewer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredPhotos[activePhotoIndex].image}
              alt={filteredPhotos[activePhotoIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white">
              <h4 className="text-base font-serif font-bold text-[#D4AF37]">
                {filteredPhotos[activePhotoIndex].title}
              </h4>
              <p className="text-xs text-[#E8DFC8] mt-1">
                {filteredPhotos[activePhotoIndex].caption}
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};
