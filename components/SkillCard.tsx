import React from 'react'
import Image from 'next/image'

interface SkillCardProps {
  image: string;
  color: string;
  title: string;
  desc: string;
  w: number;
  h: number;
  push?: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ image, color, title, desc, w, h, push }) => {
  return (
    <div className="transition-all ease-in duration-75 w-[15em] rounded-md overflow-hidden outline-gradient hover:scale-105">
      <div className="flex w-full h-[4em] rounded-md bg-gray-900">
        <div className="w-[4em] h-[calc(100%-4px)] mx-[2px] my-[2px] rounded-[5px]" style={{ backgroundColor: color }}>
          <Image
            src={image}
            alt={title}
            width={w}
            height={h}
            className={push ? "mx-2 my-4" : "mx-2 my-2"}
          ></Image>
        </div>

        <div className='flex flex-col flex-grow items-center h-full justify-center -my-[1px]'>
          <a className="text-white font-satoshiBold text-center">{title}</a>
          <a className="text-white font-satoshiRegular text-center">{desc}</a>
        </div>
      </div>
    </div>
  )
}

export default SkillCard