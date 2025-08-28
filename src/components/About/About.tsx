"use client";
import { motion } from "motion/react";
import BlurText from "@/components/BlurText/BlurText";
import ProfileCard from "../Components/ProfileCard/ProfileCard";

const interests = [
  { name: "Web Development", icon: "🌐" },
  { name: "Mobile Apps", icon: "📱" },
];

const techGroups = [
  {
    title: "Frontend",
    items: [
      "React (Hooks, Redux)",
      "Next.js",
      "Vue 2/3",
      "Nuxt 2/3",
      "TypeScript",
      "TailwindCSS",
      "Ant Design Vue",
      "React Bits",
      "Vuetify",
      "SCSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST API",
      "Socket.io",
      "MySQL",
      "Redis",
    ],
  },
  {
    title: "Mobile",
    items: ["Flutter"],
  },
  {
    title: "Auth & Security",
    items: ["JWT", "RSA", "AES", "Google Auth", "Meta/Facebook Auth"],
  },
  {
    title: "Animation & 3D",
    items: ["Framer Motion", "GSAP", "AOS", "Three.js"],
  },
  {
    title: "Blockchain",
    items: ["ethers.js"],
  },
  {
    title: "Deployment & Tools",
    items: [
      "Vercel",
      "Render",
      "Docker",
      "VPS",
      "CI/CD",
      "Cloudflare",
      "Cloudinary",
      "Navicat",
      "Github/GitLab",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-bold text-3xl md:text-4xl"
        >
          <BlurText
            text="About Me"
            animateBy="letters"
            delay={50}
            direction="top"
          />
        </motion.h2>
      </div>

      <div className="grid items-start justify-between gap-8 lg:grid-cols-2">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Intro */}
          <div className="space-y-4 text-lg leading-relaxed text-slate-300">
            <p className="text-xl font-medium text-white">
              Hi — I&apos;m{" "}
              <span className="font-semibold">Duong Van Manh</span> (b. 2003), a
              4th-year student at Hanoi University of Mining & Geology and a{" "}
              <span className="font-semibold">Frontend Developer</span> with{" "}
              <span className="font-semibold">1+ year</span> of professional
              experience.
            </p>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium text-slate-300">
                Position: Frontend Developer (Fullstack-capable)
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium text-slate-300">
                Experience: 1+ year
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium text-slate-300">
                Projects: 30+ personal • 7+ production
              </span>
            </div>

            <p>
              I build performant, accessible and maintainable interfaces for web
              and mobile. My work combines clean architecture, practical UI/UX,
              and collaboration with backend teams to ship production-ready
              products.
            </p>
          </div>

          {/* Tech groups */}
          <div className="pt-2">
            <h3 className="mb-4 text-xl font-semibold text-white">
              Tech & Tools
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {techGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="mb-2 text-sm font-semibold text-white">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-slate-300 backdrop-blur-sm"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow */}
          <div>
            <h3 className="mb-2 text-lg font-semibold text-white">Workflow</h3>
            <p className="text-slate-300">
              On the <span className="font-semibold">Frontend</span>, I build
              responsive UIs with React, Next.js, Vue, and Nuxt. For{" "}
              <span className="font-semibold">Backend</span>, I work with
              Node.js, Express, and real-time systems via Socket.io. I design
              databases in MySQL/Redis, and secure apps with JWT and encryption.
              Deployment includes Vercel, Render, VPS + Docker and CI/CD. I
              collaborate using Git & GitFlow to ensure smooth team delivery.
            </p>
          </div>

          {/* Interests */}
          <div className="pt-4">
            <h3 className="mb-4 text-xl font-semibold text-white">
              What I&apos;m passionate about:
            </h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <motion.span
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  whileHover={{ scale: 1.04 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/6 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm hover:bg-white/20 hover:text-white transition"
                >
                  <span>{interest.icon}</span>
                  {interest.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Profile Card */}
        <ProfileCard
          name="Duong Van Manh"
          title="Frontend Developer (Fullstack-capable)"
          handle="manhduong2953"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/textures/my-profile.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() =>
            window.open("https://www.facebook.com/manhduong2953/", "_blank")
          }
        />
      </div>
    </section>
  );
}
