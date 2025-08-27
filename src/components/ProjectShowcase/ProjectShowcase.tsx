"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "FileEx",
    description: "A modern, feature-rich file explorer built with Tauri, React, TypeScript, and shadcn/ui.",
    longDescription: "FileEx provides a clean, intuitive interface for managing files and folders with advanced features and beautiful UI components.",
    category: "Desktop Development",
    tags: ["rust", "typescript", "tauri", "tailwindcss", "vite", "shadcnui"],
    image: "/projects/fileex.png",
    liveUrl: "https://github.com/Duong Van Manhbig/fileEx/releases/",
    githubUrl: "https://github.com/Duong Van Manhbig/fileEx",
    featured: true
  },
  {
    id: "2",
    title: "Backtool",
    description: "A CLI tool to generate backend structures for Node.js applications with support for multiple databases and a visually appealing user interface.",
    longDescription: "BackTool simplifies the process of setting up a Node.js backend by generating a complete project structure, including a server entry point, models, database configuration, controllers, routes, middleware, and a customized package.json. It supports MongoDB, PostgreSQL, MySQL, and SQLite, allowing developers to quickly scaffold a backend tailored to their preferred database.",
    category: "Web Development",
    tags: ["chalk", "Inquirer", "Figlet", "commander"],
    image: "/projects/backtool.png",
    liveUrl: "https://www.npmjs.com/package/backtool",
    githubUrl: "https://github.com/Duong Van Manhbig/backTool",
    featured: true
  },
  {
    id: "3", 
    title: "Persona AI",
    description: "A full-stack web application that predicts personality type (introvert, extrovert, or ambivert) using AI/ML models.",
    longDescription: "A full-stack web application that predicts personality type (introvert, extrovert, or ambivert) using AI/ML models. Built with Next.js (frontend) and Python FastAPI (backend).",
    category: "AI & ML",
    tags: ["Nextjs", "Typescript", "numpy", "scikit-learn", "Fastapi", "pandas"],
    image: "/projects/Persona-AI.png",
    liveUrl: "https://introver-extrovert.vercel.app/",
    githubUrl: "https://github.com/Duong Van Manhbig/Introver-Extrovert",
    featured: false
  },
  {
    id: "4",
    title: "Satellite AI",
    description: "A modern web application that uses AI to classify different types of areas from satellite images.",
    longDescription: "A modern web application that uses AI to classify different types of areas from satellite images. The application can identify various terrains like deserts, plains, and other landscapes from satellite imagery.",
    category: "AI & ML",
    tags: ["Nextjs", "Tensorflow", "Numpy", "CNN","Fastapi", "Pandas"],
    image: "/projects/satellite-ai.png",
    liveUrl: "https://satellite-ai-three.vercel.app/",
    githubUrl: "https://github.com/Duong Van Manhbig/Satellite-AI",
    featured: false
  },
  {
    id: "5",
    title: "TomatoGuard AI",
    description: "TomatoGuard AI is a comprehensive web application that uses Convolutional Neural Networks (CNN) to detect diseases in tomato plants.",
    longDescription: "TomatoGuard AI is a comprehensive web application that uses Convolutional Neural Networks (CNN) to detect diseases in tomato plants. The system provides real-time analysis, detailed disease information, and research insights.",
    category: "AI & ML",
    tags: ["Nextjs", "Tensorflow", "Numpy", "CNN","Fastapi", "Pandas"],
    image: "/projects/tomato-guard-ai.png",
    liveUrl: "https://cnn-based-tomato-disease-prediction.vercel.app/",
    githubUrl: "https://github.com/Duong Van Manhbig/CNN-based-Tomato-disease-prediction",
    featured: true
  },
  {
    id: "6",
    title: "Crop Recommendation System",
    description: "A comprehensive machine learning-powered web application that provides intelligent crop recommendations based on soil and environmental parameters.",
    longDescription: "A comprehensive machine learning-powered web application that provides intelligent crop recommendations based on soil and environmental parameters.The system helps farmers and agricultural professionals make informed decisions about crop selection to optimize yield and sustainability.",
    category: "AI & ML",
    tags: ["Nextjs", "Tensorflow", "Numpy", "CNN","Fastapi", "Pandas"],
    image: "/projects/crop-ai.png",
    liveUrl: "https://crop-recommendation-system-iota.vercel.app/",
    githubUrl: "https://github.com/Duong Van Manhbig/crop-recommendation-system",
    featured: true
  },
  {
    id: "7",
    title: "Gem AI",
    description: "Gem AI App is a versatile application that allows users to generate various types of creative content, including songs, stories, and paragraphs.",
    longDescription: "Gem AI App is a versatile application that allows users to generate various types of creative content, including songs, stories, and paragraphs. It also features a dynamic conversation module with an AI model, as well as built-in connectivity checks.",
    category: "Mobile Development",
    tags: ["dart", "firebase", "chatbot", "flutter", "story-generator", "gemini-api", "lyrics-generator"],
    image: "/projects/dashboard.jpg",
    liveUrl: "https://github.com/Duong Van Manhbig/Gemini_app",
    githubUrl: "https://github.com/Duong Van Manhbig/Gemini_app",
    featured: false
  }
];

const categories = ["All", "Web Development", "Mobile Development", "Game Development", "AI & ML", "Desktop Development"];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="mx-auto py-20 w-full max-w-6xl">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-bold text-3xl md:text-4xl"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-2xl text-slate-400"
        >
          A showcase of my recent work across different technologies and platforms
        </motion.p>
      </div>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-4"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeCategory === category
                ? "bg-white/10 text-white border border-white/20 shadow-lg"
                : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="bg-white/5 hover:bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
              {/* Project Image */}
              <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-600/20 h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="opacity-50 group-hover:opacity-70 text-6xl transition-opacity duration-300">
                    {/* {project.category === "Web Development" && "🌐"} */}
                    {/* {project.category === "AI & ML" && "🤖"} */}
                    {/* {project.category === "Game Development" && "🎮"} */}
                    {project.category === "Mobile Development" ? "📱" :
                    <Image src={project.image} alt={project.title} fill className="object-cover"/>
                    }
                  </div>
                </div>
                {project.featured && (
                  <div className="top-4 right-4 absolute bg-gradient-to-r from-yellow-500 to-orange-500 px-2 py-1 rounded-full font-bold text-black text-xs">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="mb-2 font-bold text-white group-hover:text-blue-400 text-xl transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mb-4 text-slate-400 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 px-2 py-1 rounded-full text-slate-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-white/10 px-2 py-1 rounded-full text-slate-300 text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-medium text-sm text-center transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 hover:bg-white/10 px-4 py-2 border border-white/20 rounded-lg font-medium text-sm text-center transition-colors duration-300"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-black/90 border border-white/20 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-bold text-white text-2xl">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  ✕
                </button>
              </div>
              
              <p className="mb-6 text-slate-300 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 px-3 py-1 rounded-full text-slate-300 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    View Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    className="hover:bg-white/10 px-6 py-3 border border-white/20 rounded-lg font-medium transition-colors duration-300"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}