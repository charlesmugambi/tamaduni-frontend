import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet"
interface MarkerData {
    geocode: [number, number];
    tooltip: string;
  }
export default function CulturalMap() {
    const markers: MarkerData[]= [
        { geocode: [51.505, -0.09], tooltip: "London" },
    ]
    return(
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map(marker =>(
                <Marker position={marker.geocode}>
                <Tooltip>{marker.tooltip}</Tooltip>
            </Marker>
            ))}
            
        </MapContainer>

    );
}