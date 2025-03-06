"use client"

import React from 'react'
import {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Separator from './Separator'

const HEY_LANGS = ["Hello", "Salut", "Hallo", "Hola", "안녕", "Zdravo", "Szia", "你好", "Tere", "Hui", "Ciao", "Salom", "こんにちは"]

const Hero = () => {
    let [text, setText] = useState(HEY_LANGS[0])
    let id: NodeJS.Timeout
    let i = 0

    useEffect(() => {
        id = setInterval(() => {
           setText(HEY_LANGS[i])
           i++
           if (i === HEY_LANGS.length) {
               i = 0
           }
        }, 3000)

        return () => {
            clearInterval(id)
            i = 0
        }
    }, [])

    return (
        <div className="mx-auto my-[6em] w-full flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.span
                    key={text} 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="font-satoshiMedium text-6xl text-white">
                    {text},
                </motion.span>
            </AnimatePresence>      

            <div className="flex items-center justify-center my-4 space-x-4 w-full">
                <a className="font-satoshiMedium text-5xl text-white">I'm</a>
                <a className="font-satoshiBold text-5xl text-white mx-auto mx-1">Kylian</a>
            </div>

            <a className="font-satoshiBold text-4xl sm:text-5xl md:text-6xl my-5 text-center text-gradient">
                French fullstack developer
            </a>

            <a className="text-4xl my-12 transition-all ease-in animate-moving">🙌</a>
            <div className="flex flex-col items-center justify-center w-full">  
                <p className="font-satoshiRegular text-center text-lg md:text-xl lg:text-1xl text-white mx-3 -my-5">Hello, my name is Kylian, I’m a French fullstack developer living near Paris.</p>
                <p className="font-satoshiRegular text-center text-lg md:text-xl lg:text-1xl text-white mx-3 my-5">I’ll be happy to discuss your project and help you to implement it !</p>
            </div>

            <a href="#contact" className="pointer-clicker relative inline-flex items-center justify-center transition-all ease-in duration-75 my-6 p-0.5 mb-2 ml-1 overflow-hidden text-sm font-satoshiMedium text-white rounded-3xl group hover:scale-110 outline-gradient-animated">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-3xl">
                    Have a project ?
                </span>
            </a>

            <div className="w-full py-[6em]">
                <Separator></Separator>
            </div>
        </div>
    )
}

export default Hero