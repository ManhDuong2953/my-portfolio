"use client";
import Squares from "@/components/Backgrounds/Squares/Squares";
import FloatingElements from "@/components/FloatingElements/FloatingElements";
// import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import BackToTop from "@/components/BackToTop/BackToTop";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats/Stats";
import Skills from "@/components/Skills/Skills";
import Process from "@/components/Process/Process";
import Timeline from "@/components/Timeline/Timeline";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ProfileCard from "@/components/Components/ProfileCard/ProfileCard";
import SplashCursor from "@/components/Animations/SplashCursor/SplashCursor";
import Lanyard from "@/components/Components/Lanyard/Lanyard";

export default function Home() {
  return (
    <div className="relative bg-black w-full min-h-screen overflow-hidden text-white">
      {/* Progress & Navigation */}
      <SplashCursor />
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

      <BackToTop />
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={80}
          direction="diagonal"
          borderColor="#ffffff22"
          hoverFillColor="#222"
        />
      </div>
      <FloatingElements />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="z-10 relative flex flex-col justify-start items-center space-y-32 px-6 pt-24 min-h-screen">
        {/* Hero Section */}
        <div className="flex items-center">
          <Hero />

          <ProfileCard
            name="Javi A. Torres"
            title="Software Engineer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="https://png.pngtree.com/png-clipart/20250501/original/pngtree-the-pretty-girl-png-image_20924751.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Stats Section */}
        <Stats />

        {/* Skills Section */}
        <Skills />

        {/* Process Section */}
        <Process />

        {/* Timeline Section */}
        <Timeline />

        {/* Enhanced Project Showcase */}
        <ProjectShowcase />

        {/* Featured Work Section */}
        <FeaturedWork />

        {/* Contact Section */}
        <Contact />

        {/* <ScrollProgress /> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
