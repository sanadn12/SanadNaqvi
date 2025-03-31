"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Sawraj Enterprises",
    description: "A marketplace for trading, bidding, and auctioning scraps. Future updates will bring live auctions and real-time trading.",
    liveLink: "https://sawraj.vercel.app",
    image: "/SeLogo.png",
  },
  {
    title: "Smart Delivery Management System",
    description: "A modern delivery management dashboard focusing on partner management and smart order assignments",
    liveLink: "https://delivery-management-system-3aus.onrender.com/",
    image: "/delivery.jpg",
  },
  {
    title: "Upcoming: YEET!",
    description: "A platform for college students to stay updated on club activities, events, and seminars, with video conferencing for virtual meetings and discussions.",
    liveLink: "#",
    image: "/yeet.png",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center mt-32 px-6 relative">
      {/* Thunder Effect Background */}
      <div className="absolute inset-0  z-[-1]" />
      
      <h2 className="text-5xl  text-center md:text-7xl font-bold text-white mb-8 thunder-text">
        My Personal Work & Upcoming Projects 
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative p-6 bg-gray-900 rounded-xl shadow-lg text-white text-center thunder-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Thunder Flicker Effect Applied to Entire Card */}
            <div className="thunder-flicker p-4 rounded-lg relative border-2 border-cyan-400 shadow-md">
              {/* Image with Thunder Overlay */}
              <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-lg thunder-glow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
              </div>

              {/* Project Details */}
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.description}</p>

              {/* Links */}
              <div className="mt-4 flex justify-center">
                {project.liveLink !== "#" && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt size={28} className="text-blue-400 hover:text-cyan-300 transition-all" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
