"use client";

import { motion } from "framer-motion";
import DroppingWords from "./DroppingWords";

export default function Hero() {
  return (
    <motion.section
      className="hero-background w-full overflow-hidden text-[var(--text)]"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* === Glowing Background Shapes === */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Pink Circle Top Left */}
        <div className="absolute top-[-5%] left-[-10%] w-60 h-60 bg-pink-500 opacity-30 blur-3xl rounded-full animate-pulse"></div>

        {/* Cyan Oval Center Right */}
        <div className="absolute top-1/3 right-[-10%] w-96 h-48 bg-cyan-400 opacity-20 blur-2xl rounded-full rotate-45 animate-spin-slow"></div>

        {/* Orange Circle Bottom Left */}
        <div className="absolute bottom-[-10%] left-[20%] w-72 h-72 bg-orange-400 opacity-20 blur-2xl rounded-full animate-pulse"></div>
      </div>

      {/* === Main Content === */}
      <div className="flex flex-col items-center justify-center h-dvh w-full px-4 text-center space-y-6">
        {/* Welcome + Typewriter Line */}
        <DroppingWords />

        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          LAUNCH YOUR{" "}
          <span className="inline-block px-4 py-2 rounded-xl lg:text-8xl border-4 text-white border-white bg-[var(--primary)] shadow-[0_0_20px_var(--primary)]">
            MVP
          </span>{" "}
          IN
        </motion.h1>

        {/* Subheading */}
        <motion.span
          className="inline-block px-6 py-2 rounded-xl border-4 border-white bg-[var(--primary)] text-white text-3xl sm:text-4xl md:text-5xl lg:text-9xl font-extrabold shadow-[0_0_30px_var(--primary)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          2 WEEKS
        </motion.span>

        {/* Tagline */}
        <motion.p
          className="relative mt-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-widest uppercase text-gray-500"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Dominate · Innovate · Elevate
          <span className="block w-0 h-[2px] bg-[var(--primary)] mt-1 mx-auto animate-expand"></span>
        </motion.p>
      </div>
       


      {/* Scroll Down Arrow - only visible on lg+ screens */}
      {/* <motion.div
        className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a
          href="#next-section"
          className="flex flex-col items-center group cursor-pointer"
        >
          <div className="w-6 h-6 border-b-2 border-r-2 border-[var(--primary)] transform rotate-45 animate-bounce group-hover:scale-110 transition duration-300"></div>
          <span className="text-sm text-gray-500 mt-1 group-hover:text-[var(--primary)] transition duration-300">
            Scroll Down
          </span>
        </a>
      </motion.div> */}
    </motion.section>
  );
}
