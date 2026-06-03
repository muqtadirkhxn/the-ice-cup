import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1200;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-6 text-center">
        {[
          { value: 50, label: "Unique Flavors", suffix: "+" },
          { value: 100, label: "Natural", suffix: "%" },
          { value: 10, label: "Happy Customers", suffix: "K+" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-3xl font-bold text-strawberry">
              <Counter value={item.value} suffix={item.suffix} />
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
