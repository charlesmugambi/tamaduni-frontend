import { Category } from "../digital_ethnography/types/category";
import Image from "next/image";
import Link from "next/link";
interface CategoryCardProps {
    category: Category;
    href:string
}



export default function CategoryCard({ category, href }: CategoryCardProps) {
  return (
    <article className="bg-yellow-400 rounded-lg border-4 overflow-hidden shadow-lg">
      <Link href={href} className="block">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Text column (left on lg) */}
          <div className="flex-1 p-6 lg:pr-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-black">
              {category.label}
            </h3>

            <p className="text-base lg:text-lg leading-relaxed text-black/90">
              {category.synopsis}
              <span className="ml-1 text-blue-700 underline">see more</span>
            </p>
          </div>

          {/* Image column (right on lg) */}
          <div className="w-full lg:w-56 xl:w-64 h-56 lg:h-auto relative flex-shrink-0">
            <Image
              src={category.imageSrc}
              alt={category.label}
              fill
              sizes="(min-width:1024px) 256px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
