import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet"
import { Landmark, Trees, UsersRound, Factory } from 'lucide-react'
// Import CSS for leaflet
import "leaflet/dist/leaflet.css"

interface MarkerData {
  geocode: [number, number]
  tooltip: string
}

const categories = [
  { icon: <UsersRound />, label: "Community Cultural Organizations" },
  { icon: <Factory />, label: "Cultural Industries" },
  { icon: <Trees />, label: "Natural Heritage" },
  { icon: <Landmark />, label: "Cultural Festivals & Events" },
]

export default function CulturalMap() {
  const markers: MarkerData[] = [
    { geocode: [51.505, -0.09], tooltip: "London" },
    { geocode: [-1.286389, 36.817223], tooltip: "Nairobi" },
  ]

  return (
    <div className="relative w-full h-screen bg-yellow-50">
      {/* Map */}
      <MapContainer
        center={[-1.286389, 36.817223]}
        zoom={10}
        className="h-full w-full rounded-lg shadow-md z-0 relative"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, idx) => (
          <Marker position={marker.geocode} key={idx}>
            <Tooltip>{marker.tooltip}</Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Floating Category Card */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 sm:bottom-6 md:bottom-8 bg-white rounded-xl shadow-lg py-2 sm:py-3 flex flex-wrap justify-center items-start w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 gap-4 px-2 sm:px-4 z-50">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center w-24">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1">{cat.icon}</div>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-center leading-tight whitespace-normal break-words">
              {cat.label.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
