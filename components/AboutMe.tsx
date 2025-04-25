"use client"

import React from 'react'
import { useInView } from 'react-intersection-observer'
import {motion} from 'framer-motion'
import { translations } from '@/locales/translations'
import { useLanguage } from '@/app/context/LanguageContext'

const AboutMe = () => {
  const { lang } = useLanguage()
  const [ref, inView] = useInView({
        triggerOnce: false, 
        threshold: 0.5, 
    })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }} 
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }} 
      className="flex flex-col items-center justify-center w-full mt-16 my-[9em]"
    >
        <a className="font-satoshiBold text-center text-white text-sm">{translations[lang].aboutMe}</a>
        
        <div className="flex flex-col items-center justify-center w-full my-8 px-[4em] sm:px-[7em] lg:px-[20em]">
            <p className="text-white text-center font-satoshiBold text-2xl">
                {translations[lang].iAm} <span className="paragraph-gradient">{translations[lang].fullstack}</span>{translations[lang].basedNear}<span className="paragraph-gradient-v">42Paris</span>{translations[lang].iOfferMyServices}<span className="paragraph-gradient">{translations[lang].webApp}</span>, <span className="paragraph-gradient-v">{translations[lang].website}</span> & <span className="paragraph-gradient">{translations[lang].mobileApp}</span>{translations[lang].byRespondingToCustomerNeeds}
            </p>
        </div>
    </motion.div>
  )
}

export default AboutMe