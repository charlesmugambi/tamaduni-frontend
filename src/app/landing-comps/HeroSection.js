import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-orange-50 py-8 px-4">
      {/* Text Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl  md:text-2xl lg:text-6xl font-bold text-gray-900 leading-snug mb-3">
          Preserving our Past<br />
          Empowering Our<br />
          Future
        </h1>
        <p className="text-sm lg:text-lg text-gray-700 leading-relaxed max-w-xs lg:max-w-2xl mx-auto mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* First Image */}
      <div className="mb-4">
        <Image
          src="/giraffe.PNG"
          alt="giraffe"
          width={250}
          height={150}
          className="mx-auto rounded lg:w-[500px] lg:h-[300px] object-cover"
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </div>

      {/* Subtext */}
      <h2 className="text-md font-bold md:text-2xl center lg:text-4xl lg:font-bold text-gray-900 mb-4 leading-snug max-w-3xl mx-auto lg:mx-0 lg:ml-30 ml-4">
  Authenticity. Community-centered. Decolonizing knowledge.
</h2>


      {/* Second Image */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[85%]">
          <Image
            src="/women.PNG"
            alt="women"
            width={380}
            height={400}
            className="rounded w-full h-auto object-cover"
            priority
            sizes="(min-width: 1024px) 75vw, 380px"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
