'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { migrationArticles } from "../../dat/migrationData";
import { ChevronRight } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/migration/articles/${id}`);
  };

  return (
    <main className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">Migration Articles</h1>

      <div className="grid sm:grid-cols-2 gap-4 mx-auto">
        {migrationArticles.map((article, index) => (
          <div
            key={index}
            onClick={() => handleClick(article.id)}
            className="flex cursor-pointer bg-yellow-400 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            {/* Image Section */}
            <div className="w-24 h-24 relative">
              {article.image ? (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover p-2"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold opacity-80 text-center p-2">
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
                  {article.body}
                </p>
              </div>
              <div className="mt-3 text-black">
                <ChevronRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
