import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className="relative overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: "var(--footer-bg)",
        color: "var(--footer-text)",
      }}
    >
      {/* subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 left-1/2 h-48 w-[420px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "linear-gradient(90deg, var(--footer-accent-start), var(--footer-accent-end))",
          }}
        />
      </div>

      <div className="relative px-6 py-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-xl font-semibold">The Ice Cup</h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--footer-muted)" }}
            >
              Crafted desserts. Chilled perfection in every scoop.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-medium">Explore</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`
                        footer-link transition-all duration-300
                        ${active ? "footer-active" : ""}
                      `}
                      style={{
                        color: active
                          ? "var(--footer-accent-start)"
                          : "var(--footer-muted)",
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-medium">Contact</h4>
            <a
              href="mailto:hello@theicecup.in"
              className="block text-sm transition hover:opacity-80"
              style={{ color: "var(--footer-muted)" }}
            >
              hello@theicecup.in
            </a>
            <a
              href="tel:+919876543210"
              className="block mt-2 text-sm transition hover:opacity-80"
              style={{ color: "var(--footer-muted)" }}
            >
              +91 70073 77281
            </a>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-medium">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
                <a key={i} href="#" className="footer-social">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col items-center justify-between pt-6 text-xs mt-14 md:flex-row"
          style={{
            borderTop: "1px solid var(--footer-border)",
            color: "var(--footer-muted)",
          }}
        >
          <span>© {new Date().getFullYear()} The Ice Cup</span>
          <span className="mt-2 md:mt-0">Crafted with ❄️ & 🍨</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
