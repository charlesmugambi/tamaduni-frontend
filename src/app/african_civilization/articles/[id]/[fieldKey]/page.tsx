'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image'
import { ParticularData, useParticular } from '../../../../hooks/useParticular';

const labels:  Record<keyof ParticularData, string> = {
  etymology: 'Etymology',
  history: 'History',
  governance: 'Governance',
  security_military: 'Security & Military',
  justice_legal_system: 'Justice & Legal System',
  religious_spiritual_practices: 'Religious & Spiritual Practices',
  other_cultural_practices: 'Other Cultural Practices',
  health_wellness: 'Health & Wellness',
  education_arts: 'Education & Arts',
  dietary_culinary_practices: 'Dietary & Culinary Practices',
  economy_commerce: 'Economy & Commerce',
  natural_resource_management: 'Natural Resource Management',
  architecture_construction: 'Architecture & Construction',
  social_relations: 'Social Relations',
  entertainment_recreation: 'Entertainment & Recreation',
  death_succession: 'Death & Succession',
  folklore: 'Folklore',
  language: 'Language',
  media: 'Media',
  id: ''
};

export default function ArticleFieldPage() {
  const params = useParams();
  const rawId = params.id;
  const rawField = params.fieldKey;

  const id = Array.isArray(rawId) ? rawId[0] : rawId;
  const fieldKeyRaw = Array.isArray(rawField) ? rawField[0] : rawField;


  const { data, isLoading, error } = useParticular(id?? '');
  if (!fieldKeyRaw || !(fieldKeyRaw in labels)) {
    return <p className="p-4 text-red-500">Invalid section key.</p>;
  }
  const fieldKey = fieldKeyRaw as keyof ParticularData;
 

  if (isLoading) return <p className="p-4">Loading content…</p>;
  if (error || !data) return <p className="p-4 text-red-500">{error?.message || 'No content.'}</p>;

  const content = data[fieldKey] as string | undefined;
  const label = labels[fieldKey];


  return (
    <main className="min-h-screen bg-white">
      {data.media && (
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <Image
            src={data.media}
            alt={label}
            className="object-cover w-full h-full"
            fill
          />
        </div>
      )}
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">{label}</h1>
        <p className="text-lg leading-relaxed whitespace-pre-line">
          {content || 'No content available.'}
        </p>
      </div>
    </main>
  );
}
