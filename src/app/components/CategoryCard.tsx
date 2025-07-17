import { Category } from "../digital_ethnography/types/category";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { link } from "fs";
interface CategoryCardProps {
    category: Category;
    href:string
}



export default function CategoryCard({ category, href }: CategoryCardProps) {
  return (
    <Link href= {href} passHref className="flex items-center bg-yellow-300 hover:bg-yellow-400 rounded-lg overflow-hidden shadow">
      <div className="flex-shrink-0 w-24 h-24 relative">
        <Image
          src={category.imageSrc}
          alt={category.label}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-4 flex-1">
        <h2 className="text-base font-medium text-gray-900">
          {category.label}
        </h2>
        <p className="mt-1 text-sm text-gray-700">
          {category.synopsis}
        </p>
      </div>
      <div className="pr-4">
        <ChevronRightIcon className="w-6 h-6 text-gray-900" />
      </div>
    </Link>
  );
}
