'use client'
import AfricanFlagsCarousel from "../components/afrocelebrationcomps/flags"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { slides } from '../data/afro-celebration/afroCelebrationSlides'

export default function ModelCarouselPage() {
  const router = useRouter()
  const [active, setActive] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Sync active slide on scroll
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth)
      setActive(idx)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  // Programmatic scroll
  const goTo = (i: number) => {
    const el = containerRef.current
    if (!el) return
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
    setActive(i)
  }

  // Click slide → route to its first category
  const handleClick = (slide: typeof slides[number]) => {
    router.push(
      `/afrocelebration/${slide.moduleKey}/${slide.categoryKey}`
    )
  }

  return (
    <div className="bg-[#fffbe6] min-h-screen flex flex-col items-center py-8 px-4 space-y-6">
      <div>
      <AfricanFlagsCarousel/>
    </div>
      <h1 className="text-3xl font-bold">Explore Afro Celebration</h1>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="w-full max-w-3xl flex overflow-x-auto space-x-4 snap-x snap-mandatory scrollbar-hide"
      >
        {slides.map((s, i) => (
          <div
            key={s.moduleKey}
            className="flex-none snap-center w-full h-64 relative rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleClick(s)}
          >
            <Image src={s.imageSrc} alt={s.label} fill className="object-cover" />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-40 p-2 text-center text-white">
              <h2 className="text-xl font-semibold">{s.label}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full bg-black transition-opacity ${
              i === active ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Synopsis */}
      <div className="max-w-3xl text-center">
        <h3 className="text-2xl font-bold mb-1">{slides[active].label}</h3>
        <p className="text-lg leading-relaxed">{slides[active].synopsis}</p>
      </div>
    </div>
  )
}