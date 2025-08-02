"use client";

import Image from "next/image";
import Link from "next/link";

// Define the Project type for clear props
type Project = {
  id: number;
  title: string;
  description: string;
  images?: string ;
  tech: string[];
  github: string;
  live: string;
};

interface Props {
  project: Project;
}

// Fallback image if no image is provided
const fallbackImage = "https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg";

export default function ProjectCard({ project }: Props) {
  const imageSrc = project.images ?? fallbackImage;
  console.log("Project Image Source:", imageSrc);

  return (
    <div
      className="group relative h-[450px] w-full max-w-sm transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
    >
      {/* Project Image */}
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={imageSrc ? imageSrc : fallbackImage}
          alt={`Project Image for ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay for a subtle hover effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>

      {/* Content Area */}
      <div className="absolute bottom-0 w-full  text-white transition-transform duration-500 group-hover:-translate-y-1">

        {/* Gradient Background */}
        <div className="w-full h-full bg-gradient-to-t from-black via-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 rounded-b-2xl">



          {/* Project Title and Description */}
          <h2 className=" text-3xl opacity-0 font-bold leading-tight drop-shadow-md text-neutral-200 group-hover:opacity-100">
            {project.title}
          </h2>
          {/* Tech Stack Tags */}
          <span className="inline-block rounded-full opacity-0 mb-4 bg-indigo-500/80 px-3 py-2 text-base font-semibold backdrop-blur-sm transition-colors duration-300 group-hover:opacity-100">
            {project.tech}
          </span>
          <p className="text-sm font-light leading-relaxed text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <Link
              href={project.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 transform rounded-full bg-white px-4 py-2 text-center text-sm font-semibold text-gray-800 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 hover:shadow-lg
          ${!project.github && "cursor-not-allowed opacity-50"}
        `}
              onClick={(e) => {
                if (!project.github) e.preventDefault();
              }}
            >
              GitHub
            </Link>

            <Link
              href={project.live || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 transform rounded-full bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-lg
          ${!project.live && "cursor-not-allowed opacity-50"}
        `}
              onClick={(e) => {
                if (!project.live) e.preventDefault();
              }}
            >
              Live Demo
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}