"use client";
import { useState } from "react";
import { motion } from "motion/react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React", level: 80, category: "Frontend", icon: "⚛️" },
  { name: "Next.js", level: 40, category: "Frontend", icon: "▲" },
  { name: "Vue.js", level: 90, category: "Frontend", icon: "🌐" },
  { name: "Nuxt.js", level: 85, category: "Frontend", icon: "🔷" },
  { name: "Dart/Flutter", level: 70, category: "Frontend", icon: "🦄" },
  { name: "Dart", level: 60, category: "Frontend", icon: "🔸" },
  { name: "TypeScript", level: 80, category: "Language", icon: "📘" },
  { name: "Tailwind CSS", level: 100, category: "Frontend", icon: "🎨" },

  //Library Frontend (ant design, react bits, aos, gsap, framer motion)
  { name: "Ant Design", level: 100, category: "Library", icon: "🔷" },
  { name: "React Bits", level: 100, category: "Library", icon: "🌱" },
  { name: "AOS", level: 100, category: "Library", icon: "📦" },
  { name: "GSAP", level: 65, category: "Library", icon: "🎞️" },
  { name: "Framer Motion", level: 80, category: "Library", icon: "🌀" },

  // Backend
  { name: "Express/Node.js", level: 85, category: "Backend", icon: "🟢" },
  { name: "PHP", level: 80, category: "Backend", icon: "🐘" },

  // Databases & Infra
  { name: "Redis", level: 83, category: "Database", icon: "🔴" },
  { name: "MySQL", level: 95, category: "Database", icon: "🐬" },

  // DevOps & Cloud
  { name: "Docker", level: 50, category: "DevOps", icon: "🐳" },
  { name: "Vercel", level: 80, category: "DevOps", icon: "🌐" },
  { name: "Render", level: 70, category: "DevOps", icon: "🖥️" },
  { name: "VPS Server", level: 70, category: "DevOps", icon: "🗄️" },
  { name: "Cloudinary", level: 90, category: "Cloud", icon: "☁️" },

  // Tools (vscode, postman, git, figma, android studio,remote destop connection)
  { name: "VSCode", level: 90, category: "Tools", icon: "💻" },
  { name: "Postman", level: 85, category: "Tools", icon: "📦" },
  { name: "Git", level: 95, category: "Tools", icon: "🔧" },
  { name: "Figma", level: 80, category: "Tools", icon: "🎨" },
  { name: "Android Studio", level: 70, category: "Tools", icon: "📱" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Library",
  "Database",
  "DevOps",
  "Cloud",
  "Tools",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="mx-auto py-20 w-full max-w-6xl">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-bold text-3xl md:text-4xl"
        >
          Skills & Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-2xl text-slate-400"
        >
          Technologies and tools I work with to bring ideas to life
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
            className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeCategory === category
                ? "bg-white/10 text-white border border-white/20"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 hover:bg-white/8 backdrop-blur-sm p-6 border border-white/10 rounded-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{skill.icon}</span>
              <div>
                <h3 className="font-semibold text-white">{skill.name}</h3>
                <p className="text-slate-400 text-sm">{skill.category}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Proficiency</span>
                <span className="text-white">{skill.level}%</span>
              </div>
              <div className="bg-white/10 rounded-full w-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full h-2"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
