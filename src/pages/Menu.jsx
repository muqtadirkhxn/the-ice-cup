import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuCard from "../components/MenuCard";
import hero from "../assets/menu/hero.jpg";
import veganImg from "../assets/menu/vegan.jpg";
import sundaeImg from "../assets/menu/sundae.jpg";

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const list = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/* ---------------- Data ---------------- */
const DATA = {
  Classics: [
    {
      title: "Madagascar Vanilla Bean",
      desc: "Slow-churned vanilla with real bean flecks.",
      price: "₹180",
      tag: "Classic",
    },
    {
      title: "Double Chocolate Fudge",
      desc: "Rich cocoa with molten fudge ribbons.",
      price: "₹210",
      tag: "Best Seller",
    },
    {
      title: "Cookies & Cream Dream",
      desc: "Crushed cookies folded into cream.",
      price: "₹190",
    },
    {
      title: "Salted Caramel Swirl",
      desc: "Sweet caramel balanced with sea salt.",
      price: "₹200",
    },
  ],
  Seasonal: [
    {
      title: "Peach Cobbler Crumble",
      desc: "Fresh peaches & buttery crumble.",
      price: "₹220",
      tag: "New",
    },
    {
      title: "Honey Lavender Bloom",
      desc: "Floral, smooth & lightly sweet.",
      price: "₹215",
    },
  ],
};

const Menu = () => {
  const categories = ["All", "Classics", "Seasonal"];
  const [active, setActive] = useState("All");
  const [cartPulse, setCartPulse] = useState(false);

  const items =
    active === "All" ? [...DATA.Classics, ...DATA.Seasonal] : DATA[active];

  const handleAdd = () => {
    setCartPulse(true);
    setTimeout(() => setCartPulse(false), 300);
  };

  return (
    <section className="bg-[#FFF8F1] dark:bg-[#060B1A] text-[#3A1F1D] dark:text-[#F5EDE6] overflow-hidden">
      {/* HERO */}
      <div className="grid items-center px-6 pt-24 mx-auto max-w-7xl lg:grid-cols-2 gap-14">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <p className="mb-3 text-sm font-medium text-pink-500">
            ✨ 24+ Flavors · Freshly churned daily
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Explore The Ice Cup menu.
          </h1>
          <p className="mt-4 max-w-md text-[#3A1F1D]/70 dark:text-[#F5EDE6]/70">
            From classic scoops to adventurous specials, every cup is crafted in
            small batches with real ingredients.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 font-medium text-white transition bg-pink-500 rounded-xl active:scale-95">
              Start an order
            </button>
            <button className="px-6 py-3 transition border rounded-xl border-black/10 dark:border-white/15">
              Download menu
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="overflow-hidden bg-white shadow-xl rounded-3xl dark:bg-white/5"
        >
          <img src={hero} alt="Menu" className="object-cover w-full h-full" />
        </motion.div>
      </div>

      {/* FILTER BAR */}
      <div className="sticky top-16 z-20 bg-[#FFF8F1]/80 dark:bg-[#060B1A]/80 backdrop-blur mt-20">
        <div className="flex gap-6 px-6 mx-auto overflow-x-auto text-sm font-medium max-w-7xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="relative py-4 whitespace-nowrap"
            >
              {cat}
              {active === cat && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-pink-500"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* MENU LIST */}
      <div className="px-6 mx-auto mt-14 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={list}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {items.map((item, i) => (
              <MenuCard
                key={i}
                {...item}
                index={i} // 🔹 logic only
                onAdd={handleAdd}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* VEGAN SECTION */}
      <div className="grid items-center gap-12 px-6 mx-auto mt-28 max-w-7xl lg:grid-cols-2">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2 className="text-3xl font-bold">
            Plant-based scoops with full-on flavor.
          </h2>
          <p className="mt-4 text-[#3A1F1D]/70 dark:text-[#F5EDE6]/70">
            Coconut & oat milk bases crafted to taste just as indulgent.
          </p>
        </motion.div>

        <motion.img
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          src={veganImg}
          alt="Vegan"
          className="shadow-xl rounded-3xl"
        />
      </div>

      {/* SUNDAES */}
      <div className="grid items-center gap-12 px-6 mx-auto mt-28 max-w-7xl lg:grid-cols-2">
        <motion.img
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          src={sundaeImg}
          alt="Sundaes"
          className="shadow-xl rounded-3xl"
        />

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
          <h2 className="text-3xl font-bold">
            Piled high with toppings & whipped cream.
          </h2>
          <p className="mt-4 text-[#3A1F1D]/70 dark:text-[#F5EDE6]/70">
            Signature sundaes layered with sauces, crunch, and joy.
          </p>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="py-10 text-white bg-pink-500 mt-28">
        <div className="flex flex-col items-center justify-between gap-6 px-6 mx-auto max-w-7xl md:flex-row">
          <h3 className="text-xl font-semibold">Ready for your next scoop?</h3>
          <div className="flex gap-4">
            <button className="px-6 py-3 font-medium text-pink-600 bg-white rounded-xl">
              Order for pickup
            </button>
            <button className="px-6 py-3 border rounded-xl border-white/40">
              View locations
            </button>
          </div>
        </div>
      </div>

      {/* CART FLOAT
      <motion.div
        animate={cartPulse ? { scale: [1, 1.25, 1] } : {}}
        className="fixed z-30 px-5 py-3 text-sm font-medium text-white rounded-full shadow-xl bottom-6 right-6 bg-[#3A1F1D] dark:bg-white dark:text-[#3A1F1D]"
      >
        Cart
      </motion.div> */}
    </section>
  );
};

export default Menu;
