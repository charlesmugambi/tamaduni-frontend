'use client';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { CategoryButtons } from './CategoryButtons';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })

export interface MapWrapperProps {
    categories?: string[];
    onCategorySelect?: (cat: string) => void;
    center?: [number, number];
    zoom?: number;
  }
  export const MapWrapper: React.FC<MapWrapperProps> = ({
    categories,
    onCategorySelect,
    center = [-1.2921, 36.8219], // Nairobi coords
    zoom = 12,
  }) => (
    <div className="relative h-full w-full">
      <MapContainer center={center} zoom={zoom} className="h-full w-full rounded-lg shadow-md z-0 relative">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      {categories && categories.length > 0 && (
        <CategoryButtons categories={categories} onSelect={onCategorySelect} />
      )}
    </div>
  );