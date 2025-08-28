"use client";
import { motion } from "motion/react";

const events = [
  { 
    year: "2020", 
    title: "Self-learning HTML, CSS & JavaScript", 
    desc: "Started my programming journey by learning the fundamentals of web development at home.", 
    icon: "📚"
  },
  { 
    year: "2021 - 2025", 
    title: "Undergraduate Student at Hanoi University of Mining and Geology", 
    desc: "Pursuing a Bachelor's degree while expanding skills in React, Node.js, PHP, C/C++, Python, Java, and Dart/Flutter.", 
    icon: "🎓"
  },
  { 
    year: "2024 - Present", 
    title: "Frontend Developer at NekSolution Co., Ltd.", 
    desc: "Working with Vue 2/3 and Nuxt 2/3 to build modern, scalable frontend applications while collaborating with backend teams.", 
    icon: "💼"
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto py-20 w-full max-w-4xl">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-bold text-3xl md:text-4xl"
        >
          My Journey
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-2xl text-slate-400"
        >
          Key milestones in my learning and professional development
        </motion.p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="top-0 bottom-0 left-8 absolute bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 w-0.5"></div>
        
        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-start gap-8"
            >
              {/* Timeline Dot */}
              <div className="z-10 relative flex justify-center items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-16 h-16">
                <span className="text-2xl">{event.icon}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="bg-white/5 hover:bg-white/8 backdrop-blur-sm p-6 border border-white/10 rounded-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full font-semibold text-white text-sm">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="mb-3 font-bold text-white text-xl">{event.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{event.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
