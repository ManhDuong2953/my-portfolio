"use client";
import { motion } from "motion/react";
import SpotlightCard from "../Components/SpotlightCard/SpotlightCard";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies.",
    features: [
      "React & Next.js",
      "TypeScript",
      "Responsive Design",
      "Performance Optimization",
    ],
    icon: "🌐",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications that deliver native-like experiences.",
    features: [
      "React Native",
      "Flutter",
      "iOS & Android",
      "App Store Deployment",
    ],
    icon: "📱",
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "Game Development",
    description:
      "Engaging games and interactive experiences across multiple platforms.",
    features: ["Unity", "Unreal Engine", "2D & 3D Games", "Multi-platform"],
    icon: "🎮",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by artificial intelligence and machine learning.",
    features: [
      "Python & TensorFlow",
      "Data Analysis",
      "Predictive Models",
      "Automation",
    ],
    icon: "🤖",
    gradient: "from-orange-500 to-red-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto py-20 w-full max-w-6xl">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-bold text-3xl md:text-4xl"
        >
          Services I Offer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-2xl text-slate-400"
        >
          Comprehensive solutions to bring your digital ideas to life
        </motion.p>
      </div>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden"
          >
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="bg-white/5 hover:bg-white/8 backdrop-blur-sm p-8 border border-white/10 rounded-2xl h-full transition-all duration-300">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="z-10 relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 font-bold text-white group-hover:text-transparent text-2xl transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mb-6 text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + featureIndex * 0.05,
                        }}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-2 h-2" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
