'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useDriversData } from '../../hooks/useDriversData';

const Articles: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { drivers, loading, error } = useDriversData(page);

  return (
    <main className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">Migration Articles</h1>

      {loading && <p>Loading articles...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {!loading && !error && (
        <div className="grid gap-4 sm:grid-cols-2">
          {drivers.map((article) => (
            <Link
            key={article.id}
            href={`/migration/articles/${article.id}`}
            className="flex cursor-pointer bg-yellow-400 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
          >
              {/* Media Section */}
              <div className="w-24 h-24 relative">
                {article.media ? (
                  <Image
                    src={article.media}
                    alt={article.driver_name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold opacity-80 text-center p-2">
                      {article.driver_name}
                    </span>
                  </div>
                )}
              </div>

              {/* Text Section */}
              <div className="flex-1 flex justify-between items-start px-4 py-2 gap-3">
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-black mb-1 leading-tight">
                    {article.driver_name}
                  </h3>
                  <p className="text-xs text-black leading-snug">
                    {article.description}
                  </p>
                </div>
                <div className="mt-3 text-black">
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {!loading && !error && (
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="flex items-center">Page {page}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
};

export default Articles;
