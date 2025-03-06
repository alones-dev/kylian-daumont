"use client"

import React from 'react'
import LightSeparator from './LightSeparator'
import { useState } from 'react'

const Header = () => {
    const [lang, setLang] = useState(true)

    const changeLang = () => {
        setLang(!lang)
    }

  return (
    <div>
        <div className="mx-auto w-full max-w-7xl flex items-center justify-between px-10 py-2">
            <div className="flex flex-col items-start">
                <a className="font-satoshiMedium text-xs text-white">Kylian</a>
                <div className="flex items-start">
                    <a className="font-satoshiBold text-base text-white -mt-1">Daumont</a>
                    <a className="font-satoshiRegular text-xs text-white ml-[2px] mt-[1px]">.fr</a>
                </div>
            </div>
        </div>
        <LightSeparator></LightSeparator>
    </div>
  )
}

export default Header