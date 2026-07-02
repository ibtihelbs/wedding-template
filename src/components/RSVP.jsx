import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVP({ rsvpDeadline }) {
  const [form, setForm] = useState({ name: "", count: "1", attending: "yes" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (!form.name.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="rsvp" id="rsvp">
      <div className="garden-overlay" />
      <motion.div
        className="rsvp-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-tag">تأكيد الحضور</h1>
        <p className="rsvp-deadline">يرجى الرد قبل {rsvpDeadline}</p>

        {submitted ? (
          <motion.div
            className="rsvp-thanks"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>شكراً {form.name} 🤍</p>
            <p>في انتظاركم بفارغ الصبر</p>
          </motion.div>
        ) : (
          <div className="rsvp-form">
            <div className="field">
              <label>الاسم الكامل</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="اسمك هنا"
              />
            </div>

            <div className="field">
              <label>عدد الأشخاص</label>
              <select name="count" value={form.count} onChange={handleChange}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label>هل ستحضر؟</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={form.attending === "yes"}
                    onChange={handleChange}
                  />
                  نعم، سأكون هناك 🎉
                </label>
                <label>
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={form.attending === "no"}
                    onChange={handleChange}
                  />
                  للأسف لن أتمكن من الحضور
                </label>
              </div>
            </div>

            <button className="btn-primary" onClick={handleSubmit}>
              تأكيد ✉️
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
