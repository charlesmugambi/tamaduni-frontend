'use client';
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const SingleBrowse = ({ afroTitle, afroDescription, afroImage, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer bg-yellow-400 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      {/* Image Section */}
      <div className="w-24 h-24 relative">
        {afroImage ? (
          <Image
            src={afroImage}
            alt={afroTitle}
            fill
            className="object-cover p-2"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
            <span className="text-white text-xs font-semibold opacity-80 text-center p-2">
              {afroTitle}
            </span>
          </div>
        )}
      </div>

      {/* Text Section */}
      <div className="flex-1 flex justify-between items-start px-4 py-2 gap-3">
        <div className="flex-1">
          <h3 className="text-sm font-bold text-black mb-1 leading-tight">
            {afroTitle}
          </h3>
          <p className="text-xs text-black leading-snug">
            {afroDescription}
          </p>
        </div>

        <div className="mt-1 text-black">
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default SingleBrowse;
