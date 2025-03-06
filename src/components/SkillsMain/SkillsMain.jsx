"use client"
import React from 'react'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FaCss3Alt ,FaGitAlt,FaDocker ,FaLinux ,FaPython ,FaFigma ,FaJava } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { motion } from 'framer-motion'

import { BiLogoPostgresql } from "react-icons/bi";
import { DiNginx } from "react-icons/di";


import { SiExpress,SiMongodb  } from "react-icons/si";

import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

const SkillsMain = () => {
    return (
        <div className="flex flex-col items-center mt-32">
          {/* Title */}
          <h2 className="text-3xl md:text-6xl font-Syne font-bold text-white mb-8 text-center">
            Skills
          </h2>
    
          {/* Social Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4  justify-center items-center gap-8 md:gap-28">
            {[
              { icon: FaReact },
              { icon: FaHtml5 },
              { icon: FaNodeJs },
              { icon: BiLogoPostgresql },
              { icon: SiExpress},
              { icon: TbBrandTailwind},
              { icon: SiMongodb },
              { icon: TbBrandNextjs},
              { icon: FaCss3Alt},
              { icon: FaGitAlt },
              { icon: FaDocker },
              { icon: DiNginx},
              { icon: FaLinux},
              { icon: FaPython },
              { icon: FaJava },
              { icon: FaFigma }


            ].map((item, index) => (
              <motion.div
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="relative thunder-icon"
                whileHover={{ scale: 1.3, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon
                  size={90} // Default for mobile
                  className="text-white thunder-glow md:size-[140px] lg:size-[140px]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      );
    };

export default SkillsMain