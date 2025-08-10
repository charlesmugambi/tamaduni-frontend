'use client'
import React from 'react'
import AfricanFlagsCarousel from "../comps/flags"

import AfroCelebrationCarousel from "../components/AfroCelebrationCarousel"


export default function ModelCarouselPage() {
  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 space-y-6 overflow-x-hidden">
      <div>
        <AfricanFlagsCarousel />
      </div>
      <h1 className="text-3xl font-bold">Explore Afro Celebration</h1>

      {/* Carousel with synopsis only on landing page */}
      <AfroCelebrationCarousel showSynopsis={true} />
    </div>
  )
}