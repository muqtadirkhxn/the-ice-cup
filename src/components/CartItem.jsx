// import { motion } from "framer-motion";
// import { useCart } from "../context/CartContext";

// const CartItem = ({ item }) => {
//   const { increaseQty, decreaseQty, removeItem } = useCart();

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, x: -50 }}
//       className="flex gap-5 pb-6 border-b border-[#F0E6E0]"
//     >
//       <img src={item.image} className="object-cover w-24 h-24 rounded-xl" />

//       <div className="flex-1">
//         <div className="flex justify-between">
//           <h3 className="font-semibold">{item.name}</h3>
//           <span>${(item.price * item.qty).toFixed(2)}</span>
//         </div>

//         <p className="text-sm text-[#8B8B8B] mt-1">{item.description}</p>

//         <div className="flex items-center gap-3 mt-4">
//           <button
//             onClick={() => decreaseQty(item.id)}
//             className="w-8 h-8 border rounded-full hover:bg-gray-100"
//           >
//             −
//           </button>

//           <motion.span
//             key={item.qty}
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//           >
//             {item.qty}
//           </motion.span>

//           <button
//             onClick={() => increaseQty(item.id)}
//             className="w-8 h-8 border rounded-full hover:bg-gray-100"
//           >
//             +
//           </button>

//           <button
//             onClick={() => removeItem(item.id)}
//             className="ml-4 text-sm text-red-400 hover:underline"
//           >
//             Remove
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default CartItem;

import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeItem } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex gap-5 pb-6 border-b border-[#F0E6E0] dark:border-slate-700 transition-colors duration-300"
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-24 h-24 rounded-xl"
        />
      )}

      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-semibold">{item.name}</h3>
          <span>₹{(item.price * item.qty).toFixed(2)}</span>
        </div>

        <p className="text-sm text-[#8B8B8B] dark:text-gray-400 mt-1">
          {item.description}
        </p>

        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => decreaseQty(item.id)}
            className="w-8 h-8 rounded-full border border-[#F0E6E0] dark:border-slate-600"
          >
            −
          </button>

          <motion.span
            key={item.qty}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            {item.qty}
          </motion.span>

          <button
            onClick={() => increaseQty(item.id)}
            className="w-8 h-8 rounded-full border border-[#F0E6E0] dark:border-slate-600"
          >
            +
          </button>

          <button
            onClick={() => removeItem(item.id)}
            className="ml-4 text-sm text-red-400 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
