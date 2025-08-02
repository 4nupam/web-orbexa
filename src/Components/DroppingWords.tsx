import { motion } from "framer-motion";

const sentence = "Welcome to Orbexa";
const words = sentence.split(" ");

export default function DroppingWords() {
  return (
    <div className="text-center text-sm sm:text-base md:text-lg lg:text-3xl font-medium text-gray-600">
      <span className="block text-3xl sm:text-6xl text-[var(--text)] font-extrabold">
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            className="inline-block mx-1 sm:mx-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.2, // stagger effect
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </div>
  );
}
