import { motion } from "framer-motion";

const reviews = [
  {
    name: "Emily Johnson",
    role: "Regular Customer",
    text: "The best ice cream I’ve ever had! The strawberry bliss is absolutely divine.",
  },
  {
    name: "Michael Chen",
    role: "Family Man",
    text: "Amazing flavors and quality. My kids love the chocolate dream!",
  },
  {
    name: "Sarah Williams",
    role: "Food Blogger",
    text: "This place is a gem! Incredible flavors and such a warm atmosphere.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-pink-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-chocolate dark:text-white">
          What Our Customers Say
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Real reviews from real ice cream lovers
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-slate-950 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex gap-1 text-yellow-400 mb-3">★★★★★</div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                “{r.text}”
              </p>

              <div className="mt-5">
                <p className="font-semibold text-chocolate dark:text-white">
                  {r.name}
                </p>
                <p className="text-xs text-gray-500">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
