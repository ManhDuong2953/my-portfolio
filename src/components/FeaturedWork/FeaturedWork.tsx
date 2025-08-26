"use client";
import { motion } from "motion/react";
import Image  from  "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  code: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "FileShare",
    description: "A modern, secure file sharing platform built with Next.js, NestJS, and Appwrite. Share files with expirable links, track downloads, and manage your uploads with a beautiful, responsive interface.",
    image: "/projects/fileshare.png",
    link: "https://file-share-three-mu.vercel.app/",
    code:"https://github.com/Duong Van Manhbig/FileShare",
    tags: ["Next.js", "TypeScript", "Appwrite", "TailwindCSS","Nestjs"],
  },
  {
    title: "Music Level",
    description: "An AI-powered music generation platform that allows users to create unique musical compositions using artificial intelligence. Built with a modern tech stack featuring NestJS backend and Next.js frontend.",
    image: "/projects/music-level.png",
    link: "https://music-level.vercel.app/",
    code:"https://github.com/Duong Van Manhbig/music_level",
    tags: ["Next.js", "TypeScript", "Appwrite", "TailwindCSS","Nestjs", "Gemini API"],
  },
];

export default function FeaturedWork() {
  return (
    <section className="mx-auto py-20 w-full max-w-6xl">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-bold text-3xl md:text-4xl"
        >
          Featured Work
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-2xl text-slate-400"
        >
          Showcasing some of my best projects and their impact
        </motion.p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="items-center gap-12 grid md:grid-cols-2"
          >
            {/* Project Image */}
            <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="group relative bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl h-[400px] overflow-hidden">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="text-8xl">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* Overlay with project info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="right-6 bottom-6 left-6 absolute">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div>
                <h3 className="mb-4 font-bold text-white group-hover:text-blue-400 text-2xl md:text-3xl transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 border border-white/20 rounded-xl text-slate-300 hover:text-white text-sm transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 hover:from-blue-500 to-purple-600 hover:to-purple-500 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href={project.code}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 hover:bg-white/10 px-6 py-3 border border-white/20 rounded-xl font-semibold text-white transition-all duration-300"
                >
                  View Code
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
