"use client"

import React from 'react'
import ProjectSlider from './ProjectSlider'
import { SiGithub } from "react-icons/si";
import { useInView } from 'react-intersection-observer'
import {motion} from 'framer-motion'

const Projects = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  const [ref, inView] = useInView({
          triggerOnce: false, 
          threshold: 0.1, 
      })

  return (
    <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }} 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className="flex flex-col items-center justify-center w-full -my-[5em]"
    >
        <div className="flex flex-col items-center justify-center w-full">
            <a className="text-white font-satoshiBold text-xl">Recent projects</a>
            <a className="text-white font-satoshiRegular text-center text-base -my-1">
                take a look at the different projects in my portfolio, both professional and personal
            </a>
        </div>
        <div className="w-full flex justify-center my-12">
            <ProjectSlider />
        </div>
        <div className="flex items-center justify-center w-full -my-4">
            <button className="relative inline-flex items-center justify-center transition-all ease-in duration-75 p-0.5 mb-2 ml-1 overflow-hidden text-sm md:text-lg font-satoshiBold text-white rounded-3xl group hover:scale-110 outline-gradient-animated"
                onClick={() => openInNewTab("https://github.com/alones-dev")}
            >
                <span className="relative flex items-center px-3.5 py-2 md:px-5 md:py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-3xl">
                    <SiGithub size={30} color="#F5F5F5" className="relative -ml-2 mr-3 h-6 md:h-7.5" />
                    <span className="whitespace-nowrap">Check out my Github</span>
                </span>
            </button>
        </div>
    </motion.div>
  )
}

export default Projects
