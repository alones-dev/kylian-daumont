"use client";

import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { useInView } from 'react-intersection-observer'
import {motion} from 'framer-motion'

const Contact = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.3, 
  })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }} 
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }} 
      id="contact" 
      className="flex flex-col items-center justify-center w-full mt-[2em]"
    >
      <a className="font-satoshiBold text-center text-white text-sm">Contact me</a>

      <p className="font-satoshiBold text-white text-3xl py-10 text-center">Ready to develop your next project with me ?</p>

      <div className="flex flex-col md:flex-row items-center justify-center w-full mt-[3em] space-y-[4em] md:space-y-0 md:space-x-[7em]">
        <button
          className="relative inline-flex items-center justify-center transition-all ease-in duration-75 p-0.5 mb-2 ml-1 overflow-hidden text-lg font-satoshiBold text-white group hover:scale-110 outline-gradient-animated-big w-[300px] h-[250px]"
          onClick={() => openInNewTab("https://linkedin.com/in/kyliandmt")}
        >
          <span className="relative flex flex-col items-center justify-center px-5 py-2.5 space-y-4 transition-all ease-in duration-75 bg-[#000000cb] rounded-3xl w-full h-full">
            <SiLinkedin size={45} color="#ffff" />
            <a className="text-white text-3xl font-satoshiBold">LinkedIn</a>
            <a className="text-gray-300 text-lg font-satoshiMedium">in/kyliandmt</a>
          </span>
        </button>

        <button
          className="relative inline-flex items-center justify-center transition-all ease-in duration-75 p-0.5 mb-2 ml-1 overflow-hidden text-lg font-satoshiBold text-white group hover:scale-110 outline-gradient-animated-big w-[300px] h-[250px]"
          onClick={() => window.location.href = "mailto:kyliandaumont78@gmail.com"}
        >
          <span className="relative flex flex-col items-center justify-center px-5 py-2.5 space-y-4 transition-all ease-in duration-75 bg-[#000000cb] rounded-3xl w-full h-full">
            <IoIosMail size={45} color="#ffffff" />
            <a className="text-white text-3xl font-satoshiBold">Mail</a>
            <a className="text-gray-300 text-lg font-satoshiMedium">contact@kyliandaumont.fr</a>
          </span>
        </button>

        <button
          className="relative inline-flex items-center justify-center transition-all ease-in duration-75 p-0.5 mb-2 ml-1 overflow-hidden text-lg font-satoshiBold text-white group hover:scale-110 outline-gradient-animated-big w-[300px] h-[250px]"
          onClick={() => openInNewTab("https://github.com/alones-dev")}
        >
          <span className="relative flex flex-col items-center justify-center px-5 py-2.5 space-y-4 transition-all ease-in duration-75 bg-[#000000cb] rounded-3xl w-full h-full">
            <SiGithub size={45} color="#ffff" />
            <a className="text-white text-3xl font-satoshiBold">Github</a>
            <a className="text-gray-300 text-lg font-satoshiMedium">alones-dev</a>
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default Contact;