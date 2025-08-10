'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface BrowseItem {
  id: number;
  tableName: string;
  [key: string]: any;
}

interface NaturalBrowseProps {
  items: BrowseItem[];
  // previewFields per table; keyed by tableName
  previewFieldsMap: Record<string, string[]>;
  categoryKey: string;
}

export default function NaturalBrowse({ items, previewFieldsMap, categoryKey }: NaturalBrowseProps) {
  const router = useRouter();

  return (
    <main className="min-h-screen p-4 bg-yellow-50">
      <div className="space-y-4 mx-auto grid sm:grid-cols-2 gap-4">
        {items.map((item) => {
          const { tableName } = item;
          const fields = previewFieldsMap[tableName] || [];
          const hasMedia = fields.includes('media') && item.media;
          
          return (
            <div
              key={`${tableName}-${item.id}`}
              className="flex cursor-pointer bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
              onClick={() => router.push(
                `/culturalmapping/${categoryKey}/${tableName}/${item.id}`
              )}
            >
              {/* Media Preview */}
              {hasMedia && (
                <div className="w-24 h-24 relative">
                  <Image
                    src={item.media}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Other preview fields */}
              <div className="flex-1 px-4 py-2 flex flex-col justify-between">
                {fields.filter(f => f !== 'media').map((field) => (
                  <p key={field} className="text-sm text-gray-800 truncate">
                    <span className="font-bold">
                      {field.replace(/_/g, ' ')}: 
                    </span>
                    {String(item[field] ?? '')}
                  </p>
                ))}
                <div className="self-end mt-2 text-gray-500">
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}