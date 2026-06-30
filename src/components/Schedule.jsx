import { motion } from 'framer-motion';

export default function Schedule({ schedule }) {
  return (
    <section className="schedule" id="schedule">
      <div className="garden-overlay garden-overlay--dark" />
      <span className="section-tag">برنامج الحفل</span>
      <div className="schedule-card">
        {schedule.map((item, i) => (
          <motion.div
            className="schedule-item"
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <span className="s-icon">{item.icon}</span>
            <div className="s-info">
              <span className="s-label">{item.label}</span>
              <span className="s-time">{item.time}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
