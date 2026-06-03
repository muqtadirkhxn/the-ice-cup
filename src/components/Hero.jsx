import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

// ✅ USE EXISTING IMAGES (NO BROKEN PATHS)
import mainIce from "../assets/icecream-main.png";
import chocoIce from "../assets/icecream-choco.png";
import strawberryIce from "../assets/icecream-strawberry.png";

const Hero = () => {
  const ref = useRef(null);

  // Parallax scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yMedium = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={ref}
      className="relative pt-32 overflow-hidden pb-28 bg-gradient-to-br from-vanilla via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-black"
    >
      <div className="grid items-center px-6 mx-auto max-w-7xl md:grid-cols-2 gap-14">
        {/* LEFT — GLASS TEXT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="p-10 border shadow-xl backdrop-blur-xl bg-white/60 dark:bg-white/10 border-white/30 dark:border-white/10 rounded-3xl">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl text-chocolate dark:text-white">
              Scoop Up <br />
              <span className="text-strawberry">Happiness</span> 🍨
            </h1>

            <p className="max-w-lg mt-5 text-lg text-chocolate/70 dark:text-gray-300">
              Handcrafted ice cream made with love, premium ingredients, and a
              sprinkle of magic.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 mt-8 sm:flex-row">
              <Link
                to="/menu"
                className="py-3 text-center text-white transition rounded-full shadow-lg px-7 bg-strawberry hover:scale-105"
              >
                Explore Flavors
              </Link>

              <Link
                to="/menu"
                className="py-3 text-center transition border-2 rounded-full px-7 border-strawberry text-strawberry hover:bg-strawberry hover:text-white"
              >
                View Menu
              </Link>
            </div>

            {/* Counters */}
            <div className="flex gap-8 mt-10 text-center">
              <div>
                <p className="text-3xl font-bold text-strawberry">50+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Flavors
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-strawberry">100%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Natural
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-strawberry">10K+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — PARALLAX ICE CREAMS */}
        <div className="relative h-[380px] md:h-[460px] flex items-center justify-center">
          {/* Glow */}
          <div className="absolute -translate-y-1/2 rounded-full w-80 h-80 bg-strawberry/40 blur-3xl top-1/2" />

          {/* Main */}
          <motion.img
            src={mainIce}
            alt="Ice Cream"
            className="relative z-10 w-60 md:w-72 drop-shadow-2xl"
            style={{ y: yMedium }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Chocolate */}
          <motion.img
            src={chocoIce}
            alt="Chocolate Ice Cream"
            className="absolute left-0 hidden bottom-10 w-28 md:w-36 sm:block"
            style={{ y: ySlow }}
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />

          {/* Strawberry */}
          <motion.img
            src={strawberryIce}
            alt="Strawberry Ice Cream"
            className="absolute right-0 hidden top-10 w-28 md:w-36 sm:block"
            style={{ y: yFast }}
            animate={{ y: [0, -16, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
