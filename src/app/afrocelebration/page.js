'use client'
import React from 'react';
import TitleAfro from "./title-afro"
import AfricanFlagsCarousel from "../afrocelebration-comps/flags"
const AfroCelebrationPage = () => {
  return (
   <div>
    <div>
      <AfricanFlagsCarousel/>
    </div>
    <div className="bg-[#fffbe6] min-h-screen px-4 py-6">
       <TitleAfro/>
      {/* Description */}
      <div>
        <h3 className="text-2xl font-bold mb-1">Film Industry</h3>
          <p className='text-xl font-bold' >Synopsis</p>
          <p className="text-xl  leading-snug">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
   </div>
   </div>
  );
};

export default AfroCelebrationPage;