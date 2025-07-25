// app/african_civilization/african_kingdoms/page.jsx
'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { fetchCivilizationCategories } from "../../lib/apis";

const AfricanKingdoms = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCivilizationCategories();
        setCategories(data);
      } catch (err) {
        setError("Failed to load categories. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  const handleCardClick = (title) => {
    const slug = encodeURIComponent(title.replace(/\s+/g, "_"));
    router.push(`/african_civilization/african_kingdoms/categories/${slug}`);
  };

  return (
    <div className="mx-3">
      <section className="mb-8">
        <h1 className="font-bold text-2xl">Old Kingdom of Egypt</h1>
        <p className="text-xl my-3">Kingdom Summary</p>
        <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </p>
      </section>

      <main className="min-h-screen p-4 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6">Browse Categories</h2>

        {loading && <p className="text-blue-500">Loading categories...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid sm:grid-cols-2 gap-4">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex bg-yellow-400 rounded-md overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => handleCardClick(item.title)}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-orange-500 text-white text-xs font-bold">
                {item.title}
              </div>
              <div className="flex-1 flex justify-between items-start px-4 py-2 gap-3">
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-black mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-black">{item.description}</p>
                  <p className="text-xs text-gray-800 mt-1">Entries: {item.count}</p>
                </div>
                <ChevronRight size={16} className="mt-1 text-black" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AfricanKingdoms;