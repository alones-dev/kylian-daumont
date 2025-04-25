"use client";

import React from "react";
import { SiTailwindcss, SiNodedotjs, SiNestjs, SiReact, SiPrisma, SiTypescript, SiDjango, SiBootstrap, SiDocker, SiJavascript, SiHtml5, SiCss3, SiPostgresql, SiGithub } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation, Mousewheel } from 'swiper/modules';
import { useLanguage } from "@/app/context/LanguageContext";

const techIcons = [
  { id: "tailwind", icon: <SiTailwindcss className="w-4 h-4 md:w-7 md:h-7" color="#38BDF8" /> },
  { id: "nodejs", icon: <SiNodedotjs className="w-4 h-4 md:w-7 md:h-7" color="#05e841" /> },
  { id: "nestjs", icon: <SiNestjs className="w-4 h-4 md:w-7 md:h-7" color="#eb4034" /> },
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
    desc: {
      en: "web dating application, including user management, real-time chat, matchmaking system, geolocation, search filters...",
      fr: "Application web de rencontre, incluant la gestion des utilisateurs, le chat en temps réel, le système de matchmaking, la géolocalisation, les filtres de recherche..."
    },
    stacks: ["typescript", "react", "nextjs", "nestjs", "tailwind"], 
    image: "/images/projects/matcha.png", 
    link: "https://github.com/alones-dev/matcha",
    github: true
  },
  { 
    title: "Camagru", 
    desc: {
      en: "Web application for sharing photos with filters, including user management, posts...",
      fr: "Application web de partage de photos avec filtres, incluant la gestion des utilisateurs, les posts..."
    },
    stacks: ["typescript", "react", "nextjs", "tailwind", "prisma"], 
    image: "/images/projects/camagru.png", 
    link: "https://github.com/alones-dev/camagru",
    github: true 
  },
  { 
    title: "Todo App", 
    desc: {
      en: "Simple todo list web application with user authentication and tasks management",
      fr: "Application web de liste de tâches simple avec authentification utilisateur et gestion des tâches"
    },
    stacks: ["typescript", "react", "nextjs", "tailwind", "prisma"], 
    image: "/images/projects/todo-app.png", 
    link: "https://github.com/alones-dev/todo-app",
    github: true 
  },
  { 
    title: "Le Yoga pour Sortir du lit", 
    desc: {
      en: "Showcase site for an online yoga studio, pro project for a client",
      fr: "Site vitrine pour un studio de yoga en ligne, projet pro pour un client"
    },
    stacks: ["typescript", "react", "nextjs", "tailwind"], 
    image: "/images/projects/ypsl.jpg", 
    link: "https://ypsl.fr",
    github: false 
  },
  { 
    title: "Sigma Rôleplay", 
    desc: {
      en : "Showcase site for a game server, pro project for a client",
      fr : "Site vitrine pour un serveur de jeu, projet pro pour un client"
    },
    stacks: ["typescript", "react", "nextjs", "tailwind"], 
    image: "/images/projects/sigma.png", 
    link: "https://sigma-roleplay.fr/",
    github: false 
  },
  { title: "ft_transcendence", 
    desc: {
      en: "Last project at 42, web application with a online game (pong game), including user management, real-time chat, matchmaking system, friends system...",
      fr: "Dernier projet à 42, application web avec un jeu en ligne (jeu pong), incluant la gestion des utilisateurs, le chat en temps réel, le système de matchmaking, le système d'amis..."
    },
    stacks: ["html", "css", "javascript", "django", "bootstrap", "postgresql", "docker"], 
    image: "/images/projects/ft_transcendence.png", 
    link: "https://github.com/alones-dev/ft_transcendence",
    github: true 
  },
];

export default function ProjectSlider() {
  const { lang } = useLanguage();
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
      <div className="hidden md:block">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={40}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation, Mousewheel]}
          mousewheel={{
            forceToAxis: true,    
            releaseOnEdges: true,
            sensitivity: 1,      
            thresholdDelta: 10, 
            thresholdTime: 500, 
          }}
          className="swiper-container"
          initialSlide={Math.floor(projects.length / 2)}
          slideToClickedSlide={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="!w-[450px] h-auto">
              <div className="cursor-pointer outline-gradient-2 rounded-xl overflow-hidden bg-gray-900 relative h-full flex flex-col">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 z-10">
                  <div className="
                    w-6 h-6 md:w-8 md:h-8 
                    rounded-full 
                    border-2 border-gray-300
                    bg-gray-900 
                    flex items-center justify-center
                    transition-all duration-200
                    hover:scale-110 hover:border-blue
                    group
                  ">
                    {project.github ? (
                      <SiGithub className="text-white w-3 h-3 md:w-4 md:h-4 group-hover:text-blue transition-all duration-200" />
                    ) : (
                      <FiExternalLink className="text-white w-3 h-3 md:w-4 md:h-4 group-hover:text-blue transition-all duration-200" />
                    )}
                  </div>
                </a>
                <div className="flex flex-col w-full h-[35vw] md:h-64 rounded-t-md bg-gray-900 p-4">
                  <img src={project.image} alt={project.title} className="w-full h-full rounded-md object-cover" />
                </div>
                <div className="w-full p-4 bg-gray-900 rounded-b-md border-t border-gray-700">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue font-satoshiBold text-lg transition-colors duration-200">
                    {project.title}
                  </a>
                  <p className="text-gray-400 text-sm mt-1 font-satoshiMedium">
                    {project.desc[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {showIcons(project.stacks)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="md:hidden grid grid-cols-1 gap-4 px-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer outline-gradient-2 rounded-md overflow-hidden bg-gray-900 relative flex flex-col h-full"
          >
            <div className="flex flex-col w-full h-64 rounded-t-md bg-gray-900 p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            
            <div className="w-full p-4 bg-gray-900 rounded-b-md border-t border-gray-700 flex-grow">
              <span className="text-white font-satoshiBold text-lg">
                {project.title}
              </span>
              <p className="text-gray-400 text-sm mt-1 font-satoshiMedium">
                {project.desc[lang]}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {showIcons(project.stacks)}
              </div>
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
          </a>
        ))}
      </div>
    </div>
  );

}
