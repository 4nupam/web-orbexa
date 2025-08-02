'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import type { Variants } from "framer-motion";

type Package = {
  title: string;
  price: { monthly: string; yearly: string };
  description: string;
  features: string[];
  cta: string;
};

const packages: Package[] = [
  {
    title: 'MVP LAUNCHPAD',
    price: { monthly: '$600', yearly: '$999' },
    description: 'Zero to MVP in ~2-3 weeks. Ideal for indie founders needing fast validation on a budget.',
    features: [
      'Frontend + Backend dev',
      '3-5 core features',
      'Mobile responsive design',
      'Analytics setup (PostHog or GA)',
      'Delivery in 2-3 weeks',
    ],
    cta: 'BUILD YOUR MVP',
  },
  {
    title: 'SAAS STARTER KIT',
    price: { monthly: '$700', yearly: '$1499' },
    description: 'Full product setup for lean SaaS startups. Scalable, secure, and ready to grow.',
    features: [
      'Auth + DB + APIs',
      'Stripe or Razorpay integration',
      'Dashboard + UI polish',
      'Basic admin panel',
      'Deployment & walkthrough',
    ],
    cta: 'LAUNCH YOUR SAAS',
  },
];


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1], 
    },
  }),
};

const Budget = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-16 px-4 bg-[var(--background)]">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-7xl font-extrabold text-center text-[var(--text)] drop-shadow-md"
      >
        PICK YOUR ROCKET
      </motion.h2>

      {/* Toggle Switch */}
      <div className="flex items-center gap-4 text-[var(--text)] text-sm md:text-lg font-semibold">
        <span>Monthly</span>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={() =>
              setBilling(prev => (prev === 'monthly' ? 'yearly' : 'monthly'))
            }
            checked={billing === 'yearly'}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[var(--primary)] transition-all after:content-[''] after:absolute after:left-[2px] after:top-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
        </label>
        <span>Yearly</span>
      </div>

      {/* Mobile View: Accordion */}
      <div className="md:hidden w-full space-y-6">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="rounded-2xl border border-[var(--grid-color)]  shadow-lg"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full cursor-pointer text-left px-6 py-4 text-xl font-bold text-[var(--primary)]"
            >
              {pkg.title}
            </button>

            {activeIndex === index && (
              <div className="px-6 pb-6 space-y-4">
                <span className="text-3xl font-extrabold text-[var(--text)]">
                  {pkg.price[billing]}
                </span>
                <p className="text-[var(--text)] text-base">{pkg.description}</p>
                <ul className="space-y-2 text-[var(--text)] text-sm">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-[var(--primary)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 mt-4 rounded-xl font-bold text-white bg-[var(--primary)] shadow-[0_0_20px_var(--primary)] transition-all"
                >
                  {pkg.cta}
                </motion.button>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Desktop View: Cards */}
      <div className="hidden md:grid grid-cols-2 gap-10 max-w-7xl w-full">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="flex flex-col justify-between p-10 rounded-3xl border border-[var(--grid-color)]  shadow-xl transition-transform hover:scale-[1.03] hover:shadow-[0_0_25px_var(--primary)]"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-extrabold text-[var(--primary)]">{pkg.title}</h3>
              <span className="text-4xl font-bold text-[var(--text)]">{pkg.price[billing]}</span>
              <p className="text-[var(--text)] text-base">{pkg.description}</p>
              <ul className="mt-4 space-y-3 text-[var(--text)] text-sm">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-[var(--primary)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 cursor-pointer w-full py-4 rounded-xl font-bold text-white bg-[var(--primary)] shadow-[0_0_20px_var(--primary)] transition-all"
            >
              {pkg.cta}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Budget;
