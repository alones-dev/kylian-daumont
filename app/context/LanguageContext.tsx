"use client"

import React, { createContext, useContext, useState } from 'react'

type LanguageContextType = {
    lang: 'fr' | 'en'
    setLang: (lang: 'fr' | 'en') => void
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'fr',
    setLang: () => {}
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<'fr' | 'en'>('fr')
    
    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)