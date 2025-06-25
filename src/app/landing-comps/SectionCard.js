'use client'
import React from "react";
import CardItem from "./SingleCard";

import { useRouter } from "next/navigation";


const SectionCard = () => {
    const router = useRouter();
    const cards=[
        {
            title:"Afro Celebration",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            image:"/afro.PNG"
        }, 
        {
            title:"Cultural Mapping",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            image:"/cultural.PNG"
        },
         {
            title:"Digital ethnography",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            image:"/digital.PNG"
        },
         {
            title:"Migration",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            image:"/migration.PNG"
        },
         {
            title:"Civilization",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            image:"/civilization.png"
        }
    ];
    const handleCardClick = (title)=>{
        if (title ==="Afro Celebration") {
          router.push('/afrocelebration')
        }else if(title === "Cultural Mapping"){
            router.push("/cultural-mapping")
        }
    }
    return ( 
        <div>
            <h2 className="font-bold mr-2.5 text-2xl p-2.5">Explore</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {cards.map((section, index) => (
            <CardItem
              key={index}
              title={section.title}
              description={section.description}
              image={section.image}
              onClick={() => handleCardClick(section.title)}
            />
          ))}
        </div>
      
        </div>
      
    )
}
 
export default SectionCard;