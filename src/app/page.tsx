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
import SplashCursor from "@/components/Animations/SplashCursor/SplashCursor";
import Lanyard from "@/components/Components/Lanyard/Lanyard";
import LightRays from "@/components/Backgrounds/LightRays/LightRays";
import ScrollToRead from "@/components/ScrollToRead/ScrollToRead";

export default function Home() {
  return (
    <div className="relative bg-black w-full min-h-screen overflow-hidden text-white">
      {/* Progress & Navigation */}

      <BackToTop />
      {/* Background Elements */}
      <div className="top-0 absolute inset-0 w-full h-screen">
        <Squares
          speed={0.4}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.3)"
          hoverFillColor="#222"
        />
      </div>
      <FloatingElements />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="z-10 relative flex flex-col justify-start items-center space-y-[60px] px-6 pt-[60px] min-h-screen">
        {/* Hero Section */}
        <div className="flex items-center">
          <div className="flex-1">
            <Hero />
          </div>
          <div className="z-1000 flex-1 self-start h-[70vh]">
            <Lanyard />
          </div>
          <ScrollToRead />
        </div>
        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        <SplashCursor />
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
        <div className="mx-auto py-20 w-full h-screen">
          <Contact />
        </div>

        {/* <ScrollProgress /> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
