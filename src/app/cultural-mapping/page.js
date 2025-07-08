'use client'
import AfricanFlagsCarousel from "../afrocelebration-comps/flags";
import SearchBar from "../landing-comps/SearchBar";
import Map from "./map"
import CulturalMap from "../components/culturalMap";

const Cultural = () => {
   
    return ( 
        <div className="">
            <SearchBar/>
            <AfricanFlagsCarousel/>
            {/* <Map/> */}
            <CulturalMap/>
            <div className="m-9">
                <p className="font-bold text-4xl mb-2">Natural Heritage</p>
                <p className="font-semibold text-2xl mb-2">Synopsis</p>
                <p className="text-xl  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.</p>
             </div>
        </div>
       
     );
}
 
export default Cultural;