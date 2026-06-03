import { useState } from "react";
import { motion } from "framer-motion";
import AuthCard from "../components/AuthCard";
import cafeImg from "../assets/auth/cafe.jpg";

const Auth = () => {
  const [mode, setMode] = useState("login");

  return (
    <section className="min-h-screen bg-vanilla dark:bg-[#060B1A] flex items-center justify-center px-4 sm:px-6 lg:px-10">
      <div className="grid items-center w-full grid-cols-1 gap-10 max-w-7xl lg:grid-cols-2 lg:gap-16">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center lg:text-left"
        >
          <span className="inline-block px-4 py-1 mt-2 text-xs font-medium rounded-full bg-strawberry/20 text-strawberry sm:text-sm">
            🍨 Welcome to The Ice Cup
          </span>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-chocolate dark:text-white">
            Sign in for faster scoops & sweeter rewards
          </h1>

          <p className="max-w-md mx-auto text-sm text-chocolate/70 dark:text-gray-300 lg:mx-0 sm:text-base">
            Save your favorite flavors, earn rewards, and enjoy a smoother
            checkout experience.
          </p>

          {/* Image hidden on small screens */}
          <motion.img
            src={cafeImg}
            alt="Ice Cup Cafe"
            className="hidden max-w-md shadow-lg lg:block rounded-2xl"
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>

        {/* RIGHT CARD */}
        <div className="flex justify-center">
          <AuthCard mode={mode} setMode={setMode} />
        </div>
      </div>
    </section>
  );
};

export default Auth;
