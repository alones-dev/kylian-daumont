import React from 'react'
import LightSeparator from './LightSeparator'

const Footer = () => {
  return (
    <div className="-my-[4em]">
        <LightSeparator></LightSeparator>
        <div className="mx-auto w-full max-w-7xl flex items-center justify-between px-10 py-2">
            <div className="flex flex-col items-start">
                <a className="font-satoshiBold text-lg text-white mt-1">Kylian Daumont</a>
                <a className="font-satoshiRegular text-sm text-white mt-1">© Kyliandaumont.fr - All rights reserved.</a>
            </div>
        </div>
    </div>
  )
}

export default Footer