'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface DriverArticle {
  media: string | null;
  id: number;
  driver_name: string;
  description: string;
  created_date: string;
}

const Article: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState<DriverArticle | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    let isMounted = true;
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.BASE_URL}/mobility/Drivers/${id}`);
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const json: DriverArticle = await res.json();
        if (isMounted) setArticle(json);
      } catch (err) {
        if (isMounted) setError(`Failed to load article: ${(err as Error).message}`);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchArticle();
    return () => { isMounted = false; };
  }, [id]);

  if (loading) return <p className="p-4">Loading article...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;
  if (!article) return <p className="p-4">No article found.</p>;

  return (
    <div className="mx-4">
      <h1 className="font-bold text-2xl my-3">{article.driver_name}</h1>
      {article.media && (
        <div className="w-full h-64 relative mb-4">
          <Image src={article.media} alt={article.driver_name} fill className="object-cover rounded" />
        </div>
      )}
      <p className="text-lg mb-4">{article.description}</p>
    </div>
  );
};

export default Article;