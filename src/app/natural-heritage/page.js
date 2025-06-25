import AfricanFlagsCarousel from "../afrocelebration-comps/flags";
import SearchBar from "../landing-comps/SearchBar";
import Map from "../cultural-mapping/map"
import NaturalBrowse from "./natural-browses"

const NaturalHeitage = () => {
    return ( 
        <div>
            <SearchBar/>
            <AfricanFlagsCarousel/>
             <Map/>
            <div>
                <p className="font-bold text-2xl ml-3.5 mb-1">Browse categories</p>
                <NaturalBrowse/>
            </div>
        </div>
     );
}
 
export default NaturalHeitage;