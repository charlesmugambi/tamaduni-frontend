'use client'
import SingleBrowse from "./single-browse";
import { useRouter } from "next/navigation";

const NaturalBrowse = () => {
    const router = useRouter();
  const categoryCards = [
    {
      title: "Museums",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/flags/film.PNG",
    },
    {
      title: "Historical plaques",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/flags/film.PNG",
    },
    {
      title: "Historical Monuments",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/flags/film.PNG",
    },
    {
      title: "Public Art & Murals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/flags/film.PNG",
    },
  ];
  
  const handleNaturalMuseum=()=>{
      router.push("/museum")
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {categoryCards.map((section, index) => (
        <SingleBrowse
          key={index}
          afroTitle={section.title}
          afroDescription={section.description}
          afroImage={section.image}
          onClick={handleNaturalMuseum}
        />
      ))}
    </div>
  );
};

export default NaturalBrowse;
