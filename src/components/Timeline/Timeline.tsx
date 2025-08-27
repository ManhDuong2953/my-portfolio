"use client";
import { motion } from "motion/react";

const events = [
  { 
    year: "2025", 
    title: "Software DevelopmentIntern at Lafleurtech", 
    desc: "Built a self-service data integration platform allowing clients to seamlessly incorporate custom datasets into RAG systems.",
    icon: "💼"
  },
  { 
    year: "2025", 
    title: "Flutter Developer Intern at Celebrare", 
    desc: "Collaborated with various teams to develop the iOS app for Celebrare, which is their main application, as well as WowInvite, their newest offering.",
    icon: "🚀"
  },
  { 
    year: "2021-2025", 
    title: "Graduated Computer Science and Engineering", 
    desc: "Bachelor's degree in Computer Science and Engineering from Chandigarh College of Engineering and Technology. Specialized in web development and software engineering.",
    icon: "🎓"
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
          Key milestones in my professional development
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
