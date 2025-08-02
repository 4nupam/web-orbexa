"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { supabase } from "../../lib/supabaseClient";
import toast from "react-hot-toast";

export default function Pop({ onclose }: { onclose: () => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

 const handleSubmit = async () => {
  setError("");
  setSuccess("");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    setError("Please enter a valid email address.");
    return;
  }

  const { error, data } = await supabase
    .from("quick-connect")
    .insert([{ email }]);

  if (error) {
    console.error("Supabase insert error:", error);
    toast.error("Failed to save email. Try again.");
    setError("Failed to save email. Try again.");
  } else {
    console.log("Supabase insert success:", data);
    toast.success("Thanks for connecting!");
    setSuccess("Thanks for connecting!");
    setEmail("");

    // Close popup after short delay
    setTimeout(() => {
      onclose();
    }, 1000); 
  }
};


  return (
    <AnimatePresence>
      <motion.section
        onClick={onclose}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl w-full max-w-md overflow-hidden"
        >
          {/* Image */}
          <div className="relative w-full h-60 md:h-72">
            <Image
              src="/contact.jpg"
              alt="Contact"
              fill
              className="object-full w-full h-full rounded-t-2xl"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-4 text-white">
            <h2 className="text-2xl font-semibold text-center">Quick Connect</h2>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-3 rounded-md outline-none border-b-2 border-[var(--primary)] bg-white/10 placeholder:text-gray-300"
            />

            {error && <p className="text-sm text-red-400">{error}</p>}
            {success && <p className="text-sm text-green-400">{success}</p>}

            <button
              onClick={handleSubmit}
              className="bg-[var(--primary)] mt-2 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Submit
            </button>

            <div className="flex justify-between gap-4 mt-4">
              <a
                href="https://www.instagram.com/_orbexa_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-pink-600 text-white px-4 py-3 rounded-lg hover:opacity-90 transition"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="mailto:contactorbexa@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-3 rounded-lg hover:opacity-90 transition"
              >
                <FaEnvelope /> Gmail
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
