import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Leaf, Sparkles, Award } from "lucide-react";
import shopImg from "../assets/about/shop.jpg";

/* ---------------------------------- */
/* Animation Presets */
/* ---------------------------------- */
const pageFade = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

/* ---------------------------------- */
/* About Page */
/* ---------------------------------- */
const About = () => {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <motion.section
      variants={pageFade}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden bg-[#FFF8F1] dark:bg-[#060B1A] text-[#3A1F1D] dark:text-[#F8FAFC]"
    >
      {/* ================= HERO ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid items-center px-6 pb-20 mx-auto max-w-7xl pt-28 lg:grid-cols-2 gap-14"
      >
        {/* Left */}
        <motion.div variants={container}>
          <motion.p
            variants={fadeUp}
            className="mb-3 text-sm font-semibold tracking-wide text-pink-500"
          >
            Since 2018 · Made with Love
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl"
          >
            The story behind <span className="text-pink-500">The Ice Cup</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-lg text-black/70 dark:text-white/70"
          >
            The Ice Cup is a neighborhood ice cream parlour dedicated to
            small-batch flavors, real ingredients, and moments worth savoring.
          </motion.p>

          {/* Stats */}
          <motion.div variants={container} className="flex gap-10 mt-10">
            {[
              { value: "50K+", label: "Scoops Served" },
              { value: "24", label: "Rotating Flavors" },
              { value: "100%", label: "Fresh Dairy" },
            ].map((stat, i) => (
              <motion.div variants={fadeUp} key={i}>
                <p className="text-2xl font-bold text-pink-500">{stat.value}</p>
                <p className="text-sm text-black/60 dark:text-white/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          style={{ y: imageY }}
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative overflow-hidden shadow-xl rounded-3xl"
        >
          <img
            src={shopImg}
            alt="Ice Cream Store"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>

      {/* ================= VALUES ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="px-6 py-24 mx-auto max-w-7xl"
      >
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Story */}
          <motion.div variants={fadeUp}>
            <p className="mb-2 text-sm font-semibold text-pink-500">
              OUR STORY
            </p>
            <h2 className="mb-4 text-3xl font-bold">
              Scooping joy, one cup at a time
            </h2>
            <p className="leading-relaxed text-black/70 dark:text-white/70">
              What started as a tiny window shop grew into a community favorite.
              Every recipe is inspired by childhood memories, crafted fresh
              daily, and served with a smile.
            </p>
          </motion.div>

          {/* Beliefs */}
          <motion.div
            variants={container}
            className="grid gap-6 sm:grid-cols-2"
          >
            {[
              {
                icon: Leaf,
                title: "Real Ingredients Only",
                text: "Fresh milk, real fruit, no shortcuts.",
              },
              {
                icon: Sparkles,
                title: "Small Batch Magic",
                text: "Every flavor is crafted intentionally.",
              },
              {
                icon: Heart,
                title: "Made With Love",
                text: "Joy is our secret ingredient.",
              },
              {
                icon: Award,
                title: "Quality First",
                text: "Award-winning taste & care.",
              },
            ].map((item, i) => (
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                key={i}
                className="p-6 bg-white border rounded-2xl dark:bg-white/5 border-black/5 dark:border-white/10 hover:shadow-xl"
              >
                <item.icon className="mb-4 text-pink-500 transition-transform w-7 h-7 group-hover:scale-110" />
                <h4 className="mb-2 font-semibold">{item.title}</h4>
                <p className="text-sm text-black/60 dark:text-white/60">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ================= PROCESS ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="px-6 pb-24 mx-auto max-w-7xl"
      >
        <motion.h2 variants={fadeUp} className="mb-12 text-3xl font-bold">
          Small-batch magic behind every flavor
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Churned in small batches",
              text: "Creamy texture, balanced sweetness.",
            },
            {
              step: "02",
              title: "Swirls & chunks by hand",
              text: "From brownie bits to fresh fruit.",
            },
            {
              step: "03",
              title: "Served at peak freshness",
              text: "Every scoop made daily.",
            },
          ].map((item, i) => (
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              key={i}
              className="p-6 bg-white border rounded-2xl dark:bg-white/5 border-black/5 dark:border-white/10 hover:shadow-xl"
            >
              <p className="mb-2 text-sm font-bold text-pink-500">
                {item.step}
              </p>
              <h4 className="mb-2 font-semibold">{item.title}</h4>
              <p className="text-sm text-black/60 dark:text-white/60">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ================= TEAM ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="px-6 pb-32 mx-auto max-w-7xl"
      >
        <motion.h2 variants={fadeUp} className="mb-12 text-3xl font-bold">
          The people behind the counter
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Maya Rivera", role: "Founder & Flavor Creator" },
            { name: "Leo Carter", role: "Head of Operations" },
            { name: "Jade Thompson", role: "Dessert Lead" },
            { name: "Eli Park", role: "Pastry & Cones" },
          ].map((member, i) => (
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              key={i}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
              <h4 className="font-semibold">{member.name}</h4>
              <p className="text-sm text-black/60 dark:text-white/60">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
