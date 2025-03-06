import Connect from "@/components/Connect/Connect";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import React from "react";

const Page = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/thunder.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navbar (Always on Top) */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center w-full mb-32 space-y-16 pt-12">
        <Hero />
        <Skills />
        <Contact />
        <Connect />
        <Projects />
      </div>

      {/* Footer - Fixed at Bottom */}
      <Footer />
    </div>
  );
};

export default Page;
