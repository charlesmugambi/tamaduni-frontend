'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useParticular } from '../../../hooks/useParticular';
import { ChevronRight } from 'lucide-react';

const fields: { key: keyof NonNullable<ReturnType<typeof useParticular>['data']>; label: string }[] = [
  { key: 'etymology', label: 'Etymology' },
  { key: 'history', label: 'History' },
  { key: 'governance', label: 'Governance' },
  { key: 'security_military', label: 'Security & Military' },
  { key: 'justice_legal_system', label: 'Justice & Legal System' },
  { key: 'religious_spiritual_practices', label: 'Religious & Spiritual Practices' },
  { key: 'other_cultural_practices', label: 'Other Cultural Practices' },
  { key: 'health_wellness', label: 'Health & Wellness' },
  { key: 'education_arts', label: 'Education & Arts' },
  { key: 'dietary_culinary_practices', label: 'Dietary & Culinary Practices' },
  { key: 'economy_commerce', label: 'Economy & Commerce' },
  { key: 'natural_resource_management', label: 'Natural Resource Management' },
  { key: 'architecture_construction', label: 'Architecture & Construction' },
  { key: 'social_relations', label: 'Social Relations' },
  { key: 'entertainment_recreation', label: 'Entertainment & Recreation' },
  { key: 'death_succession', label: 'Death & Succession' },
  { key: 'folklore', label: 'Folklore' },
  { key: 'language', label: 'Language' },
  { key: 'media', label: 'Media' },
];

export default function ParticularPage() {
  const params = useParams();
  const rawId = params.id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;
  const router = useRouter();
  const { data, isLoading, error } = useParticular(id);

  if (isLoading) return <p className="p-4">Loading details...</p>;
  if (error || !data) return <p className="p-4 text-red-500">{error?.message || 'No data found.'}</p>;

  return (
    <main className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">ID: {data.id}</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map(({ key, label }) => (
          <div
            key={String(key)}
            className="p-4 bg-white rounded-lg shadow hover:bg-gray-50 cursor-pointer"
            onClick={() => router.push(`/african_civilization/articles/${id}/${String(key)}`)}
          >
            <h2 className="text-lg font-semibold mb-2">{label}</h2>
            <p className="text-sm line-clamp-5">{(data[key] as string) || 'No content.'}</p>
            <div className="mt-2 text-right text-black">
              <ChevronRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
