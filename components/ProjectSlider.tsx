"use client";

import React, {useEffect} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SiTailwindcss, SiNestjs, SiReact, SiNodedotjs, SiTypescript, SiDjango, SiBootstrap, SiJavascript, SiHtml5, SiCss3, SiPostgresql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import "./ProjectSlider.css"; 

const techIcons = [
  { id: "tailwind", icon: <SiTailwindcss className="w-4 h-4 md:w-7 md:h-7" color="#38BDF8" /> },
  { id: "nestjs", icon: <SiNestjs className="w-4 h-4 md:w-7 md:h-7" color="#E0234E" /> },
  { id: "nextjs", icon: <RiNextjsFill className="w-4 h-4 md:w-7 md:h-7" color="#a5c5d9" /> },
  { id: "react", icon: <SiReact className="w-4 h-4 md:w-7 md:h-7" color="#61DAFB" /> },
  { id: "nodejs", icon: <SiNodedotjs className="w-4 h-4 md:w-7 md:h-7" color="#68A063" /> },
  { id: "typescript", icon: <SiTypescript className="w-3.5 h-3.5 md:w-6 md:h-6" color="#3178C6" /> },
  { id: "django", icon: <SiDjango className="w-4 h-4 md:w-7 md:h-7" color="#092E20" /> },
  { id: "bootstrap", icon: <SiBootstrap className="w-4 h-4 md:w-7 md:h-7" color="#7952B3" /> },
  { id: "javascript", icon: <SiJavascript className="w-4 h-4 md:w-7 md:h-7" color="#F7DF1E" /> },
  { id: "html5", icon: <SiHtml5 className="w-4 h-4 md:w-7 md:h-7" color="#E34F26" /> },
  { id: "postgresql", icon: <SiPostgresql className="w-4 h-4 md:w-7 md:h-7" color="#336791" /> },
];


const projects = [
  { title: "Matcha", stacks: ["typescript", "react", "nodejs", "nestjs", "tailwind"], image: "/images/template.jpg" },
  { title: "Le Yoga pour Sortir du lit", stacks: ["typescript", "react", "nextjs", "tailwind"], image: "/images/template-2.jpg" },
  { title: "ft-transcendence", stacks: ["javascript", "django", "bootstrap", "postgresql", "html"], image: "/images/template-3.avif" },
];

export default function ProjectSlider() {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, 
    align: "center", 
    slidesToScroll: 1, 
  });

  useEffect(() => {
    if (emblaApi) {
      const middleIndex = Math.floor(projects.length / 2);
      emblaApi.scrollTo(middleIndex);
    }
  }, [emblaApi]);

  const handleClick = (title: string, index: number) => {
    if (emblaApi) emblaApi.scrollTo(index); 
  };

  const showIcons = (stacks: string[]) => {
    return stacks.map((stack, idx) => {
      const icon = techIcons.find((icon) => icon.id === stack);
      return icon ? (
        <div key={stack + idx} className="opacity-100 flex items-center justify-center">
          {icon.icon}
        </div>
      ) : null;
    });
  };

  return (
    <div className="relative w-full  mx-auto">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, index) => (
            <div
              key={index}
              className="embla__slide cursor-pointer outline-gradient-2 rounded-md overflow-hidden bg-gray-900"
              onClick={() => handleClick(project.title, index)}
            >
              <div className="flex flex-col w-full h-[35vw] md:h-[30vw] rounded-t-md bg-gray-900 p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="w-full flex items-center pb-2 bg-gray-900 rounded-b-md text-center border-t border-gray-700">
                <span className="text-white font-satoshiBold text-md sm:text-xl ml-4 mt-2">{project.title}</span>
              </div>
              <div className="absolute bottom-4 right-4 flex space-x-[6px] -my-[5px]">
                {showIcons(project.stacks)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}