"use client";

import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { useInView } from 'react-intersection-observer'
import {motion} from 'framer-motion'
import { translations } from '@/locales/translations'
import { useLanguage } from '@/app/context/LanguageContext'

const Contact = () => {
  const { lang } = useLanguage()
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
      className="flex flex-col items-center justify-center w-full mt-16 px-4"
    >
      <a className="font-satoshiBold text-center text-white text-sm">{translations[lang].contactMe}</a>

      <p className="font-satoshiBold text-white text-2xl md:text-3xl py-10 text-center">{translations[lang].readyDevelop}</p>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-[3em] gap-8 lg:gap-[7em]">
        <button
          className="relative inline-flex items-center justify-center transition-all ease-in duration-75 p-0.5 mb-2 overflow-hidden text-lg font-satoshiBold text-white group outline-gradient-animated-big w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[260px] lg:h-[260px]"
          onClick={() => openInNewTab("https://linkedin.com/in/kyliandmt")}
        >
          <span className="relative flex flex-col items-center justify-center px-5 py-2.5 space-y-4 transition-all ease-in duration-75 bg-black rounded-3xl w-full h-full">
            <SiLinkedin className="text-3xl sm:text-4xl lg:text-[45px] group-hover:scale-110 transition" />
            <span className="relative text-white text-xl sm:text-2xl lg:text-3xl font-satoshiBold
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:h-[2px] after:w-full after:bg-white after:origin-center after:scale-x-0 group-hover:after:scale-x-100
              after:transition-transform after:duration-300">
              LinkedIn
            </span>
            <span className="text-gray-300 text-sm sm:text-base lg:text-lg font-satoshiMedium">in/kyliandmt</span>
          </span>
        </button>

        <button
          className="relative inline-flex items-center justify-center transition-all ease-in duration-75 p-0.5 mb-2 overflow-hidden text-lg font-satoshiBold text-white group outline-gradient-animated-big w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[260px] lg:h-[260px]"
          onClick={() => window.location.href = "mailto:contact@kyliandaumont.fr"}
        >
          <span className="relative flex flex-col items-center justify-center px-5 py-2.5 space-y-4 transition-all ease-in duration-75 bg-black rounded-3xl w-full h-full">
            <IoIosMail className="text-3xl sm:text-4xl lg:text-[45px] group-hover:scale-110 transition" />
            <span className="relative text-white text-xl sm:text-2xl lg:text-3xl font-satoshiBold
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:h-[2px] after:w-full after:bg-white after:origin-center after:scale-x-0 group-hover:after:scale-x-100
              after:transition-transform after:duration-300">
              Mail
            </span>
            <span className="text-gray-300 text-sm sm:text-base lg:text-lg font-satoshiMedium text-center px-2">contact@kyliandaumont.fr</span>
          </span>
        </button>

        <button
          className="relative inline-flex items-center justify-center transition-all ease-in duration-75 p-0.5 mb-2 overflow-hidden text-lg font-satoshiBold text-white group outline-gradient-animated-big w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[260px] lg:h-[260px]"
          onClick={() => openInNewTab("https://github.com/alones-dev")}
        >
          <span className="relative flex flex-col items-center justify-center px-5 py-2.5 space-y-4 transition-all ease-in duration-75 bg-black rounded-3xl w-full h-full">
            <SiGithub className="text-3xl sm:text-4xl lg:text-[45px] group-hover:scale-110 transition" />
            <span className="relative text-white text-xl sm:text-2xl lg:text-3xl font-satoshiBold
              after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:h-[2px] after:w-full after:bg-white after:origin-center after:scale-x-0 group-hover:after:scale-x-100
              after:transition-transform after:duration-300">
              Github
            </span>
            <span className="text-gray-300 text-sm sm:text-base lg:text-lg font-satoshiMedium">alones-dev</span>
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default Contact;