import React from 'react';
import Image from 'next/image';

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
    <div className="transition-all ease-in duration-75 w-[12em] md:w-[15em] rounded-md overflow-hidden outline-gradient hover:scale-105">
      <div className="flex w-full h-[3em] md:h-[4em] rounded-md bg-gray-900">
        <div
          className="w-[2.5em] md:w-[4em] h-[calc(100%-4px)] mx-[2px] my-[2px] rounded-[5px] flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <div
            className={`relative ${push ? "w-12 h-12 md:w-16 md:h-16" : "w-10 h-10 md:w-14 md:h-14"}`}
          >
            <Image
              src={image}
              alt={title}
              fill 
              className="object-contain p-1" 
            />
          </div>
        </div>

        <div className="flex flex-col flex-grow items-center h-full justify-center -my-[1px]">
          <a className="text-white font-satoshiBold text-center text-sm md:text-base">{title}</a>
          <a className="text-white font-satoshiRegular text-center text-sm md:text-base">{desc}</a>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;