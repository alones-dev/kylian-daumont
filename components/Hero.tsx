"use client"

import React from 'react'
import {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Separator from './Separator'
import { translations } from '@/locales/translations'
import { useLanguage } from '@/app/context/LanguageContext'

const HEY_LANGS = ["Hello", "Salut", "Hallo", "Hola", "안녕", "Zdravo", "Szia", "你好", "Tere", "Hui", "Ciao", "Salom", "こんにちは"]

const Hero = () => {
    const { lang } = useLanguage()
    let [text, setText] = useState(HEY_LANGS[0])
    const [ref, inView] = useInView({
        triggerOnce: false, 
        threshold: 0.5, 
    })

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
        <div className="relative">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }} 
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }} 
                className="mx-auto w-full h-screen flex flex-col items-center justify-center"
            >
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

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex items-center justify-center my-4 space-x-4 w-full"
                >
                    <a className="font-satoshiMedium text-5xl text-white">{translations[lang].me}</a>
                    <a className="font-satoshiBold text-5xl text-white mx-1">Kylian</a>
                </motion.div>

                <motion.a 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="font-satoshiBold text-4xl sm:text-5xl md:text-6xl my-5 text-center text-gradient"
                >
                    {translations[lang].fullstackDeveloper}
                </motion.a>

                <a 
                    className="text-4xl my-12 transition-all ease-in animate-moving"
                >
                    🙌
                </a>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center w-full"
                >  
                    <p className="font-satoshiRegular text-center text-lg md:text-xl lg:text-1xl text-white mx-3 -my-5">{translations[lang].welcome}</p>
                    <p className="font-satoshiRegular text-center text-lg md:text-xl lg:text-1xl text-white mx-3 my-5">{translations[lang].projectWithMe}</p>
                </motion.div>

                <motion.a 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    href="#contact" 
                    className="pointer-clicker relative inline-flex items-center justify-center transition-all ease-in duration-75 my-6 p-0.5 mb-2 ml-1 overflow-hidden text-sm font-satoshiMedium text-white rounded-3xl group hover:scale-110 outline-gradient-animated"
                >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-3xl">
                        {translations[lang].haveProject}
                    </span>
                </motion.a>

            </motion.div>
                <div className="absolute left-0 w-full">
                    <Separator></Separator>
                </div>
        </div>
    )
}

export default Hero