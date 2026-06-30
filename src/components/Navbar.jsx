import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#story", label: "قصتنا" },
  { href: "#schedule", label: "البرنامج" },
  { href: "#venue", label: "المكان" },
  { href: "#rsvp", label: "تأكيد الحضور" },
];

export default function Navbar({ bride, groom }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">
        <span className="navbar-brand">
          {bride} & {groom}
        </span>

        {/* Desktop links */}
        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="navbar-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="burger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="toggle menu"
        >
          <span className={menuOpen ? "bar bar--open" : "bar"} />
          <span className={menuOpen ? "bar bar--open" : "bar"} />
          <span className={menuOpen ? "bar bar--open" : "bar"} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
