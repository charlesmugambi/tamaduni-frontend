// Home.js
import HeroSection from "./comps/HeroSection"
import SingleCard from "./comps/SectionCard.jsx"

const Home = () => {
  return ( 
    <div 
    className="flex flex-col min-h-screen ">
      <div className="bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="container mx-auto">
        </div>
      </div>
      <HeroSection/>
     <div>
   <SingleCard/>
     </div>
    </div>
  );
}
export default Home;
