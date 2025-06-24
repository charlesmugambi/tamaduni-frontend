import { Category } from "../digital_ethnography/types/category";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
interface CategoryCardProps {
    category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="bg-cream-50 p-4 md:p-8">
      <div className="max-w-md mx-auto">
        

        <ul className="space-y-4">
            <li key={category.title}>
              <a
                href="#"
                className="flex items-center bg-yellow-300 hover:bg-yellow-400 rounded-lg overflow-hidden shadow"
              >
                <div className="flex-shrink-0 w-24 h-24 relative">
                  <Image
                    src={category.imageSrc}
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="px-4 flex-1">
                  <h2 className="text-base font-medium text-gray-900">
                    {category.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-700">
                    {category.description}
                  </p>
                </div>
                <div className="pr-4">
                  <ChevronRightIcon className="w-6 h-6 text-gray-900" />
                </div>
              </a>
            </li>
        </ul>
      </div>
    </div>
  );
  }
    

