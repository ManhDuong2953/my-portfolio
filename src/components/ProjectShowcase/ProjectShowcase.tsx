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
  images: string[]; // ✅ thay vì 1 ảnh thì là mảng ảnh
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Zing MP3 Clone",
    description: "A music streaming app clone built with PHP and Cloudinary.",
    longDescription:
      "This project showcases a clone of the Zing MP3 music streaming app, utilizing PHP for the backend and Cloudinary for media storage.",
    category: "Web Development",
    tags: ["PHP", "Cloudinary", "Music Streaming"],
    images: [
      "/projects/zingmp3_1.png",
      "/projects/zingmp3_2.png",
      "/projects/zingmp3_3.png",
      "/projects/zingmp3_4.png",
      "/projects/zingmp3_5.png",
    ],
    githubUrl: "https://github.com/ManhDuong2953/zingmp3.git",
    featured: true,
  },
  {
    id: "2",
    title: "Mobile Food App",
    description: "A modern food delivery app built with Flutter.",
    longDescription:
      "This mobile app showcases the capabilities of Flutter, providing a clean and intuitive interface for users. Restful API with Nodejs",
    category: "Mobile Development",
    tags: ["Flutter", "Dart", "Nodejs", "MySQL"],
    images: [
      "/projects/foodapp_0.webp",
      "/projects/foodapp_1.png",
      "/projects/foodapp_2.png",
      "/projects/foodapp_3.png",
      "/projects/foodapp_4.png",
      "/projects/foodapp_5.png",
      "/projects/foodapp_6.png",
      "/projects/foodapp_7.png",
    ],
    githubUrl: "https://github.com/ManhDuong2953/FoodApp.git",
    featured: true,
  },
  {
    id: "3",
    title: "Landingpage Dental",
    description:
      "A modern, feature-rich landing page built with VueJS, Tailwind CSS and AOS.",
    longDescription:
      "This landing page showcases the capabilities of the Dental, providing a clean and intuitive interface for users.",
    category: "Web Development",
    tags: ["VueJS", "TailwindCSS", "AOS"],
    images: ["/projects/landingpage-dental.png"],
    liveUrl: "https://manhduong2953.github.io/landingpage-dental/",
    githubUrl: "https://github.com/ManhDuong2953/landingpage-dental.git",
    featured: false,
  },
  {
    id: "4",
    title: "Landingpage Furniture",
    description:
      "A modern, feature-rich landing page built with VueJS, Tailwind CSS and AOS",
    longDescription:
      "This landing page showcases the capabilities of Furniture, providing a clean and intuitive interface for users.",
    category: "Web Development",
    tags: ["VueJS", "TailwindCSS", "AOS"],
    images: ["/projects/landingpage-furniture.png"],
    liveUrl: "https://landingpage-furniture.vercel.app/",
    githubUrl: "https://github.com/ManhDuong2953/landingpage-furniture.git",
    featured: false,
  },
  {
    id: "5",
    title: "Landingpage AI Go SaaS",
    description:
      "Developed a modern, feature-rich landing page built with VueJS, Tailwind CSS and AOS.",
    longDescription:
      "This landing page showcases the capabilities of AI, providing a clean and intuitive interface for users.",
    category: "Web Development",
    tags: ["VueJS", "TailwindCSS", "AOS"],
    images: ["/projects/landingpage-ai.png"],
    liveUrl: "https://landingpage-ai-go-sass.vercel.app/",
    githubUrl: "https://github.com/ManhDuong2953/landingpage-ai-go-sass.git",
    featured: false,
  },
  {
    id: "6",
    title: "Landingpage Course",
    description:
      "A modern, feature-rich landing page built with VueJS, Tailwind CSS and AOS.",
    longDescription:
      "This landing page showcases the capabilities of the Course, providing a clean and intuitive interface for users.",
    category: "Web Development",
    tags: ["VueJS", "TailwindCSS", "AOS"],
    images: ["/projects/landingpage-course.png"],
    liveUrl: "https://landingpage-courses-2.vercel.app/",
    githubUrl: "https://github.com/ManhDuong2953/landingpage-courses-2.git",
    featured: false,
  },
  {
    id: "7",
    title: "Landingpage TheMarch88",
    description:
      "A modern, feature-rich landing page built with VueJS, Tailwind CSS and GSAP Scroll Trigger.",
    longDescription:
      "This landing page showcases the capabilities of TheMarch88, providing a clean and intuitive interface for users.",
    category: "Web Development",
    tags: ["VueJS", "TailwindCSS", "GSAP"],
    images: ["/projects/landingpage-themarch88.png"],
    liveUrl: "https://landingpage-lac-tau.vercel.app/",
    githubUrl: "https://github.com/ManhDuong2953/demo.git",
    featured: false,
  },
  {
    id: "8",
    title: "Landingpage Xiaomi 15",
    description:
      "A modern, feature-rich landing page built with VueJS, Tailwind CSS and GSAP Scroll Trigger.",
    longDescription:
      "This landing page showcases the capabilities of the Xiaomi 15, providing a clean and intuitive interface for users.",
    category: "Web Development",
    tags: ["GSAP ScrollTrigger/ScrollSmoother"],
    images: ["/projects/xiaomi-15.png"],
    liveUrl: "https://manhduong2953.github.io/GSAP_SCROLL_FRAME/",
    githubUrl: "https://github.com/ManhDuong2953/GSAP_SCROLL_FRAME.git",
    featured: false,
  },
  {
    id: "9",
    title: "Mephim Web App",
    description: "A modern web application built with React and TMDB API.",
    longDescription:
      "This web application showcases the capabilities of Mephim, providing a clean and intuitive interface for users.",
    category: "Web Development",
    tags: ["React", "TMDB"],
    images: ["/projects/mephim-web-app.png"],
    liveUrl: "https://manhduong2953.github.io/mephim/",
    githubUrl: "https://github.com/ManhDuong2953/mephim.git",
    featured: false,
  },
];

