import { motion } from "framer-motion";

const features = [
  {
    title: "100% Natural",
    desc: "Made with fresh, organic ingredients",
    icon: "🌿",
    color: "bg-pink-500",
  },
  {
    title: "Award Winning",
    desc: "Recognized for excellence",
    icon: "🏆",
    color: "bg-blue-500",
  },
  {
    title: "Fast Delivery",
    desc: "Quick delivery to your doorstep",
    icon: "🚚",
    color: "bg-purple-500",
  },
  {
    title: "Made with Love",
    desc: "Crafted with passion daily",
    icon: "❤️",
    color: "bg-green-500",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
              }}
              className="
                bg-white dark:bg-slate-900
                rounded-2xl p-8 text-center
                border border-gray-100 dark:border-white/10
                transition
              "
            >
              {/* Icon */}
              <div
                className={`
                  w-14 h-14 mx-auto rounded-full
                  flex items-center justify-center text-2xl text-white
                  ${item.color}
                `}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
