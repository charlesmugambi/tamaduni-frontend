export interface CategoryButtonProps {
    categories: string[];
    onSelect?: (category: string) => void;
  }
  export const CategoryButtons: React.FC<CategoryButtonProps> = ({ categories, onSelect }) => (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg flex flex-wrap gap-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect?.(cat)}
          className="flex-1 min-w-[100px] bg-yellow-50 hover:bg-yellow-300 text-black font-semibold py-4 px-6 rounded-lg text-center"
        >
          {cat}
        </button>
      ))}
    </div>
  );
  