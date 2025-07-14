'use client';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { afroCategoriesList } from "../dat/afroCelebrationData";

const AfroCategories = () => {
  const router = useRouter();

  const handleFilmProfession = (id) => {
    router.push(`/afrocelebration/afro-film/${id}`);
    console.log("jdjd");
  };

  return ( 
    <main className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">Browse Categories</h1>

      <div className="grid sm:grid-cols-2 gap-4 mx-auto">
        {afroCategoriesList.map((category, index) => (
          <div
            key={index}
            onClick={() => handleFilmProfession(category.id)} 
            className="flex cursor-pointer bg-yellow-400 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            {/* Image Section */}
            <div className="w-24 h-24 relative">
              {category.image ? (
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover p-2"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold opacity-80 text-center p-2">
                    {category.title}
                  </span>
                </div>
              )}
            </div>

            {/* Text Section */}
            <div className="flex-1 flex justify-between items-start px-4 py-2 gap-3">
              <div className="flex-1">
                <h3 className="text-sm font-bold text-black mb-1 leading-tight">
                  {category.title}
                </h3>
                <p className="text-xs text-black leading-snug">
                  {category.description}
                </p>
              </div>

              <div className="mt-1 text-black">
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AfroCategories;
