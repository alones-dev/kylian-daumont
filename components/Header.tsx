"use client"

import React from 'react'
import LightSeparator from './LightSeparator'
import { useLanguage } from '@/app/context/LanguageContext'
import { useState } from 'react'
import GB from 'country-flag-icons/react/3x2/GB'
import FR from 'country-flag-icons/react/3x2/FR'


const Header = () => {
    const {lang, setLang} = useLanguage()

    const changeLang = () => {
        setLang(lang === 'fr' ? 'en' : 'fr')
    }

    return (
        <div>
            <div className="mx-auto w-full max-w-7xl flex items-center justify-between px-10 py-2">
                <a href="/" className="flex flex-col items-start">
                    <span className="font-satoshiMedium text-xs text-white">Kylian</span>
                    <div className="flex items-start">
                        <span className="font-satoshiBold text-base text-white -mt-1">Daumont</span>
                        <span className="font-satoshiRegular text-xs text-white ml-[2px] mt-[1px]">.fr</span>
                    </div>
                </a>
                
                <button 
                    onClick={changeLang}
                    className="text-white focus:outline-none flex items-center"
                    aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en Français'}
                >
                    <div className="w-6 h-6 overflow-hidden rounded-sm">
                        {lang === 'fr' ? (
                            <GB title="English" className="w-full h-full object-cover" />
                        ) : (
                            <FR title="Français" className="w-full h-full object-cover" />
                        )}
                    </div>
                </button>
            </div>
            <LightSeparator></LightSeparator>
        </div>
    )
}

export default Header