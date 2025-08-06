import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-orange-50 py-12 px-4 lg:px-12">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Preserving Our Past, <br />
          Empowering Our Future
        </h1>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Preserving cultural heritage, empowering the next generation. Join us in building a future rooted in authenticity and shared knowledge.
        </p>
      </div>

      {/* First Image */}
      <div className="flex justify-center mb-8">
        <Image
          src="/giraffe.PNG"
          alt="Cultural art featuring giraffe"
          width={500}
          height={300}
          className="rounded-lg object-cover w-full max-w-xl"
          priority
        />
      </div>

      {/* Subheading */}
      <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-gray-800 text-center mb-8">
        Authenticity. Community-centered. Decolonizing knowledge.
      </h2>

      {/* Second Image */}
      <div className="flex justify-center">
        <div className="w-full max-w-5xl px-2">
          <Image
            src="/women.PNG"
            alt="Empowered African women in traditional attire"
            width={800}
            height={500}
            className="rounded-lg object-cover w-full h-auto"
            priority
            sizes="(min-width: 1024px) 80vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
