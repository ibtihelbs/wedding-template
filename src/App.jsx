import weddingData from "./data/wedding.json";
import Navbar from "./components/Navbar";
import Envelope from "./components/Envelope";
import Verse from "./components/Verse";
import Schedule from "./components/Schedule";
import VenueMap from "./components/VenueMap";
import RSVP from "./components/RSVP";
import "./index.css";
import { motion } from "framer-motion";
export default function App() {
  const { couple, event, verse, schedule } = weddingData;

  return (
    <div className="app" dir="rtl">
      <Navbar bride={couple.bride} groom={couple.groom} />
      <Envelope couple={couple} event={event} verse={verse} />
      <Schedule schedule={schedule} />
      <VenueMap venue={event.venue} />
      <RSVP rsvpDeadline={event.rsvpDeadline} />
      <footer className="footer">
        <p>
          💍 {couple.bride} & {couple.groom} · {event.dateDisplay}
        </p>
      </footer>
    </div>
  );
}
