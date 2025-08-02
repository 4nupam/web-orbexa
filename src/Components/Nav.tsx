"use client";
import { useState } from "react";
import Pop from "./Pop";

export default function Nav() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-md">
        <div className="flex items-center justify-between container mx-auto px-4 md:px-8 py-3 text-[var(--text)]">
          {/* Logo */}
          <div className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center relative">
            <span className="bg-gradient-to-r from-[var(--primary)] via-pink-500 to-purple-500 text-transparent bg-clip-text animate-text-shine">
              O
            </span>
            <span className="bg-gradient-to-r from-[var(--primary)] via-pink-500 to-purple-500 text-transparent bg-clip-text animate-text-shine">rbexa</span>
          </div>


          {/* CTA Button */}
          <button
            onClick={() => setShowPopup(true)}
            className="px-4 cursor-pointer py-2 md:px-5 md:py-2 bg-gradient-to-r from-[var(--primary)] to-pink-500 text-white rounded-xl text-xs md:text-sm font-semibold uppercase tracking-wide transition-transform duration-200 hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
          >
            Quick Connect
          </button>
        </div>
      </nav>

      {/* Popup */}
      {showPopup && <Pop onclose={() => setShowPopup(false)} />}
    </>
  );
}
