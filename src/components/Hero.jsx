import { motion } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";

export default function Hero({ couple, event }) {
  const { days, hours, minutes, seconds } = useCountdown(event.date);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: "easeOut" },
  });

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.p className="eyebrow" {...fadeUp(0.1)}>
          بكل سرور نعلن
        </motion.p>

        <motion.div className="couple-names" {...fadeUp(0.3)}>
          <h1>{couple.bride}</h1>
          <img src="./ring.png" alt="ring" width="100" />
          <h1>{couple.groom}</h1>
        </motion.div>

        <motion.p className="date-display" {...fadeUp(0.5)}>
          {event.dateDisplay}
        </motion.p>

        <motion.p className="venue-name" {...fadeUp(0.65)}>
          {event.venue.name} · {event.venue.city}
        </motion.p>

        <motion.div className="countdown" {...fadeUp(0.8)}>
          {[
            { val: seconds, label: "ثbbbbbbbانية" },
            { val: minutes, label: "دقيقة" },
            { val: hours, label: "ساعة" },
            { val: days, label: "يوم" },
          ].map(({ val, label }) => (
            <div className="count-box" key={label}>
              <span className="count-num">{String(val).padStart(2, "0")}</span>
              <span className="count-label">{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.a href="#rsvp" className="btn-primary" {...fadeUp(1)}>
          تأكيد الحضور ↓
        </motion.a>
      </div>
    </section>
  );
}
