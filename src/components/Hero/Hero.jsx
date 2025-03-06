"use client";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

  const handleResumeDownload = () => {
    window.open("/Resume_25.pdf", "_blank");
  };

  return (
    <div className="md:mt-0 relative flex flex-col-reverse md:flex-row items-center justify-center h-screen px-6 md:px-16 text-white">
      {/* Left Side - Text & CTA */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-7xl font-bold">
          <span className="text-3xl md:text-5xl text-cyan-400 mt-6 block">Hi I&apos;m</span>
          Sanad Naqvi
        </h1>
        <h2 className="text-xl md:text-4xl text-gray-300 leading-tight">
          <Typewriter
            words={["Full Stack Developer", "Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "TailwindCSS"]}
            loop
          />
        </h2>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6">
          <Link href="https://wa.me/9324078235">
          <button
            className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg w-full md:w-auto"
          >
            Contact
          </button>
          </Link>
          <button
            onClick={handleResumeDownload}
            className="px-6 py-3 bg-gray-800 hover:bg-gray-600 text-white font-bold rounded-lg w-full md:w-auto"
          >
            Resume
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
        <Image
          src="/sanad.png"
          alt="Sanad Naqvi"
          width={350}
          height={350}
          className="rounded-xl border-4 border-blue-300 shadow-lg w-52 md:w-[350px] h-52 md:h-[350px] transition-transform duration-300 hover:scale-105"
        />
      </div>

    
    </div>
  );
};

export default Hero;
