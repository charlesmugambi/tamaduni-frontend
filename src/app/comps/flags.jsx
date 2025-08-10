'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const flags = [
  {
    name: 'Kenya',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/ke.svg'
  },
  {
    name: 'Cameroon',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/cm.svg'
  },
  {
    name: 'Ghana',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/gh.svg'
  },
  {
    name: 'Bahamas',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/bs.svg'
  },
  {
    name: 'Bolivia',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/bo.svg'
  },
  {
    name: 'Nigeria',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/ng.svg'
  },
  {
    name: 'South Africa',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/za.svg'
  },
  {
    name: 'Ethiopia',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/et.svg'
  },
  {
    name: 'Morocco',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/ma.svg'
  },
  {
    name: 'Egypt',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/eg.svg'
  },
  {
    name: 'Tanzania',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/tz.svg'
  },
  {
    name: 'Uganda',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/ug.svg'
  },
  {
    name: 'Algeria',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/dz.svg'
  },
  {
    name: 'Tunisia',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/tn.svg'
  },
  {
    name: 'Senegal',
    image: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.6.6/flags/4x3/sn.svg'
  }
];

export default function AfricanFlagsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % flags.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + flags.length) % flags.length);
  };

  const getVisibleFlags = () => {
    const visible = [];
    const flagCount = isMobile ? 3 : 5; // Exactly 3 on mobile, 5 on desktop
    
    for (let i = 0; i < flagCount; i++) {
      const index = (currentIndex + i) % flags.length;
      visible.push(flags[index]);
    }
    return visible;
  };

  return (
    <div className="w-full  py-8 px-4">
      <div className="flex items-center justify-center max-w-2xl mx-auto">
        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="p-2 text-gray-600 hover:text-gray-800 transition-colors flex-shrink-0 z-10"
          aria-label="Previous flags"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Flags Container */}
        <div className="flex items-center justify-center gap-4 md:gap-6 flex-1 px-4">
          {getVisibleFlags().map((flag, index) => (
            <div 
              key={`${flag.name}-${currentIndex}-${index}`} 
              className="transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg border-2 border-white/50 hover:shadow-xl transition-shadow">
                <img 
                  src={flag.image} 
                  alt={`${flag.name} flag`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="p-2 text-gray-600 hover:text-gray-800 transition-colors flex-shrink-0 z-10"
          aria-label="Next flags"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}