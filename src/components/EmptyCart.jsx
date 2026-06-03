import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-3xl font-semibold text-[#2E2E2E]">
        Your cart is empty 🍦
      </h2>

      <p className="text-[#8B8B8B] mt-2 max-w-md">
        Looks like you haven’t added anything yet. Let’s fix that with something
        sweet.
      </p>

      <Link
        to="/menu"
        className="mt-6 bg-[#FF6F8D] text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
      >
        Browse Menu
      </Link>
    </div>
  );
};

export default EmptyCart;
