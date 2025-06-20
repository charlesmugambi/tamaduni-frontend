"use client";
import { Article } from "../digital_ethnography/types/article";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface ArticleCardProps {
    article: Article;
}



export default function ArticleCard({ article }: ArticleCardProps) {
 
  return (
    <div className="bg-cream-50 p-4 md:p-8">
      

      {/* Article List */}
      <ul  className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[368px]">
          <li key={article.title} className="w-[368px]  bg-[rgba(255,186,8,1)]">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 relative m-4">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="flex-1 pr-4">
                <h3 className="text-base font-semibold text-gray-900">
                  {article.title}
                </h3>
                <p className="mt-1 text-sm text-gray-800 leading-relaxed">
                  {article.description}{' '}
                  <Link className="underline font-medium" href="#">
                    see more
                  </Link>
                </p>
              </div>
            </div>
          </li>
      </ul>
    </div>
  );
    }