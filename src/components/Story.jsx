import { motion } from 'framer-motion';

export default function Story({ couple }) {
  return (
    <section className="story">
      <motion.div
        className="story-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">قصتنا</span>
        <p className="story-text">{couple.story}</p>
        <div className="divider">— {couple.bride} & {couple.groom} —</div>
      </motion.div>
    </section>
  );
}
