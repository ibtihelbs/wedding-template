import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";

export default function Envelope({ couple, event }) {
  const [opened, setOpened] = useState(false);
  const { days, hours, minutes, seconds } = useCountdown(event.date);

  return (
    <section className="envelope-section">
      <div className="garden-overlay" />

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            className="envelope"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.6 }}
            onClick={() => setOpened(true)}
          >
            <div className="envelope-flap" />
            <div className="envelope-body"></div>
            <motion.div className="wax-seal" whileTap={{ scale: 0.95 }}>
              <span>اضغط</span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="card"
            className="invitation-card"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="eyebrow">يدعوانكم لمشاركة أجمل يوم في حياتهم</span>

            <div className="hero-names">
              <span className="name-script">{couple.bride}</span>
              <span className="name-amp">&</span>
              <span className="name-display">{couple.groom}</span>
            </div>

            <div className="hero-meta">
              <span className="hero-date">{event.dateDisplay}</span>
              <span className="hero-dot">·</span>
              <span className="hero-venue">
                {event.venue.name}، {event.venue.city}
              </span>
            </div>

            <div className="countdown">
              {[
                { val: days, label: "يوم" },
                { val: hours, label: "ساعة" },
                { val: minutes, label: "دقيقة" },
                { val: seconds, label: "ثانية" },
              ].map(({ val, label }) => (
                <div className="count-box" key={label}>
                  <span className="count-num">
                    {String(val).padStart(2, "0")}
                  </span>
                  <span className="count-label">{label}</span>
                </div>
              ))}
            </div>

            <a href="#rsvp" className="btn-primary">
              تأكيد الحضور
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
