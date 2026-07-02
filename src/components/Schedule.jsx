import { motion } from "framer-motion";

export default function Schedule({ schedule }) {
  return (
    <section className="schedule" id="schedule">
      <div className="garden-overlay garden-overlay--dark" />
      <h1 className="section-tag">برنامج الحفل</h1>

      <div className="cd-timeline">
        {schedule.map((item, i) => (
          <motion.div
            className="cd-timeline__block"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="cd-timeline__img">
              {item.image ? (
                <img src={item.image} alt={item.label} />
              ) : (
                <div
                  className="cd-timeline__img-placeholder"
                  aria-hidden="true"
                />
              )}
            </div>

            <div className="cd-timeline__content">
              <p className="s-label">{item.label}</p>
              <p className="s-time">{item.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