const categories = ["All", "Web Development", "Mobile Development"];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="mx-auto py-20 w-full max-w-6xl">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-bold text-3xl md:text-4xl"
        >
          Personal Learning Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-2xl text-slate-400"
        >
          A collection of personal projects I built during my learning journey,
          exploring various technologies and improving my development skills.
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
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
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
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-md p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 shadow-[0_0_30px_rgba(0,200,255,0.3)] border border-white/20 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-bold text-white text-2xl">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg text-slate-300 hover:text-white transition-colors duration-300"
                >
                  ✕
                </button>
              </div>

              {/* Description */}
              <p className="mb-6 text-slate-300 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 border border-white/10 rounded-full text-slate-200 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 my-4">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    className="bg-blue-500/20 hover:bg-blue-500/30 px-6 py-3 border border-blue-400/30 rounded-lg font-medium text-white transition-colors duration-300"
                  >
                    🌐 View Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    className="bg-purple-500/20 hover:bg-purple-500/30 px-6 py-3 border border-purple-400/30 rounded-lg font-medium text-white transition-colors duration-300"
                  >
                    💻 View Code
                  </a>
                )}
              </div>

              {/* Images */}
              <div
                className="gap-4 grid mb-6"
                style={{
                  gridTemplateColumns:
                    selectedProject.category === "Mobile Development"
                      ? "repeat(2, 1fr)"
                      : "repeat(1, 1fr)",
                }}
              >
                {selectedProject.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative shadow-md border border-white/10 rounded-lg w-full min-h-100 overflow-hidden"
                    style={{
                      aspectRatio:
                        selectedProject.category === "Mobile Development"
                          ? "9/16"
                          : "16/9",
                    }}
                  >
                    <Image
                      src={img}
                      alt={`${selectedProject.title} ${idx + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
