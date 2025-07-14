'use client'
import { civilizationCategoriesList } from "../../dat/africanCivilizationData";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AfricanKingdoms = () => {
  const router =useRouter()
  
  const handleCardClick = (id) => {
    router.push(`/african_civilization/african_kingdoms/${id}`)
  }
    return ( 
        <div className="mx-3 ">
            <div>
                <h1 className="font-bold text-2xl">Old Kingdom of Egypt</h1>
                <p className="text-xl my-3">Kingdom Summary</p>
                <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <main className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-semi-bold mb-6 ">Browse Categories</h1>
      
      <div className="space-y-4  mx-auto grid sm:grid-cols-2  gap-4">
        {civilizationCategoriesList.map((article, index) => (
          <div
            key={index}
            className="flex cursor-pointer bg-yellow-400 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            onClick={() => handleCardClick(article.id)}

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
              
              <div className="mt-1 text-black">
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
        </div>
     );
}
 
export default AfricanKingdoms;