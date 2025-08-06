
// Home.js
import HeroSection from "./components/landingpagecomps/HeroSection";
import SingleCard from "./components/landingpagecomps/LandingPageCards";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <HeroSection />
      </section>

      {/* Section with Cards or Content */}
      <section className="container mx-auto px-4 py-8">
        <SingleCard />
      </section>
    </main>
  );
};

export default Home;
