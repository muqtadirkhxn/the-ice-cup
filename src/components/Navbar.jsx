import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  /* -------------------- Cart -------------------- */
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  /* -------------------- Dark Mode Persist -------------------- */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const closeMenu = () => setMenuOpen(false);

  const linkClass = ({ isActive }) =>
    `block py-2 transition ${
      isActive
        ? "text-strawberry font-semibold"
        : "text-gray-700 dark:text-gray-300 hover:text-strawberry"
    }`;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-black/10 dark:border-white/10">
      <div className="flex items-center justify-between h-16 px-6 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="The Ice Cup" className="w-auto h-8" />
          <span className="text-lg font-semibold text-chocolate dark:text-white">
            The Ice Cup
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden gap-8 text-sm font-medium md:flex">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/menu" className={linkClass}>
            Menu
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          {/* Cart Button */}
          <Link
            to="/cart"
            className="relative px-4 py-2 text-sm font-medium text-white transition rounded-full shadow-md bg-gradient-to-r from-pink-500 to-strawberry hover:scale-105 active:scale-95"
          >
            🛒 Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-strawberry text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Login Button */}
          <button
            onClick={() => navigate("/auth")}
            className="px-5 py-2 text-sm font-medium text-white transition rounded-full shadow-md bg-gradient-to-r from-pink-500 to-strawberry hover:opacity-90 hover:scale-105 active:scale-95"
          >
            Login
          </button>

          {/* Dark Toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center transition bg-gray-100 rounded-full w-9 h-9 dark:bg-slate-800 hover:scale-105"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-800 md:hidden dark:text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4 bg-white border-t dark:bg-slate-900 border-black/5 dark:border-white/10">
          <NavLink to="/" className={linkClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/menu" className={linkClass} onClick={closeMenu}>
            Menu
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
            Contact
          </NavLink>

          {/* Mobile Cart */}
          <Link
            to="/cart"
            onClick={closeMenu}
            className="flex items-center justify-between px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-pink-500 to-strawberry"
          >
            <span>🛒 My Cart</span>
            {cartCount > 0 && (
              <span className="bg-white text-strawberry text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Login */}
          <button
            onClick={() => {
              navigate("/auth");
              closeMenu();
            }}
            className="w-full py-2 mt-2 text-sm font-medium text-white transition rounded-full shadow-md bg-gradient-to-r from-pink-500 to-strawberry active:scale-95"
          >
            Login
          </button>

          {/* Dark Toggle */}
          <button
            onClick={() => {
              toggleDarkMode();
              closeMenu();
            }}
            className="flex items-center gap-2 mt-3 text-sm text-gray-700 dark:text-gray-300"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
