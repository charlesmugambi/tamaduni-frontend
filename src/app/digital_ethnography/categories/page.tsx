import type { Metadata } from "next";
import CategoryCard from "@/app/components/CategoryCard";
import { digitalEthnographyCategoriesList } from "../../data/digitalEthnography/ethnographyCategoryList";

export const metadata: Metadata = {
  title: "Browse Categories",
};

export default function CategoriesPage() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Left: Browse Categories */}
      <div className="lg:w-2/3">
        <h1 className="text-3xl font-bold mb-6">Browse categories</h1>
        <div className="space-y-6">
          {digitalEthnographyCategoriesList.map((category) => (
            <CategoryCard key={category.key} category={category} href= {`/digital_ethnography/${category.model}`}/>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Show More
          </button>
        </div>
      </div>

      {/* Right: Recent Discussions (static) */}
      <aside className="lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">Recent Discussions</h2>
        <div className="space-y-4">
          <div className="bg-yellow-200 p-4 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-800">
              Ugunza&apos;s voice is much more than a street food
            </p>
            <div className="mt-2 flex justify-between text-xs text-gray-600">
              <span>June 10, 2024</span>
              <span>29 comments</span>
            </div>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-800">
              Ugunza&apos;s voice is much more than a street food
            </p>
            <div className="mt-2 flex justify-between text-xs text-gray-600">
              <span>June 10, 2024</span>
              <span>29 comments</span>
            </div>
          </div>
          <div className="bg-yellow-200 p-4 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-800">
              There is much more than street food
            </p>
            <div className="mt-2 flex justify-between text-xs text-gray-600">
              <span>June 10, 2024</span>
              <span>29 comments</span>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}
