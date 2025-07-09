
'use client';
import React from "react";
import Image from "next/image";
import cards from "../dat/landingPageData";
import { useRouter } from "next/navigation";

const CardItem = () => {
    const router =useRouter()
    const routeMap = {
      "Afro Celebration": "/afrocelebration",
      "Cultural Mapping":"cultural_mapping",
      "Digital ethnography":"/digital_ethnography",
      "Migration":"/migration",
      "Civilization":"/african_civilization"
    };
    
    const handleClick = (title) => {
      const route = routeMap[title];
      if (route) {
        router.push(route);
      }else{
        console.log("page not found");
      }
    };
    
  return (
    <div className="px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-500 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          onClick={()=>handleClick(card.title)}
        >
          {/* Image Section */}
          <div className="relative h-40 w-full">
            {card.image ? (
              <Image
                src={card.image}
                alt={card.title}
               fill
                className="object-contain mt-3 rounded-2xl m-auto"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-80 text-center px-2">
                  {card.title}
                </span>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="px-4 py-3">
            <h3 className="text-md font-bold text-gray-800 mb-1">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 leading-snug">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
