import { motion } from 'framer-motion';

export default function Verse({ verse }) {
  return (
    <section className="verse-section" id="story">
      <motion.div
        className="verse-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="verse-mark">﴿</span>
        <p className="verse-text">{verse.arabic}</p>
        <span className="verse-mark verse-mark--end">﴾</span>
        <span className="verse-ref">{verse.reference}</span>
        <span className="divider">❧</span>
      </motion.div>
    </section>
  );
}
