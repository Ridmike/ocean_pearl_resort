import { useState } from 'react';
import { GALLERY_DATA, type GalleryCategory } from '../data/GalleryData';
import Hero from '../components/gallery/Hero';

const CATEGORIES: GalleryCategory[] = ['ALL', 'ROOMS', 'DINING', 'SPA', 'EXTERIOR'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('ALL');

  const filteredImages = activeCategory === 'ALL' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(img => img.category === activeCategory);

  return (
    <div className=" min-h-screen bg-white">
      
      <Hero />
      
      {/* Filter Navigation */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-y border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] tracking-[0.3em] font-bold transition-all duration-300 relative pb-1 ${
                  activeCategory === cat 
                    ? 'text-[#a48e60]' 
                    : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#a48e60]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((item) => (
              <div 
                key={item.id} 
                className="relative group overflow-hidden bg-gray-100 break-inside-avoid rounded-sm shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[#a48e60] text-[10px] tracking-widest font-bold mb-2 uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-serif translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Note */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif italic mb-8">"Every corner of Ocean Pearl tells a story of elegance and heritage."</h2>
          <button className="bg-transparent border border-white px-10 py-4 text-[10px] tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-300">
            FOLLOW US @OCEANPEARL
          </button>
        </div>
      </section>
    </div>
  );
}
