"use client"
import Image from "next/image";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { afroCategoriesList } from "@/app/dat/afroCelebrationData";

export default function FilmProfessional({ params }) {
  const { id } = params;
  const film = afroCategoriesList.find((film) => film.id === id);
console.log(film);
  const [expandedSections, setExpandedSections] = useState({
    biography: false,
    filmography: false,
    awards: false,
    location: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const menuItems = [
    { id: 'biography', label: 'Biography', content: film?.biography },
    { id: 'filmography', label: 'Filmography', content: film?.filmography },
    { id: 'awards', label: 'Awards', content: film?.awards },
    { id: 'location', label: 'Location', content: film?.location },
  ];

  if (!film) {
    return <div className="p-6 text-red-500 text-center font-semibold">Film profile not found.</div>;
  }

  return (
    <div className="text-lg m-auto w-11/12">
      <h1 className="underline text-2xl font-bold mb-2">{film.title}</h1>

      <p className="mb-4">{film.description || "No introductory content provided."}</p>

      {film.image && (
        <Image
          src={film.image}
          width={400}
          height={200}
          alt={film.title || "Film image"}
          className={film.image.className || "mx-auto rounded-lg object-cover"}
        />
      )}

      <div className="p-4 mt-6 border-t">
        {menuItems.map((item) => (
          <div key={item.id} className="border-b border-gray-300">
            <button
              onClick={() => toggleSection(item.id)}
              className="w-full flex items-center justify-between px-3 py-2 text-left transition-colors duration-200"
            >
              <span className="font-bold text-lg">{item.label}</span>
              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  expandedSections[item.id] ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            {expandedSections[item.id] && (
              <div className="px-3 py-2 text-base text-gray-700">
                {item.content ? item.content : <em>Content not available.</em>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
