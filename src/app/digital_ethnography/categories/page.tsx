import type { Metadata } from "next";
import CategoryCard from "@/app/components/CategoryCard";
import { mockCategories } from "@/app/data/mockCategories";

export const metadata: Metadata = {
  title: "Browse Categories",
};

export default function CategoriesPage() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}