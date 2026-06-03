import React, { useState } from "react";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FloatingInput = ({ label, type = "text" }) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="peer w-full rounded-xl px-4 pt-5 pb-2 text-sm bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 text-[#3A1F1D] dark:text-[#F8FAFF] focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition"
      />
      <label
        className={`
          absolute left-4 pointer-events-none text-xs transition-all
          ${
            value
              ? "top-2 text-pink-500"
              : "top-4 text-[#6B4A45] dark:text-[#B8C0FF]"
          }
          peer-focus:top-2 peer-focus:text-pink-500
        `}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  return (
    <section
      className="
        relative overflow-hidden py-24 px-4
        bg-[#FFF8F1]
        dark:bg-gradient-to-b dark:from-[#070B1A] dark:to-[#0B1024]
        transition-colors
      "
    >
      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-pink-500/20 blur-[140px]" />
      <div className="absolute top-1/2 -right-40 w-[420px] h-[420px] bg-purple-500/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-pink-500 font-medium mb-2"
          >
            🍨 We’d love to hear from you
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-[#3A1F1D] dark:text-[#F8FAFF]"
          >
            Get in touch with The Ice Cup
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-[#6B4A45] dark:text-[#B8C0FF]"
          >
            Whether it’s catering, custom flavors, or just a sweet suggestion —
            our scoop squad is ready.
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10"
        >
          {/* Left Card */}
          <motion.div
            variants={fadeUp}
            className="
              bg-white dark:bg-[#0F162E]
              rounded-2xl p-8
              border border-black/5 dark:border-white/10
              shadow-sm hover:shadow-xl hover:-translate-y-1
              transition-all
            "
          >
            <h3 className="text-xl font-semibold text-[#3A1F1D] dark:text-[#F8FAFF] mb-4">
              Visit our parlour
            </h3>

            <div className="space-y-3 text-sm text-[#6B4A45] dark:text-[#B8C0FF]">
              <p>123 Scoopville Street</p>
              <p>Sweetland, IN 560001</p>
              <p>+91 98765 43210</p>
              <p>hello@theicecup.com</p>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden border border-black/5 dark:border-white/10 shadow-lg">
              <iframe
                title="The Ice Cup Location"
                src="https://www.google.com/maps?q=India&output=embed"
                className="w-full h-56 border-0 dark:invert dark:hue-rotate-180 dark:contrast-125"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            variants={fadeUp}
            className="
              bg-white dark:bg-[#0F162E]
              rounded-2xl p-8
              border border-black/5 dark:border-white/10
              shadow-sm hover:shadow-xl
              transition-all
            "
          >
            <h3 className="text-xl font-semibold text-[#3A1F1D] dark:text-[#F8FAFF] mb-6">
              Send us a message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <FloatingInput label="Full name" />
                <FloatingInput label="Email address" type="email" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FloatingInput label="Phone number (optional)" />
                <FloatingInput label="Reason for reaching out" />
              </div>

              <FloatingInput label="How can we help?" />

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="
                  relative overflow-hidden
                  px-8 py-3 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600
                  shadow-lg shadow-pink-500/30
                  hover:shadow-pink-500/50
                  transition-all
                "
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
