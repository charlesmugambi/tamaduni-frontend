import Image from 'next/image';
import { Articles } from '@/app/data/mockArticles';

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[#fef6dc] p-4 space-y-8">
      {Articles.map(({ id, title, body }) => (
        <article
          key={id}
          className="bg-white rounded-lg shadow p-6 max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-2xl font-semibold">{title}</h2>

          {/* Split the body on your {{image:filename}} markers */}
          {body
            .split(/(\{\{image:[^}]+\}\})/)
            .map((segment, i) => {
              const match = segment.match(/^\{\{image:(.+)\}\}$/);
              if (match) {
                const src = `/images/${match[1].trim()}`;
                return (
                  <div key={i} className="my-4">
                    <Image
                      src={src}
                      alt={title}
                      width={800}
                      height={400}
                      className="w-full object-cover rounded"
                    />
                  </div>
                );
              } else {
                // regular text
                return (
                  <p key={i} className="text-base leading-relaxed whitespace-pre-wrap">
                    {segment}
                  </p>
                );
              }
            })}
        </article>
      ))}
    </div>
  );
}