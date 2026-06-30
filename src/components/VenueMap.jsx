import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function VenueMap({ venue }) {
  return (
    <section className="venue-section" id="venue">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-tag">مكان الحفل</span>
        <p className="venue-address">
          {venue.name} · {venue.address}
        </p>
      </motion.div>

      <motion.div
        className="map-wrapper"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <MapContainer
          center={[venue.lat, venue.lng]}
          zoom={15}
          style={{ height: "380px", width: "100%", borderRadius: "16px" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[venue.lat, venue.lng]}>
            <Popup>{venue.name}</Popup>
          </Marker>
        </MapContainer>
      </motion.div>

      <a
        className="btn-outline"
        href={`https://www.google.com/maps/dir/?api=1&destination=${venue.lat},${venue.lng}`}
        target="_blank"
        rel="noreferrer"
      >
        📍 افتح في خرائط Google
      </a>
    </section>
  );
}
