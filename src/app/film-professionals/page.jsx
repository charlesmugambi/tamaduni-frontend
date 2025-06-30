'use client'
import Image from "next/image";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const FilmProfesional = () => {
    const [expandedSections, setExpandedSections] = useState({
        biography: false,
        filmography: false,
        awards: false,
        location: false
      });
    
      const toggleSection = (section) => {
        setExpandedSections(prev => ({
          ...prev,
          [section]: !prev[section]
        }));
      };
    
      const menuItems = [
        { id: 'biography', label: 'Biography' },
        { id: 'filmography', label: 'Filmography' },
        { id: 'awards', label: 'Awards' },
        { id: 'location', label: 'Location' }
      ];
    
    return ( 
        <div>
        <div className="text-lg m-auto w-11/12">
            <p className="underline text-xl font-bold">Film giant sets up in Rusinga Island</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <Image
  src="/masaai.PNG"
  width={400}
  height={200}
  alt="masaai people"
  className="mx-auto rounded-lg object-cover"
/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
         <div>
           
      <div className="p-4">
        {menuItems.map((item) => (
          <div key={item.id} className="border-b border-grey">
            <button
              onClick={() => toggleSection(item.id)}
              className="w-full flex items-center px-3 py-2 text-left  transition-colors duration-200"
            >
              <ChevronDown 
                className={`w-5 h-5 text-lg font-bold mr-2 transform transition-transform duration-200 ${
                  expandedSections[item.id] ? 'rotate-180' : 'rotate-0'
                }`} 
              />
              <span className="font-bold text-lg">{item.label}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
     </div>
     </div>

       
     );
}
 
export default FilmProfesional;