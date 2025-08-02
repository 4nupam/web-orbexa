"use client";

import { motion } from "framer-motion";
import { TbHandClick } from "react-icons/tb";

export default function Description() { 
  return (
    <section
      id="projects"
      className=" px-6 sm:px-10 md:px-20 text-[var(--text)]"
    >
      {/* Intro Paragraph */}
      <motion.p
        className="max-w-4xl mx-auto text-center text-base sm:text-lg md:text-xl text-gray-800 font-extrabold leading-relaxed mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        The best <strong className="text-[var(--primary)]">MVP</strong> and <strong className="text-[var(--primary)]">SaaS</strong> development agency. Elite
        14-day delivery service trusted by 50+ startups. Where rapid delivery meets
        uncompromising quality.
      </motion.p>

      {/* Section Title */}
      <motion.h2
        className="text-2xl flex items-center justify-center sm:text-4xl md:text-5xl font-extrabold text-center mb-12 text-[var(--text)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span
  className="flex items-center w-96  justify-center cursor-pointer px-4 py-2 rounded-xl border-4 border-white 
             bg-[var(--primary)] text-white shadow-[0_0_20px_var(--primary)] 
             hover:scale-110 transition-transform duration-300 ease-in-out"
>
  <TbHandClick/>  
   to Craft 
</span>

      </motion.h2>

   
    </section>
  );
}
