import { useState, useEffect } from 'react';

export interface MigrationGroup {
  media: string | null;
  id: number;
  title: string;
  craft_specialization: string;
  year_created: string | null;
  craftsman_artisan: string | null;
  description: string | null;
  location: string | null;
  approved_date: string | null;
  entry_id: number;
  approved: boolean;
  creator: number;
  approver: number | null;
  created_date: string;
  group_name: string;
  synopsis: string;
}

export const useMigrationData = (page: number = 1) => {
  const [data, setData] = useState<MigrationGroup[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}mobility/Groups?page=${page}`);
        if (!isMounted) return;

        if (!res.ok) {
          setError(`Failed to fetch migration data: ${res.status} ${res.statusText}`);
          setData([]);
          return;
        }

        const json: MigrationGroup[] = await res.json();
        if (!isMounted) return;

        if (json.length === 0) {
          setError('Migration is currently empty.');
          setData([]);
        } else {
          setError(null);
          setData(json);
        }
      } catch (err) {
        if (!isMounted) return;
        setError(`Failed to fetch migration data: ${(err as Error).message}`);
        setData([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [page]);

  return { data, loading, error };
};