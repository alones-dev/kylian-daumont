"use client"

import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center w-full my-[9.5em]">
      <a className="font-satoshiBold text-center text-white text-sm">Contact me</a>

      <div className="flex flex-col md:flex-row items-center justify-center w-full mt-[5em] space-y-[5em] md:space-y-0 md:space-x-[10em]">
        <div className="flex flex-col items-center justify-center space-y-4">
          <a className="text-white text-3xl font-satoshiBold">LinkedIn</a>
          <a className="text-gray-300 text-lg font-satoshiMedium">in/kyliandmt</a>
          <button className="relative inline-flex items-center justify-center transition-all ease-in duration-75 p-0.5 mb-2 ml-1 overflow-hidden text-lg font-satoshiBold text-white rounded-3xl group hover:scale-110 outline-gradient-animated"
                onClick={() => openInNewTab("https://linkedin.com/in/kyliandmt")}>
            <span className="relative flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-3xl">
              <SiLinkedin size={30} color="#399ED4" className="relative -ml-2 mr-3" />
              <span className="whitespace-nowrap">Visit my LinkedIn</span>
            </span>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4">
          <a className="text-white text-3xl font-satoshiBold">Mail</a>
          <a className="text-gray-300 text-lg font-satoshiMedium">contact@kyliandaumont.fr</a>
          <button className="relative inline-flex items-center justify-center transition-all ease-in duration-75 p-0.5 mb-2 ml-1 overflow-hidden text-lg font-satoshiBold text-white rounded-3xl group hover:scale-110 outline-gradient-animated"
                onClick={() => window.location.href = "mailto:kyliandaumont78@gmail.com"}> 
            <span className="relative flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-3xl">
              <IoIosMail size={30} color="#50e3fa" className="relative -ml-2 mr-3" />
              <span className="whitespace-nowrap">Send me a mail</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
