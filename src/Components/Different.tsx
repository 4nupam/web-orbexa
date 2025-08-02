'use client';

import { motion } from 'framer-motion';
import React from 'react';

type CardProps = {
  label: string;
  description: string;
};

const data: CardProps[] = [
  {
    label: '01 Rapid Execution',
    description:
      'From concept to deployment in just two weeks — we operate with startup urgency to maximize your ROI.',
  },
  {
    label: '02 Elite Engineering Talent',
    description:
      'Your project is handled exclusively by senior engineers. No juniors, no outsourcing — just top-tier expertise.',
  },
  {
    label: '03 End-to-End Excellence',
    description:
      'We deliver seamless experiences, from stunning user interfaces to scalable backend systems.',
  },
  {
    label: '04 Seamless Collaboration',
    description:
      'Eliminate communication barriers. Work directly with your developer for fast, clear, and effective delivery.',
  },
];

export default function Different() {
  return (
    <section className="px-6 py-16 w-full text-[var(--text)] flex flex-col items-center justify-center gap-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-center"
      >
        WHY ARE WE DIFFERENT?
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-9xl">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
            className="bg-white shadow-xl hover:shadow-2xl rounded-2xl p-6 py-8 transition duration-300 ease-in-out border border-gray-200"
          >
            <h3 className="text-2xl font-bold mb-2 text-[var(--secondary)]">{item.label}</h3>
            <p className="text-xl font-semibold text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
