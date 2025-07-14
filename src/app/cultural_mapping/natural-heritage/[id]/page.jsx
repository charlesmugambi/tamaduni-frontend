
import Image from "next/image";
import CulturalCategories from "../../../comps/culturalCategories";
import natural from "../../../dat/naturalHeritage";

export default async function Category({ params }) {
  const { id } = await params;

  // Find the matching museum item by id
  const museum = natural.find((item) => item.id === id);

  if (!museum) {
    return <p className="text-center text-red-500 mt-10">Museum not found.</p>;
  }

  return (
    <div className={museum.className}>
      <CulturalCategories />
      
      <p className="text-2xl font-bold mb-4">{museum.title}</p>

      {museum.paragraphs?.map((text, index) => (
        <p key={index} className="mb-4">{text}</p>
      ))}

      {museum.image && (
        <Image
          src={museum.image.src}
          width={museum.image.width}
          height={museum.image.height}
          alt={museum.image.alt}
          className={museum.image.className}
        />
      )}
    </div>
  );
}
