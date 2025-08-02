// components/Faq.tsx
'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';

export const faqData = [
  {
    ques: "What does Orbexa deliver within the MVP timeline?",
    ans: "Orbexa delivers a fully operational MVP — complete with frontend, backend, secure authentication, core functionalities, deployment, and performance monitoring — optimized for real-user onboarding from day one.",
  },
  {
    ques: "Which technologies does Orbexa specialize in?",
    ans: "We build using a modern, scalable stack: Next.js, TypeScript, Node.js, PostgreSQL, Tailwind, Docker, Redis, Stripe, and Vercel/AWS — ensuring speed, performance, and flexibility.",
  },
  {
    ques: "How do you ensure quality without compromising speed?",
    ans: "Every project is led by senior engineers with 5+ years of experience. We follow strict version control, modular architecture, peer code reviews, test coverage, and daily standups to maintain momentum without sacrificing quality.",
  },
  {
    ques: "What’s included in your SaaS development service?",
    ans: "Our full-stack package includes user dashboards, admin panels, role-based access, billing integrations, email workflows, responsive UI, API endpoints, deployment pipelines, and scalability best practices — all production-ready.",
  },
  {
    ques: "Is post-launch support part of the offering?",
    ans: "Yes. We provide 30 days of complimentary post-launch support. Additional maintenance, feature development, and scalability consulting can be included in extended engagement plans.",
  },
  {
    ques: "What sets Orbexa apart from other dev partners?",
    ans: "Orbexa blends startup agility with engineering maturity. We offer senior-only talent, direct client-engineer collaboration, speed without shortcuts, and a laser focus on execution — no middlemen, no fluff.",
  },
];


const AccordionItem = ({ ques, ans }: { ques: string; ans: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-300 py-4 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full cursor-pointer text-left font-semibold text-gray-800 hover:text-blue-600 transition duration-200"
      >
        <span>{ques}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden text-gray-600 mt-2 pr-6"
          >
            {ans}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row justify-center py-16 px-4 md:px-12 gap-10 max-w-full mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full md:w-1/2"
      >
        <Image
          src="/Faq.png"
          alt="FAQ Image"
          width={500}
          height={500}
          className="w-full max-h-full h-auto rounded-xl object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2"
      >
        <h2 className="text-4xl md:text-4xl font-extrabold text-[var(--primary)] mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqData.map((item, idx) => (
            <AccordionItem key={idx} ques={item.ques} ans={item.ans} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
