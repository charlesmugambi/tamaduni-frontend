import CulturalCategories  from "../../comps/culturalCategories"
import NaturalBrowse from "../../comps/NaturalBrowses"
import AfricanFlagsCarousel from "../../comps/flags";

const NaturalHeitage = () => {
    return ( 
        <div>
            <AfricanFlagsCarousel/>
            <CulturalCategories/>
            <div>
                <p className="font-bold text-2xl ml-3.5 mb-1">Browse categories</p>
                <NaturalBrowse/>
            </div>
        </div>
     );
}
 
export default NaturalHeitage;