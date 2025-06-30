'use client'
import React from "react";
import Image from "next/image";

const CardItem = ({ title, description, image, onClick }) => {
  return (
    <div>
       <div className="px-3">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6 border border-gray-500"
             onClick={onClick}
      >
        {/* Image Section */}
        <div className="relative h-40 w-full">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
            
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <span className="text-white text-lg font-semibold opacity-80">
                {title}
              </span>
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="px-4 py-3">
          <h3 className="text-md font-bold text-gray-800 mb-1">{title}</h3>
          <p className="text-md text-gray-600 leading-snug">
            {description}
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default CardItem;
