'use client';

import { useParams } from 'next/navigation';
import { detailedArticles } from '../../../dat/migrationData';

export default function ArticlePage() {
  const params = useParams();
  const { id } = params;

  const article = detailedArticles.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-500">Article Not Found</h1>
      </div>
    );
  }

  return (
    <div className="mx-4">
      <h1 className="font-bold text-2xl my-3">{article.title}</h1>
      <p><span className="font-semibold text-lg">Group: </span>{article.group}</p>
      <p className="my-3">
        <span className="font-semibold text-lg">Period: </span>{article.period}
      </p>
      {article.content.map((paragraph, index) => (
        <p key={index} className="text-lg mb-4">{paragraph}</p>
      ))}
    </div>
  );
}
