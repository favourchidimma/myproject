"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white bg-[url('/backgroundvideo.gif')] bg-cover bg-center h-80vh">
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          The Ultimate Nightlife Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-2xl"
        >
          Exclusive Events. Unforgettable Nights.
        </motion.p>

        <motion.a
          href="/events"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 inline-block bg-[#E50914] hover:bg-[#b20710] px-6 py-3 text-lg font-semibold rounded-full transition"
        >
          Explore Events
        </motion.a>
      </div>
    </section>
  );
}
