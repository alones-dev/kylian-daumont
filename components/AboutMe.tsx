import React from 'react'

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full -my-[10.5em]">
        <a className="font-satoshiBold text-center text-white text-sm">About me</a>
        
        <div className="flex flex-col items-center justify-center w-full my-8 px-[4em] sm:px-[7em] lg:px-[20em]">
            <p className="text-white text-center font-satoshiBold text-2xl">
                I'm a <span className="paragraph-gradient">fullstack developer</span> based near Paris. Trained at <span className="paragraph-gradient-v">42Paris</span>, I offer my services in the creation of <span className="paragraph-gradient">web app</span>, <span className="paragraph-gradient-v">website</span> & <span className="paragraph-gradient">mobile app</span> by responding to customer needs.
            </p>
        </div>
    </div>
  )
}

export default AboutMe