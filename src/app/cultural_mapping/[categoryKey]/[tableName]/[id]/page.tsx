'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { culturalMappingConfig, CategoryConfig, TableConfig } from '../../../../data/cultural-mapping/cultural-mapping-category';

interface RawItem {
  [key: string]: any;
}

export default function DetailPage() {
  const params = useParams();
  const categoryKey = params.categoryKey as string;
  const tableName = params.tableName as string;
  const id = params.id as string;

  const [item, setItem] = useState<RawItem | null>(null);
  const [loading, setLoading] = useState(true);

  // Validate category and table from config
  const category: CategoryConfig | undefined = culturalMappingConfig.find(c => c.key === categoryKey);
  const table: TableConfig | undefined = category?.tables.find(t => t.key === tableName);

  useEffect(() => {
    if (!table || !id) return;
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/culturalmapping/${table.tableName}/${id}`)
      .then(res => res.json())
      .then(json => {
        setItem(json.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [table, id]);

  if (!category || !table) return <div className="p-4">Invalid category or table.</div>;
  if (loading) return <div className="p-4">Loading...</div>;
  if (!item) return <div className="p-4">Item not found.</div>;

  const bgColor = '#FFF8E1';
  const metadataKeys = ['id', 'entry_id', 'approved', 'creator', 'approver', 'approved_date', 'created_date'];
  const fields = Object.keys(item).filter(key => !metadataKeys.includes(key) && key !== 'media');

  return (
    <main className="min-h-screen p-6" style={{ backgroundColor: bgColor }}>
      {/* Title */}
      {item.title && <h1 className="text-3xl font-bold mb-4">{item.title}</h1>}

      {/* Placeholder icons */}
      <div className="flex gap-4 mb-6">
        <button aria-label="Download"><svg /></button>
        <button aria-label="Edit"><svg /></button>
      </div>

      {/* Description */}
      {item.description && (
        <p className="mb-6 text-base leading-relaxed">{item.description}</p>
      )}

      {/* Media */}
      {item.media && (
        <div className="w-full h-64 relative mb-6">
          <Image src={item.media} alt={item.title || ''} fill className="object-cover rounded" />
        </div>
      )}

      {/* Other Fields */}
      {fields.map(field => (
        <div key={field} className="mb-4">
          <h3 className="font-semibold capitalize">{field.replace(/_/g, ' ')}</h3>
          <p className="text-base leading-relaxed">{String(item[field] ?? '')}</p>
        </div>
      ))}

      {/* Footer */}
      <footer className="mt-8 text-sm text-gray-600">
        Last Edited: {new Date(item.created_date).toLocaleDateString()}
        <span className="ml-4 cursor-pointer">Audio ▶️</span>
        <span className="ml-4 cursor-pointer">Share ↗️</span>
      </footer>
    </main>
  );
}
