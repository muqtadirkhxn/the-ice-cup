import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const buttonHover = {
  scale: 1.05,
  boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
};

const CTASection = () => {
  return (
    <section
      className="
        relative py-24
        bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500
        overflow-hidden
      "
    >
      {/* Floating circles */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/20 rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-2xl" />

      <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Ready to Experience Pure Joy?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-white/90 max-w-2xl mx-auto"
        >
          Visit us today and discover why we’re the neighborhood’s favorite ice
          cream parlour. Your taste buds will thank you!
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
        >
          {/* Find Us */}
          <motion.a
            href="https://maps.google.com"
            target="_blank"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex items-center justify-center gap-2
              px-8 py-3 rounded-full
              bg-white text-pink-600 font-semibold
              transition
            "
          >
            📍 Find Us
          </motion.a>

          {/* Call Now */}
          <motion.a
            href="tel:+15551234567"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex items-center justify-center gap-2
              px-8 py-3 rounded-full
              border border-white
              text-white font-semibold
              hover:bg-white hover:text-purple-600
              transition
            "
          >
            📞 Call Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
