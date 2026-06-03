import { motion } from "framer-motion";
import shopImg from "../assets/about/shop.jpg";

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "4.9/5", label: "Average Rating" },
];

const SweetStory = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={shopImg}
            alt="Our Shop"
            loading="lazy"
            className="rounded-3xl shadow-xl object-cover w-full"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-chocolate dark:text-white">
            Our Sweet Story
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            Since 2025, The Ice Cup has been serving happiness one scoop at a
            time. What started as a small family dream has grown into the
            community’s favorite ice cream destination.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We believe in using only the finest ingredients — fresh cream, real
            fruits, and premium chocolates. Every batch is made fresh daily with
            love and care.
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl bg-pink-50 dark:bg-slate-900 p-6 text-center shadow"
              >
                <p className="text-2xl font-bold text-pink-500">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SweetStory;
