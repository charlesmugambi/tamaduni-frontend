'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useKingdomsData, Kingdom } from '../hooks/useKingdomsData';
import { MapWrapper } from '../components/mapWrapper';
import { Timeline } from '../components/Timeline';


export default function Civilization() {
  const router = useRouter();
  const [page] = useState(1);
  const { kingdoms, loading, error } = useKingdomsData(page);

  return (
    <div className="mx-5">
      <Timeline/>
      <div className="h-64 w-full mb-8">
        <MapWrapper
        />
      </div>
      <h1 className="font-bold text-3xl my-3">Kingdom Nation States</h1>

      {loading && <p>Loading kingdoms...</p>}
      {error   && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="space-y-2">
          {kingdoms.map((k: Kingdom) => (
            <div
              key={k.id}
              className="p-4 bg-white rounded shadow hover:bg-gray-50 cursor-pointer flex justify-between items-center"
              onClick={() => router.push('/african_civilization/paticular/${k.id}')}
            >
              {/* Name */}
              <span className="text-lg font-semibold">{k.name}</span>
              {/* Founding – Dissolution */}
              <span className="text-sm text-gray-600">
                {k.founding_year || 'Unknown'} – {k.dissolution_year || 'Unknown'}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
