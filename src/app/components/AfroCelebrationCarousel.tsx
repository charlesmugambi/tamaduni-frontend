'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { slides } from '../data/afro-celebration/afroCelebrationSlides'

interface CarouselProps {
  showSynopsis?: boolean // to control if synopsis is displayed
}

export default function AfroCelebrationCarousel({ showSynopsis = false }: CarouselProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [active, setActive] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Detect active card from URL when route changes
  useEffect(() => {
    const matchIndex = slides.findIndex(
      (s) => pathname.includes(`/${s.moduleKey}/${s.categoryKey}`)
    )
    if (matchIndex >= 0) {
      setActive(matchIndex)
      goTo(matchIndex)
    }
  }, [pathname])

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

  // Scroll programmatically
  const goTo = (i: number) => {
    const el = containerRef.current
    if (!el) return
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
    setActive(i)
  }

  // Click → route
  const handleClick = (slide: typeof slides[number]) => {
    router.push(`/afrocelebration/${slide.moduleKey}/${slide.categoryKey}`)
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Carousel */}
      <div
        ref={containerRef}
        className="w-full max-w-3xl flex overflow-x-auto space-x-4 snap-x snap-mandatory scrollbar-hide"
      >
        {slides.map((s, i) => (
          <div
            key={s.moduleKey}
            className={`flex-none snap-center w-full h-64 relative rounded-lg overflow-hidden cursor-pointer 
              ${i === active ? 'ring-4 ring-yellow-400' : ''}`}
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

      {/* Optional Synopsis */}
      {showSynopsis && (
        <div className="max-w-3xl text-center">
          <h3 className="text-2xl font-bold mb-1">{slides[active].label}</h3>
          <p className="text-lg leading-relaxed">{slides[active].synopsis}</p>
        </div>
      )}
    </div>
  )
}
