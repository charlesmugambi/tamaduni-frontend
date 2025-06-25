'use client'
import BrowseCard from "./browse-single-card";
import { useRouter } from "next/navigation";

const Categories = () => {
    const router = useRouter();
  const categoryCards = [
    {
      title: "Film giant sets up in Rusinga Island",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/flags/film.PNG",
    },
    {
      title: "Film giant sets up in Rusinga Island",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/flags/film.PNG",
    },
    {
      title: "Film giant sets up in Rusinga Island",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/flags/film.PNG",
    },
    {
      title: "Film giant sets up in Rusinga Island",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/flags/film.PNG",
    },
  ];
  
  const handleFilmProfesion=()=>{
      router.push("/film-professionals")
    console.log("jsbbdjs");
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {categoryCards.map((section, index) => (
        <BrowseCard
          key={index}
          afroTitle={section.title}
          afroDescription={section.description}
          afroImage={section.image}
          onClick={handleFilmProfesion}
        />
      ))}
    </div>
  );
};

export default Categories;
