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
        <h1 className="section-tag">مكان الحفل</h1>
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
        <img src="/map.png" alt="map" />
      </motion.div>

      <a
        className="btn-primary"
        href={`https://www.google.com/maps/dir/?api=1&destination=${venue.lat},${venue.lng}`}
        target="_blank"
        rel="noreferrer"
      >
        📍 افتح في خرائط Google map
      </a>
    </section>
  );
}
