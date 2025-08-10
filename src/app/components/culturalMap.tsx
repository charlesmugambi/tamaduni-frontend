// components/CulturalMap.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { renderToStaticMarkup } from 'react-dom/server';
import 'leaflet/dist/leaflet.css';
import { culturalMappingConfig } from '../data/cultural-mapping/cultural-mapping-category';

// Example: import your lucide icons (kept for UI)
import { Landmark, Trees, UsersRound, Factory } from 'lucide-react';

// Dynamically load react-leaflet components (client-only)
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Tooltip = dynamic(() => import('react-leaflet').then((mod) => mod.Tooltip), { ssr: false });

// Map category key to either a React node (Lucide) OR a public svg path string
const categoryIcons: Record<string, React.ReactNode | string> = {
  communityOrganizations: <UsersRound size={28} />,
  workshopsClasses: <Factory size={28} />,
  artInstallations: <Landmark size={28} />,
  naturalHeritage: <Trees size={28} />,
  default: '/icons/default.svg',
  creativeProsEvents: '/icons/creative-professional.svg',
  festivalsCeremonies: '/icons/celebration logo 1.svg',
  heritageSites: '/icons/historic-site 1.svg',
  environmentalEducation: '/icons/learning-center.svg',
  parksRecreation: '/icons/parks.svg',
};

// Type alias for the Leaflet module
type LeafletModule = typeof import('leaflet');

/**
 * useLeafletLoader
 * Loads leaflet on the client and returns { ref, loaded }.
 * - ref.current is the Leaflet module once loaded
 * - loaded is a boolean that flips true when ready (so components can re-render)
 */
const useLeafletLoader = (): { ref: React.MutableRefObject<LeafletModule | null>; loaded: boolean } => {
  const ref = React.useRef<LeafletModule | null>(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    let cancelled = false;
    (async () => {
      try {
        const L = await import('leaflet');
        if (!cancelled) {
          ref.current = L;
          setLoaded(true);
        }
      } catch (err) {
        console.error('Failed to load leaflet:', err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { ref, loaded };
};

// KEEP NAME: createDivIcon
function createDivIcon(nodeOrPath: React.ReactNode | string | undefined, size = 36, leafletRef?: React.MutableRefObject<LeafletModule | null> | null) {
  const L = leafletRef?.current ?? null;
  const anchor = Math.floor(size / 2);
  const fallbackHtml = `<img src="/icons/default.svg" width="${size}" height="${size}" class="marker-img" alt="" />`;

  // If leaflet isn't loaded, return undefined — Marker will use default icon
  if (!L) {
    return undefined;
  }

  if (!nodeOrPath) {
    return L.divIcon({ html: fallbackHtml, className: 'custom-div-icon', iconSize: [size, size], iconAnchor: [anchor, size] });
  }

  if (typeof nodeOrPath === 'string') {
    const html = `<img src="${nodeOrPath}" width="${size}" height="${size}" class="marker-img" alt="" />`;
    return L.divIcon({ html, className: 'custom-div-icon', iconSize: [size, size], iconAnchor: [anchor, size] });
  }

  // Render React node (Lucide) to static markup (SVG) and use as icon HTML
  const svgHtml = renderToStaticMarkup(nodeOrPath);
  const html = svgHtml.startsWith('<svg') ? svgHtml : `<div>${svgHtml}</div>`;
  return L.divIcon({ html, className: 'custom-div-icon', iconSize: [size, size], iconAnchor: [anchor, size] });
}

interface MarkerData {
  id: number | string;
  geocode: [number, number];
  label: string;
}

interface CulturalMapProps {
  items?: Array<any>;
  categoryKey?: string;
}

// KEEP NAME: CulturalMap
export default function CulturalMap({ items = [], categoryKey }: CulturalMapProps) {
  const router = useRouter();

  // Load leaflet and get a ref + loaded boolean
  const { ref: leafletRef, loaded } = useLeafletLoader();

  // Find selected category config (optional)
  const category = categoryKey ? culturalMappingConfig.find((c) => c.key === categoryKey) : undefined;

  // Build markers from items
  const markers = React.useMemo<MarkerData[]>(
    () =>
      items
        .filter((i: any) => i && i.location && typeof i.location.latitude === 'number' && typeof i.location.longitude === 'number')
        .map((i: any) => ({
          id: i.id,
          geocode: [i.location.latitude, i.location.longitude] as [number, number],
          label: i.title || i.itemName || 'No Name',
        })),
    [items]
  );

  // Determine mapping value (React node or image path) for active category
  const mappingVal = categoryIcons[category?.key ?? ''] ?? categoryIcons.default;

  // Create markerIcon — only depends on mappingVal and leaflet loaded state.
  // Once `loaded` turns true the hook will run again and markerIcon will be created with real Leaflet.
  const markerIcon = React.useMemo(() => createDivIcon(mappingVal, 40, leafletRef), [mappingVal, loaded]);

  const center: [number, number] = markers[0]?.geocode ?? [-1.286389, 36.817223];

  return (
    <div className="relative w-full h-screen bg-yellow-50">
      <MapContainer center={center} zoom={10} className="h-full w-full rounded-lg shadow-md z-0 relative">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.geocode} icon={markerIcon}>
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
              {marker.label}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Floating Category Card - always shown */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center gap-4 p-4  bg-yellow-50 rounded-xl shadow-lg z-[1000]">
        {culturalMappingConfig.map((cat) => {
          const val = categoryIcons[cat.key] ?? categoryIcons.default;
          const ui = typeof val === 'string' ? <Image src={val} alt={cat.label} width={28} height={28} /> : val;

          return (
            <button
              key={cat.key}
              className={`flex flex-col items-center w-24 transition-all duration-200 ${cat.key === categoryKey ? 'bg-yellow-200 rounded-lg scale-105' : ''}`}
              onClick={() => router.push(`/cultural_mapping/${cat.key}`)}
            >
              <div className="mb-1">{ui}</div>
              <p className="text-center text-xs">
                {cat.label.split(' ').map((w) => (
                  <span key={w} className="block">
                    {w}
                  </span>
                ))}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
