// import { motion } from "framer-motion";
// import CartItem from "../components/CartItem";
// import EmptyCart from "../components/EmptyCart";
// import { useCart } from "../context/CartContext";

// const Cart = () => {
//   const { cart, subtotal, tax, total } = useCart();

//   // EMPTY CART
//   if (cart.length === 0) {
//     return (
//       <div className="min-h-screen bg-[#FFF8F4] px-4 md:px-10 pt-24 pb-10">
//         <EmptyCart />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#FFF8F4] px-4 md:px-10 pt-24 pb-10">
//       <h1 className="text-3xl font-bold text-[#2E2E2E]">My Cart</h1>
//       <p className="text-[#8B8B8B] mt-1">
//         Review your delicious picks before checkout.
//       </p>

//       <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3">
//         {/* LEFT */}
//         <motion.div layout className="space-y-6 lg:col-span-2">
//           {cart.map((item) => (
//             <CartItem key={item.id} item={item} />
//           ))}
//         </motion.div>

//         {/* RIGHT */}
//         <div className="bg-white rounded-2xl p-6 h-fit sticky top-24 border border-[#F0E6E0]">
//           <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>

//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between">
//               <span className="text-[#8B8B8B]">Subtotal</span>
//               <span>₹{subtotal.toFixed(2)}</span>
//             </div>

//             <div className="flex justify-between">
//               <span className="text-[#8B8B8B]">Sales Tax (8%)</span>
//               <span>₹{tax.toFixed(2)}</span>
//             </div>

//             <div className="flex justify-between">
//               <span className="text-[#8B8B8B]">Pickup Fee</span>
//               <span className="text-green-500">Free</span>
//             </div>

//             <hr />

//             <div className="flex justify-between text-lg font-semibold">
//               <span>Total</span>
//               <span>₹{total.toFixed(2)}</span>
//             </div>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-6 w-full bg-[#FF6F8D] text-white py-3 rounded-xl font-medium"
//           >
//             Proceed to Checkout →
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import { motion } from "framer-motion";
import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, subtotal, tax, total } = useCart();

  // EMPTY CART
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF8F4] dark:bg-slate-900 px-4 md:px-10 pt-24 pb-10 transition-colors duration-300">
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F4] dark:bg-slate-900 px-4 md:px-10 pt-24 pb-10 transition-colors duration-300 text-[#2E2E2E] dark:text-white">
      <h1 className="text-3xl font-bold">My Cart</h1>

      <p className="text-[#8B8B8B] dark:text-gray-400 mt-1">
        Review your delicious picks before checkout.
      </p>

      <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3">
        {/* LEFT – CART ITEMS */}
        <motion.div layout className="space-y-6 lg:col-span-2">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </motion.div>

        {/* RIGHT – ORDER SUMMARY */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 h-fit sticky top-24 border border-[#F0E6E0] dark:border-slate-700 transition-colors duration-300">
          <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-[#8B8B8B] dark:text-gray-400">
                Subtotal
              </span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#8B8B8B] dark:text-gray-400">
                Sales Tax (8%)
              </span>
              <span>₹{tax.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#8B8B8B] dark:text-gray-400">
                Pickup Fee
              </span>
              <span className="text-green-500">Free</span>
            </div>

            <hr className="my-3 border-[#F0E6E0] dark:border-slate-700" />

            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          {/* PROMO INPUT */}
          <div className="flex gap-2 mt-6">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-1 border border-[#F0E6E0] dark:border-slate-600 bg-white dark:bg-slate-700 rounded-xl px-4 py-2 text-sm focus:outline-none"
            />
            <button className="border border-[#F0E6E0] dark:border-slate-600 rounded-xl px-4 text-sm">
              Apply
            </button>
          </div>

          {/* CHECKOUT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full bg-[#FF6F8D] text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Proceed to Checkout →
          </motion.button>

          <p className="text-center text-xs text-[#8B8B8B] dark:text-gray-400 mt-3">
            🔒 Secure Checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
