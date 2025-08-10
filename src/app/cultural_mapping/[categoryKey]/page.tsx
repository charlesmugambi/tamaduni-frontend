'use client';

import { useParams } from 'next/navigation';
import { culturalMappingConfig } from '../../data/cultural-mapping/cultural-mapping-category';
import { useCategoryData } from '../../hooks/useCategoryData';
import CulturalMap from '../../components/culturalMap';
import NaturalBrowse from '../../components/NaturalBrowses';
import AfricanFlagsCarousel from '../../comps/flags';

export default function CategoryPage() {
  // ✅ Get the dynamic route param
  const params = useParams() as { categoryKey: string };
  const categoryKey = params.categoryKey;

  // ✅ Find category config from key
  const category = culturalMappingConfig.find((c) => c.key === categoryKey);

  // ✅ Fetch all data for tables in this category
  const { items, loading } = useCategoryData(category?.tables || []);

  if (!category) return <p>Category not found</p>;
  if (loading) return <p>Loading…</p>;

  // ✅ Build previewFieldsMap { tableName: [fields...] }
  const previewFieldsMap = Object.fromEntries(
    category.tables.map((t) => [t.tableName, t.previewFields])
  );

  // ✅ Convert raw API data into consistent shape
  const transformedItems = items.flatMap((item) => {
    const fields = previewFieldsMap[item.tableName] || [];
    const data = Object.fromEntries(fields.map((f) => [f, item[f]]));
    return {
      id: item.id,
      tableName: item.tableName,
      ...data,
    };
  });

  return (
    <div>
      <AfricanFlagsCarousel />
      {/* Map still uses raw items */}
      <CulturalMap items={items} categoryKey={categoryKey} />
      <div className="bg-yellow-50" >
        <p className="font-bold text-2xl ml-3.5 mb-1">Browse categories</p>
        {/* ✅ FIXED: use correct variable (categoryKey) */}
        <NaturalBrowse
          items={transformedItems}
          previewFieldsMap={previewFieldsMap}
          categoryKey={categoryKey}
        />
      </div>
    </div>
  );
}
