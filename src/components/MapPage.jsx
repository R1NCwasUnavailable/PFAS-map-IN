import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import Sidebar from "./Sidebar";
import pfasData from "../data/pfasData.json";

// Fix Leaflet default icons for Vite (critical for marker display)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom blue severity icons for risk level visualization
const blueShades = {
  low: "#90caf9",      // light blue
  moderate: "#2196f3", // medium blue
  high: "#0d47a1"      // dark blue
};

function createBlueIcon(color) {
  return new L.Icon({
    iconUrl: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path d="M12.5 0C6 0 0 6 0 13.5c0 11.5 12.5 27.5 12.5 27.5S25 25 25 13.5C25 6 19 0 12.5 0z" fill="${encodeURIComponent(color)}"/><circle cx="12.5" cy="13.5" r="5" fill="white"/></svg>`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    shadowSize: [41, 41]
  });
}

const severityIcons = {
  low: createBlueIcon(blueShades.low),
  moderate: createBlueIcon(blueShades.moderate),
  high: createBlueIcon(blueShades.high)
};

function getSeverityKey(riskLevel) {
  if (!riskLevel) return "low";
  const key = riskLevel.toLowerCase();
  if (key.includes("high") || key.includes("critical")) return "high";
  if (key.includes("moderate")) return "moderate";
  return "low";
}

// Helper to force map resize after conditional render
function InvalidateMapSize() {
  const map = useMap();
  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);
    return () => clearTimeout(timer);
  }, [map]);
  return null;
}

function MapPage({ onGoBack }) {
  const [selectedSite, setSelectedSite] = useState(null);

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", position: "relative" }}>
      {/* Go Back Button */}
      <button
        onClick={onGoBack}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 2000,
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "50px",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(25, 118, 210, 0.3)",
          transition: "transform 0.2s"
        }}
        onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
        onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
      >
        ← Back to Info
      </button>

      {/* Map Container */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <MapContainer
          center={[22.9734, 78.6569]}
          zoom={5}
          style={{ height: "100vh", width: "100%" }}
          scrollWheelZoom={true}
        >
          <InvalidateMapSize />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {pfasData.map((site) => (
            <Marker
              key={site.id}
              position={site.position}
              icon={severityIcons[getSeverityKey(site.riskLevel)]}
              eventHandlers={{
                click: () => setSelectedSite(site),
              }}
            >
              <Popup>
                <div style={{ minWidth: "200px" }}>
                  <h3 style={{ margin: "0 0 8px 0", color: "#1976d2" }}>{site.name}</h3>
                  <p style={{ margin: "4px 0" }}><strong>Risk:</strong> {site.riskLevel}</p>
                  <p style={{ margin: "4px 0" }}><strong>Water Source:</strong> {site.waterSource}</p>
                  <p style={{ margin: "4px 0", fontSize: "0.9em", color: "#666" }}>
                    Click marker for detailed information
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Sidebar */}
      {selectedSite && (
        <Sidebar site={selectedSite} onClose={() => setSelectedSite(null)} />
      )}
    </div>
  );
}

export default MapPage;
