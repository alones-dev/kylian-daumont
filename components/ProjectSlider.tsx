"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SiTailwindcss, SiNestjs, SiReact, SiNodedotjs, SiTypescript, SiDjango, SiBootstrap, SiJavascript, SiHtml5, SiCss3, SiPostgresql } from "react-icons/si";
import { useRouter } from "next/navigation";
import "./ProjectSlider.css"; // On ajoutera le CSS ci-dessous

const techIcons = [
  { id: "tailwind", icon: <SiTailwindcss size={25} color="#38BDF8" /> },
  { id: "nestjs", icon: <SiNestjs size={25} color="#E0234E" /> },
  { id: "react", icon: <SiReact size={25} color="#61DAFB" /> },
  { id: "nodejs", icon: <SiNodedotjs size={25} color="#68A063" /> },
  { id: "typescript", icon: <SiTypescript size={20} color="#3178C6" /> },
  { id: "django", icon: <SiDjango size={25} color="#092E20" /> },
  { id: "bootstrap", icon: <SiBootstrap size={25} color="#7952B3" /> },
  { id: "javascript", icon: <SiJavascript size={25} color="#F7DF1E" /> },
  { id: "html5", icon: <SiHtml5 size={25} color="#E34F26" /> },
  { id: "postgresql", icon: <SiPostgresql size={25} color="#336791" /> },
];

const projects = [
  { title: "Matcha", stacks: ["typescript", "react", "nodejs", "nestjs", "tailwind"], image: "/images/template.jpg" },
  { title: "Camagru", stacks: ["typescript", "react", "nodejs", "nestjs", "tailwind"], image: "/images/template-2.jpg" },
  { title: "ft-transcendence", stacks: ["javascript", "django", "bootstrap", "postgresql", "html"], image: "/images/template-3.avif" },
];

export default function ProjectSlider() {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, 
    align: "center", 
    slidesToScroll: 1, 
  });

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
              <div className="flex flex-col w-full h-[45vw] rounded-t-md bg-gray-900 p-4">
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