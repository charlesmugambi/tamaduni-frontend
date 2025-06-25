import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="max-w-2xl p-6 bg-gradient-to-b from-orange-50 to-amber-50 pt-10">
      <div className="relative w-72">
        {/* Icon must be z-10 and visible */}
        <Search className="absolute left-45 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 z-10" />

        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 bg-white/90 backdrop-blur-sm placeholder:text-center rounded-full  pr-4 text-sm placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-transparent shadow"
        />
      </div>
    </div>
  );
};

export default SearchBar;
