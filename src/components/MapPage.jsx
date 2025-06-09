import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Sidebar from "./Sidebar";
import pfasData from "../data/pfasData.json";

// Fix for marker icons in Vite/React-Leaflet
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Helper to force map resize on mount
function InvalidateMapSize() {
  const map = useMap();
  // Only run once on mount
  useState(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }, [map]);
  return null;
}

function MapPage() {
  const [selectedSite, setSelectedSite] = useState(null);

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <MapContainer
          center={[22.9734, 78.6569]}
          zoom={5}
          style={{ height: "100vh", width: "100%" }}
          scrollWheelZoom={true}
        >
          <InvalidateMapSize />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {pfasData.map((site) => (
            <Marker
              key={site.id}
              position={site.position}
              eventHandlers={{
                click: () => setSelectedSite(site),
              }}
            >
              <Popup>
                <b>{site.name}</b><br />
                Risk: {site.riskLevel}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      {/* Sidebar only appears when a marker is selected */}
      {selectedSite && (
        <Sidebar site={selectedSite} onClose={() => setSelectedSite(null)} />
      )}
    </div>
  );
}

export default MapPage;
