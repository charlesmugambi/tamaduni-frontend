'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useMigrationData, MigrationGroup } from '../hooks/useMigrationData';
import { Timeline } from '../components/Timeline';
import {MapWrapper} from '../components/mapWrapper'


const Migration: React.FC = () => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const { data, loading, error } = useMigrationData(page);

  const categories: string[] = data.map((group) => group.group_name);
  const handleCategorySelect = (_cat: string) => {
    router.push('/migration/articles');
  };
  return (
    <div className="mx-10">
      <Timeline/>
      <div className="h-64 w-full mb-8">
        <MapWrapper
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
      </div>
      <h1 className="font-bold text-lg">Timeline Synopsis</h1>
      <h2 className="my-4">3000-3500 BCE</h2>
      <p className="mb-6">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      <h1 className="font-bold text-lg my-4">Bantu</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <>
          {data.map((group: MigrationGroup) => (
            <div key={group.id} className="mb-6">
              {group.media && <Image src={group.media} alt={group.group_name} className="mb-2" />}
              <h2 className="font-semibold text-xl">{group.group_name}</h2>
              <p>{group.synopsis}</p>
            </div>
          ))}

          {/* Pagination Controls */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>Page {page}</span>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Migration;

