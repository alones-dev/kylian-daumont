"use client";

import React, {useEffect} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SiTailwindcss, SiNodedotjs, SiReact, SiPrisma, SiTypescript, SiDjango, SiBootstrap, SiDocker, SiJavascript, SiHtml5, SiCss3, SiPostgresql, SiGithub } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

import "./ProjectSlider.css"; 

const techIcons = [
  { id: "tailwind", icon: <SiTailwindcss className="w-4 h-4 md:w-7 md:h-7" color="#38BDF8" /> },
  { id: "nodejs", icon: <SiNodedotjs className="w-4 h-4 md:w-7 md:h-7" color="#05e841" /> },
  { id: "nextjs", icon: <RiNextjsFill className="w-4 h-4 md:w-7 md:h-7" color="#a5c5d9" /> },
  { id: "react", icon: <SiReact className="w-4 h-4 md:w-7 md:h-7" color="#61DAFB" /> },
  { id: "typescript", icon: <SiTypescript className="w-3.5 h-3.5 md:w-6 md:h-6" color="#3178C6" /> },
  { id: "django", icon: <SiDjango className="w-4 h-4 md:w-7 md:h-7" color="#02b028" /> },
  { id: "bootstrap", icon: <SiBootstrap className="w-4 h-4 md:w-7 md:h-7" color="#7952B3" /> },
  { id: "javascript", icon: <SiJavascript className="w-4 h-4 md:w-7 md:h-7" color="#F7DF1E" /> },
  { id: "html", icon: <SiHtml5 className="w-4 h-4 md:w-7 md:h-7" color="#E34F26" /> },
  { id: "postgresql", icon: <SiPostgresql className="w-4 h-4 md:w-7 md:h-7" color="#336791" /> },
  { id: "prisma", icon: <SiPrisma className="w-4 h-4 md:w-7 md:h-7" color="#b8b8b8" /> },
  { id: "css", icon: <SiCss3 className="w-4 h-4 md:w-7 md:h-7" color="#44a6fc" /> },
  { id: "docker", icon: <SiDocker className="w-4 h-4 md:w-7 md:h-7" color="#2496ED" /> },
];


const projects = [
  { 
    title: "Matcha", 
    stacks: ["typescript", "react", "nextjs", "nodejs", "tailwind"], 
    image: "/images/projects/matcha.png", 
    link: "https://github.com/alones-dev/matcha",
    github: true
  },
  { 
    title: "Camagru", 
    stacks: ["typescript", "react", "nextjs", "tailwind", "prisma"], 
    image: "/images/projects/camagru.png", 
    link: "https://github.com/alones-dev/camagru",
    github: true 
  },
  { 
    title: "Todo App", 
    stacks: ["typescript", "react", "nextjs", "tailwind", "prisma"], 
    image: "/images/projects/todo-app.png", 
    link: "https://github.com/alones-dev/todo-app",
    github: true 
  },
  { 
    title: "Le Yoga pour Sortir du lit", 
    stacks: ["typescript", "react", "nextjs", "tailwind"], 
    image: "/images/projects/ypsl.png", 
    link: "https://ypsl.fr",
    github: false 
  },
  { 
    title: "Sigma Rôleplay", 
    stacks: ["typescript", "react", "nextjs", "tailwind"], 
    image: "/images/projects/sigma.png", 
    link: "https://sigma-roleplay.vercel.app/",
    github: false 
  },
  { title: "ft_transcendence", 
    stacks: ["html", "css", "javascript", "django", "bootstrap", "postgresql", "docker"], 
    image: "/images/projects/ft_transcendence.png", 
    link: "https://github.com/alones-dev/ft_transcendence",
    github: true 
  },
];

export default function ProjectSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, 
    align: "center", 
    slidesToScroll: 1, 
    dragFree: true,
    containScroll: "trimSnaps",
    skipSnaps: false,
    watchDrag: true,
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
    <div className="relative w-full mx-auto">
      <div className="hidden md:block embla" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, index) => (
            <div
              key={index}
              className="embla__slide cursor-pointer outline-gradient-2 rounded-md overflow-hidden bg-gray-900 relative"
              onClick={() => handleClick(project.title, index)}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-3 right-3 z-10"
                onClick={(e) => e.stopPropagation()} 
              >
                <div className="
                  w-8 h-8 md:w-10 md:h-10 
                  rounded-full 
                  border-2 border-gray-300
                  bg-gray-900 
                  flex items-center justify-center
                  transition-all duration-200
                  hover:scale-110 hover:border-blue
                  group
                ">
                  {project.github ? (
                    <SiGithub className="text-white w-4 h-4 md:w-5 md:h-5 group-hover:text-blue transition-all duration-200" />
                  ) : (
                    <FiExternalLink className="text-white w-4 h-4 md:w-5 md:h-5 group-hover:text-blue transition-all duration-200" />
                  )}
                </div>
              </a>

              <div className="flex flex-col w-full h-[35vw] md:h-[30vw] rounded-t-md bg-gray-900 p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
              
              <div className="w-full flex items-center pb-2 bg-gray-900 rounded-b-md text-center border-t border-gray-700 ">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue font-satoshiBold text-md lg:text-xl ml-4 mt-2 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.title}
                </a>
              </div>

              <div className="absolute bottom-4 right-4 flex space-x-[6px] -my-[5px]">
                {showIcons(project.stacks)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden space-y-4 px-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer outline-gradient-2 rounded-md overflow-hidden bg-gray-900 relative"
          >
            <div className="flex flex-col w-full h-[50vw] rounded-t-md bg-gray-900 p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            
            <div className="w-full flex items-center pb-2 bg-gray-900 rounded-b-md text-center border-t border-gray-700">
              <span className="text-white font-satoshiBold text-md sm:text-xl ml-4 mt-2">
                {project.title}
              </span>
            </div>

            <div className="absolute top-3 right-3 z-10">
              <div className="
                w-8 h-8
                rounded-full 
                border-2 border-gray-300
                bg-gray-900 
                flex items-center justify-center transition-all duration-200
                hover:scale-110 hover:border-blue group
              ">
                {project.github ? (
                  <SiGithub className="text-white w-4 h-4 group-hover:text-blue transition-all duration-200" />
                ) : (
                  <FiExternalLink className="text-white w-4 h-4 group-hover:text-blue transition-all duration-200" />
                )}
              </div>
            </div>

            <div className="absolute bottom-4 right-4 flex space-x-[6px] -my-[5px]">
              {showIcons(project.stacks)}
            </div>
          </a>
        ))}
      </div>
    </div>
  );

}