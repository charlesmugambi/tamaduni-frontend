'use client'
import TitleAfro from "../afrocelebration/title-afro";
import Categories from "../afrocelebration-comps/browse-categories"; // or the correct path
import AfricanFlagsCarousel from "../afrocelebration-comps/flags";

const Film = () => {
  return (
    <div className="space-y-6 p-4">
      <AfricanFlagsCarousel/>
      <TitleAfro />
      <div className="flex overflow-x-auto whitespace-nowrap p-1 font-semibold space-x-2 scrollbar-hide sm:justify-center">
        <p className="bg-amber-400 p-2 rounded-lg shrink-0">Film Professionals</p>
        <p className="bg-gray-100 p-2 rounded-lg shrink-0">Films</p>
        <p className="bg-gray-100 p-2 rounded-lg shrink-0">Film Festivals</p>
        <p className="bg-gray-100 p-2 rounded-lg shrink-0">Film Schools</p>
    </div>
      <p className="text-xl font-bold mt-4">Browse Categories</p>
      <div>
      <Categories />

      </div>
    </div>
  );
};

export default Film;
