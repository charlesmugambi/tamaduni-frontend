import { useState, useEffect } from 'react';

export interface DriverArticle {
  media: string | null;
  id: number;
  driver_name: string;
  description: string;
  created_date: string;
}

export const useDriversData = (page: number = 1) => {
  const [drivers, setDrivers] = useState<DriverArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}mobility/Drivers?page=${page}`);
        if (!isMounted) return;
        if (!res.ok) {
          setError(`Failed to fetch articles: ${res.status} ${res.statusText}`);
          setDrivers([]);
          return;
        }
        const json: DriverArticle[] = await res.json();
        if (!isMounted) return;
        if (json.length === 0) {
          setError('No articles found.');
          setDrivers([]);
        } else {
          setError(null);
          setDrivers(json);
        }
      } catch (err) {
        if (!isMounted) return;
        setError(`Failed to fetch articles: ${(err as Error).message}`);
        setDrivers([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => { isMounted = false; };
  }, [page]);

  return { drivers, loading, error };
};