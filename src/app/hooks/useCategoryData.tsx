import { useState, useEffect } from 'react';
import { TableConfig } from '../data/cultural-mapping/cultural-mapping-category';

interface RawItem { [key: string]: any; }

export function useCategoryData(tables: TableConfig[]) {
  const [items, setItems] = useState<RawItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let canceled = false;
    setLoading(true);

    Promise.all(
      tables.map(t =>
        fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/culturalmapping/${t.key}?page=1`
        )
          .then(r => r.json())
          .then(j =>
            // annotate each item with its source tableName
            (j.data as RawItem[]).map(item => ({ ...item, tableName: t.key }))
          )
      )
    )
      .then(pages => {
        if (!canceled) {
          setItems(pages.flat());
          setLoading(false);
        }
      })
      .catch(() => {
        if (!canceled) setLoading(false);
      });

    return () => {
      canceled = true;
    };
  }, [tables]);

  return { items, loading };
}
