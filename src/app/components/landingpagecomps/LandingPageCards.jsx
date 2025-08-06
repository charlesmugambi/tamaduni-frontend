
'use client';
import React from "react";
import Image from "next/image";
import cards from "../../data/landingpage/landingPageData";
import { useRouter } from "next/navigation";

const CardItem = () => {
  const router = useRouter();

  const routeMap = {
    "Afro Celebration": "/afrocelebration",
    "Cultural Mapping": "/cultural_mapping",
    "Digital ethnography": "/digital_ethnography",
    "Migration": "/migration",
    "Civilization": "/african_civilization"
  };

  const handleClick = (title) => {
    const route = routeMap[title];
    if (route) {
      router.push(route);
    } else {
      console.warn(`No route defined for title: "${title}"`);
    }
  };

  return (
    <div className="px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow border border-gray-300 hover:shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-1 cursor-pointer"
          onClick={() => handleClick(card.title)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleClick(card.title)}
        >
          {/* Image Section */}
          <div className="relative h-48 w-full bg-gray-100">
            {card.image ? (
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover rounded-t-2xl"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500">
                <span className="text-white text-lg font-semibold text-center px-4">
                  {card.title}
                </span>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="px-5 py-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-3">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
