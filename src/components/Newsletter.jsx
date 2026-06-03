const Newsletter = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Icon */}
        <div
          className="mx-auto w-14 h-14 mb-6 flex items-center justify-center
                        rounded-full bg-pink-500 text-white text-2xl"
        >
          ✉️
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Join Our Sweet Community
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Subscribe to get exclusive offers, new flavor alerts, and special
          birthday treats!
        </p>

        {/* Form */}
        <form
          className="
            flex flex-col sm:flex-row gap-4
            items-center justify-center
          "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="
              w-full sm:w-80 px-5 py-3 rounded-full
              border border-gray-300 dark:border-slate-700
              bg-white dark:bg-slate-900
              text-gray-900 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-pink-500
            "
          />

          <button
            type="submit"
            className="
              px-8 py-3 rounded-full font-medium
              bg-gradient-to-r from-pink-500 to-purple-500
              text-white hover:opacity-90 transition
            "
          >
            Subscribe Now
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-500">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
