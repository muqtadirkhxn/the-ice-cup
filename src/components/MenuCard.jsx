import React from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const MenuCard = ({ title, desc, price, tag, onAdd, index }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: `${title}-${index}`,
      name: title,
      description: desc,
      price: Number(price.replace("₹", "")),
      image: "",
    });

    onAdd();
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      className="flex justify-between gap-4 p-6 transition bg-white border rounded-2xl dark:bg-white/5 border-black/5 dark:border-white/10"
    >
      <div>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          {tag && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400">
              {tag}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-[#3A1F1D]/70 dark:text-[#F5EDE6]/70">
          {desc}
        </p>
      </div>

      <div className="text-right shrink-0">
        <p className="font-semibold">{price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-3 text-sm font-medium text-pink-500 transition active:scale-95"
        >
          Add to order
        </button>
      </div>
    </motion.div>
  );
};

export default MenuCard;
