'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

const TitleAfro = () => {
  const router=useRouter()
  const handleFilmClick=()=>{
      router.push("/afro-film")
  }
    return ( 
      <div>
           
        <h2 className="text-2xl font-bold mb-2 m-auto">Film Industry</h2>

        <div className="relative">
        <Image
            src="/flags/film.PNG"
            alt="Film Slide"
            width={640}
            height={10}
            onClick={handleFilmClick}
            className="w-full max-w-[640px] mx-auto rounded-lg object-cover"
          />
        </div>

{/* Dot Indicators */}
        <div className="flex justify-center text-black space-x-2 mb-4">
          {[0, 1, 2].map((dot) => (
            <div
              key={dot}
              className="w-2 h-2 mt-2.5 rounded-full text-black bg-black opacity-50"
            />
          ))}
        </div>

        </div>
     );
}
 
export default TitleAfro;