import { useState, useEffect } from 'react';

export interface Kingdom {
  id: number;
  name: string;
  region: string;
  period: string;
  founding_year: string | null;
  dissolution_year: string | null;
  emblem: string | null;
  media: string | null;
  // …plus any other metadata fields
}

export function useKingdomsData(page: number = 1) {
  const [kingdoms, setKingdoms] = useState<Kingdom[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}civilization/Kingdom?page=${page}`)
      .then(res => {
        if (!mounted) return;
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.json();
      })
      .then((data: Kingdom[]) => {
        if (!mounted) return;
        if (data.length === 0) {
          setError('No kingdoms found.');
          setKingdoms([]);
        } else {
          setKingdoms(data);
        }
      })
      .catch(err => {
        if (!mounted) return;
        setError(`Failed to load kingdoms: ${err.message}`);
        setKingdoms([]);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => { mounted = false; };
  }, [page]);

  return { kingdoms, loading, error };
}
