import React from 'react'
import SkillCard from './SkillCard'
import Separator from './Separator'

const Technologies = () => {
    const skills = [
        {
          image: "/images/skills/typescript.png",
          color: "#0262B9",
          title: "TypeScript",
          desc: "Typed Javascript",
          w: 45,
          h: 45
        },
        {
          image: "/images/skills/React.webp",
          color: "#056076",
          title: "React",
          desc: "Javascript library",
          w: 45,
          h: 45
        },
        {
          image: "/images/skills/nextjs.png",
          color: "#081D58",
          title: "Next.js",
          desc: "React framework",
          w: 45,
          h: 45
        },
        {
          image: "/images/skills/tailwindcss.png",
          color: "#137F6F",
          title: "Tailwind CSS",
          desc: "Styling framework",
          w: 45,
          h: 45,
          push: true
        },
        {
          image: "/images/skills/NestJS.svg",
          color: "#730C00",
          title: "Nest.js",
          desc: "Node.js framework",
          w: 45,
          h: 45
        },
        {
          image: "/images/skills/react-native.png",
          color: "#719CB3",
          title: "React Native",
          desc: "Mobile development",
          w: 45,
          h: 45
        },
    ]

    return (
      <div className="flex flex-col items-center justify-center w-full -my-[10em]">
        <div className="flex flex-col items-center justify-center w-full my-6">
          <a className="text-white font-satoshiBold text-xl">Actual technologies</a>
          <a className="text-white font-satoshiRegular text-base -my-1">here are some of the languages and technologies I usually use</a>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 lg:gap-x-10 lg:gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-4">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>

        <div className='w-full py-[4em]'>
          <Separator />
        </div>
      </div>
    );
};

export default Technologies