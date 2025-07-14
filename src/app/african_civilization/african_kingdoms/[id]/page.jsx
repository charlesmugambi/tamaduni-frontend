import { kingdomCategories } from "@/app/dat/africanCivilizationData";

export default function CivilizationCategory({ params }) {
  const { id } = params;

  const category = kingdomCategories.find((category) => category.id === id);

  if (!category) {
    return <p className="text-red-500">Category not found</p>;
  }

  return (
    <div className="mx-3">
      <h1 className="text-2xl font-bold mb-2">{category.title}</h1>
      <p className="text-lg">{category.body}</p>
    </div>
  );
}
