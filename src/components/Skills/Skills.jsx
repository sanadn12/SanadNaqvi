"use client";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt ,FaGitAlt,FaDocker ,FaLinux ,FaPython ,FaFigma ,FaJava, FaJenkins } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { DiMysql } from "react-icons/di";

import { DiNginx } from "react-icons/di";


import { BiLogoPostgresql } from "react-icons/bi";

import { SiExpress,SiMongodb ,SiTypescript } from "react-icons/si";

import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: 20, rotateY: -20 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className=" bottom-5 right-5 md:bottom-10 md:right-10 w-full md:w-[1600px] perspective-1000"
    >
        <h2 className="md:-mt-6 text-4xl md:text-6xl font-bold font-Syne text-white text-center"> Skills</h2>
      {/* 3D Effect Container */}
      <div className="relative flex justify-center items-center w-full h-40">
        {/* Left Skewed Panel */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gray-900 transform origin-right -skew-y-6 shadow-lg overflow-hidden">
          <Marquee speed={100} gradient={false} className="flex items-center h-full">
          <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaNodeJs className="text-green-500" size={80} />
            </motion.div>
            <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <TbBrandTailwind className="text-blue-300" size={80} />
            </motion.div>
            <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <SiMongodb  className="text-orange-500" size={80} />
            </motion.div>
            <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <BiLogoPostgresql   className="text-orange-500" size={80} />
            </motion.div>
          <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaCss3Alt className="text-white" size={80} />
            </motion.div>
            <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaGitAlt className="text-blue-400" size={80} />
            </motion.div>
            <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaDocker className="text-blue-400" size={80} />
            </motion.div>
            <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaLinux className="text-white" size={80} />
            </motion.div>

             <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <SiFirebase className="text-white" size={80} />
            </motion.div>

             <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaJenkins className="text-white" size={80} />
            </motion.div>
          
          </Marquee>
        </div>

        {/* Right Skewed Panel */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-800 transform origin-left skew-y-6 shadow-lg overflow-hidden">
          <Marquee speed={100} direction="right" gradient={false} className="flex items-center h-full">
          <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaHtml5 className="text-white" size={80} />
            </motion.div>
            <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaReact className="text-blue-400" size={80} />
            </motion.div>
            <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <SiExpress className="text-blue-400" size={80} />
            </motion.div>
            <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <TbBrandNextjs className="text-white" size={80} />
            </motion.div>
            <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaPython className="text-green-500" size={80} />
            </motion.div>
            <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <DiNginx className="text-blue-300" size={80} />
            </motion.div>
            <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaJava  className="text-orange-500" size={80} />
            </motion.div>
            <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaFigma   className="text-orange-500" size={80} />
            </motion.div>

                 <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <SiTypescript   className="text-orange-500" size={80} />
            </motion.div>

                 <motion.div
              className="mx-6"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <DiMysql   className="text-orange-500" size={80} />
            </motion.div>
          </Marquee>
        </div>

       
      </div>
    </motion.div>
  );
};

export default Skills;
