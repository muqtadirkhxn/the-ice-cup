import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart"; // ✅ ADD THIS
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <Navbar />

      {/* Offset for fixed navbar */}
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} /> {/* ✅ ADD THIS */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
