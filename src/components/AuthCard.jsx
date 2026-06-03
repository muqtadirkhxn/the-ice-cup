import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Phone } from "lucide-react";

const AuthCard = ({ mode, setMode }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password)
      return setError("Please fill all fields");
    if (!form.email.includes("@"))
      return setError("Enter a valid email address");

    setError("");
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        w-full max-w-sm sm:max-w-md
        bg-white dark:bg-[#0E1324]
        rounded-2xl shadow-xl
        p-6 sm:p-8
      "
    >
      {/* Tabs */}
      <div className="relative bg-vanilla dark:bg-[#060B1A] rounded-full p-1 mb-5 flex">
        <motion.div
          layout
          className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-white dark:bg-[#0E1324] shadow ${
            mode === "login" ? "left-1" : "left-1/2"
          }`}
        />
        {["login", "signup"].map((item) => (
          <button
            key={item}
            onClick={() => setMode(item)}
            className={`relative z-10 flex-1 py-2 text-xs sm:text-sm font-medium transition ${
              mode === item
                ? "text-chocolate dark:text-white"
                : "text-chocolate/60 dark:text-gray-400"
            }`}
          >
            {item === "login" ? "Login" : "Sign up"}
          </button>
        ))}
      </div>

      <h2 className="text-lg font-semibold sm:text-xl text-chocolate dark:text-white">
        {mode === "login" ? "Welcome back 👋" : "Create your account 🍨"}
      </h2>

      <p className="mb-5 text-xs sm:text-sm text-chocolate/60 dark:text-gray-400">
        {mode === "login"
          ? "Log in to manage orders and rewards"
          : "Join The Ice Cup for sweeter rewards"}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
          <input
            type="email"
            required
            className="peer w-full pl-10 py-2.5 sm:py-3 rounded-lg border bg-transparent outline-none focus:ring-2 focus:ring-strawberry dark:bg-[#060B1A]"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <label
            className="absolute left-10 top-3 text-xs sm:text-sm text-gray-400 bg-white dark:bg-[#0E1324] px-1 transition-all
            peer-focus:-top-2 peer-focus:text-xs peer-focus:text-strawberry
            peer-valid:-top-2 peer-valid:text-xs"
          >
            Email address
          </label>
        </div>

        {/* Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
          <input
            type={showPass ? "text" : "password"}
            required
            className="peer w-full pl-10 pr-10 py-2.5 sm:py-3 rounded-lg border bg-transparent outline-none focus:ring-2 focus:ring-strawberry dark:bg-[#060B1A]"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <label
            className="absolute left-10 top-3 text-xs sm:text-sm text-gray-400 bg-white dark:bg-[#0E1324] px-1 transition-all
            peer-focus:-top-2 peer-focus:text-xs peer-focus:text-strawberry
            peer-valid:-top-2 peer-valid:text-xs"
          >
            Password
          </label>
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute text-gray-400 right-3 top-3 hover:text-strawberry"
          >
            {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-red-500 sm:text-sm"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <button
          disabled={loading}
          className="w-full py-2.5 sm:py-3 rounded-lg text-white font-medium bg-gradient-to-r from-pink-500 to-strawberry hover:opacity-90 active:scale-95 transition disabled:opacity-60"
        >
          {loading
            ? "Processing..."
            : mode === "login"
            ? "Log in"
            : "Create account"}
        </button>
      </form>

      {/* Switch */}
      <p className="mt-6 text-xs text-center sm:text-sm text-chocolate/70 dark:text-gray-400">
        {mode === "login" ? (
          <>
            New here?{" "}
            <button
              onClick={() => setMode("signup")}
              className="font-medium text-strawberry hover:underline"
            >
              Create your account
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setMode("login")}
              className="font-medium text-strawberry hover:underline"
            >
              Log in
            </button>
          </>
        )}
      </p>
    </motion.div>
  );
};

export default AuthCard;
