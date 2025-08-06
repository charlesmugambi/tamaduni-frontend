'use client';
import Image from "next/image";
import  { categoryCards } from "../../dat/culturalMappingData"
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NaturalBrowse () {
  const router =useRouter()
    const routeMap = {
      "Museums": "/cultural_mapping/natural-heritage/karen-blixen-museum",
      "Cultural Mapping":"cultural_mapping",
      "Digital ethnography":"/digital_ethnography",
      "Migration":"/migration",
      "Civilization":"/civilization"
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
    <main className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-semi-bold mb-6 ">Migration Articles</h1>
      
      <div className="space-y-4  mx-auto grid sm:grid-cols-2  gap-4">
        {categoryCards.map((article, index) => (
          <div
            key={index}
            className="flex cursor-pointer bg-yellow-400 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            onClick={()=>{handleClick(article.title)}}
          >
            {/* Image Section */}
            <div className="w-24 h-24 relative ">
              {article.image ? (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover p-2"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-white text-2xs font-semibold opacity-80 text-center p-2">
                    {article.title}
                  </span>
                </div>
              )}
            </div>
            
            {/* Text Section */}
            <div className="flex-1 flex justify-between items-start px-4 py-2 gap-3">
              <div className="flex-1">
                <h3 className="text-sm font-bold text-black mb-1 leading-tight">
                  {article.title}
                </h3>
                <p className="text-xs text-black leading-snug">
                  {article.description}
                </p>
              </div>
              
              <div className="mt-3  text-black">
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}