"use client"
import type { Metadata } from "next";
import ArticleCard from "@/app/components/aricleCard";
import { mockArticles } from "@/app/data/mockArticlesList";
import { useState } from "react";
// export const metadata: Metadata = {
//   title: "Articles",
// };
const tabs = [
  'Architectural Styles',
  'Media',
  'Building techniques',
  'Other',
];
export default function ArticlesPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">List of Articles</h1>
      {/* Tabs Scroll Bar */}
      <div className="w-full  h-[50px] overflow-x-auto overflow-y-hidden flex gap-[2px] scroll-pl-4">
        {tabs.map(tab => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 w-[199px] h-[35px] px-6 py-2 whitespace-nowrap justify-center items-center flex text-sm font-medium
                ${isActive 
                  ? 'bg-[rgba(255,186,8,1)] text-gray-900 rounded-[48px]' 
                  : ' text-gray-700 rounded-none'}`}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}