"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import ProjectCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Project = {
  id: number;
  name: string;
  desc: string;
  images: string;
  techStack: string[];
  github: string;
  liveDemo: string;
};

type SupabaseProject = {
  id: number;
  title: string;
  description: string;
  images: string;
  tech: string[];
  github: string;
  live: string;
};

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const pauseRef = useRef(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const autoScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || pauseRef.current) return;

    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    } else {
      container.scrollLeft += 0.5;
    }

    animationRef.current = requestAnimationFrame(autoScroll);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from("projects").select("*");

      if (error) {
        console.error("Error fetching projects:", error.message);
      } else if (data) {
        const normalized: Project[] = data.map((item: SupabaseProject) => ({
          id: item.id,
          name: item.title,
          desc: item.description,
          images: item.images,
          techStack: item.tech || [],
          github: item.github,
          liveDemo: item.live,
        }));
console.log("Fetched projects:", normalized);
        setProjects(normalized);
      }
    };

    fetchProjects();
    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [autoScroll]);

  useEffect(() => {
    autoScroll();
  }, [autoScroll]);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    pauseRef.current = true;

    const scrollAmount = 350;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => {
      pauseRef.current = false;
    }, 1000);
  };

  return (
    <section className="relative w-full px-6 sm:px-6 py-12 sm:py-16 flex flex-col items-center">
      <h2 className="flex flex-col md:flex-row text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-12">
        <span className="inline-block text-[var(--primary)] animate-pulse">Dominate</span>
        <span className="hidden md:inline-block mx-2 text-[var(--text)] opacity-70">:</span>
        <span className="inline-block text-[var(--primary)] animate-pulse delay-100">Innovate</span>
        <span className="hidden md:inline-block mx-2 text-[var(--text)] opacity-70">:</span>
        <span className="inline-block text-[var(--primary)] animate-pulse delay-200">Elevate</span>
      </h2>

      {/* Scroll buttons */}
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-3 sm:left-4 top-[90%] transform -translate-y-1/2 bg-[var(--background)] p-2 sm:p-3 cursor-pointer rounded-full shadow-md z-10 hover:scale-110 transition"
      >
        <ChevronLeft className="text-[var(--text)] w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={() => handleScroll("right")}
        className="absolute right-3 sm:right-4 top-[90%] transform -translate-y-1/2 bg-[var(--background)] p-2 sm:p-3 cursor-pointer rounded-full shadow-md z-10 hover:scale-110 transition"
      >
        <ChevronRight className="text-[var(--text)] w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Project Cards Container */}
      <div
        ref={scrollRef}
        className="flex gap-1 sm:gap-6 overflow-x-auto no-scrollbar w-full py-2 scroll-smooth scroll-pl-4 snap-x snap-mandatory"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="min-w-[85vw] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] flex-shrink-0 snap-start"
          >
            <ProjectCard
              project={{
                id: project.id,
                title: project.name,
                description: project.desc,
                images: project.images,
                tech: project.techStack,
                github: project.github,
                live: project.liveDemo,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
