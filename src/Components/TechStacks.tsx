"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { supabase } from "../../lib/supabaseClient";
import Image from "next/image";

type TechStack = {
  id: number;
  tech?: string;
  images?: string;
};

export default function TechStacks() {
  const [techStacks, setTechStacks] = useState<TechStack[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const pauseRef = useRef(false);

  const autoScroll = useCallback(() => {
  const container = scrollRef.current;
  if (!container || pauseRef.current) return;

  if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
    container.scrollLeft = 0;
  } else {
    container.scrollLeft += 0.5;
  }

  animationRef.current = requestAnimationFrame(autoScroll);
}, []);


 useEffect(() => {
  const fetchTechStacks = async () => {
    const { data, error } = await supabase.from("techStack").select("*");
    if (error) {
      console.error("Error fetching tech stacks:", error.message);
    } else {
      setTechStacks(data || []);
    }
  };

  fetchTechStacks();
  animationRef.current = requestAnimationFrame(autoScroll);

  return () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };
}, [autoScroll]);


  return (
    <section className="w-full px-4 md:px-8 py-10 bg-transparent">
      {/* Optional Heading */}
      {/* <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Tech Stacks</h2> */}

      <div
        ref={scrollRef}
        className="flex items-center justify-between gap-6 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {techStacks.map((stack) => (
          <div
            key={stack.id}
            className="flex flex-col items-center justify-center min-w-[80px] sm:min-w-[100px] p-2"
          >
            {stack.images ? (
              <Image
                src={stack.images}
                alt={stack.tech || "tech"}
                width={80}
                height={80}
                className="object-contain w-32 h-32"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-300 rounded-full" />
            )}
            <span className="mt-2 text-xs text-center text-gray-700 dark:text-gray-200 font-medium">
              {stack.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
