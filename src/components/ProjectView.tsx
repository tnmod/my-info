import { useViewport } from "@/hooks/useViewport";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Erabook from "@/images/projects/erabook.png";
import RNBP2 from "@/images/projects/rn-boilerplate.png";
import Event from "@/images/projects/event.png";
import { useMouse } from "./MouseTracking";
import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";

interface ProjectProps {
  title: string;
  image: StaticImageData;
  url: string;
  tech: string[];
  member?: number;
  position?: string;
}

const projects: ProjectProps[] = [
  {
    title: 'Erabook',
    tech: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    url: 'https://gitlab.com/bookwormsteam/erabook-app',
    image: Erabook,
    member: 6,
    position: 'Leader',
  },
  {
    title: 'React Native Boilerplate',
    tech: ['React Native', 'TypeScript', 'Vite', 'tailwindcss', 'Redux'],
    url: 'https://tnmod.github.io/web-rn-boilerplate/',
    image: RNBP2,
  },
  {
    title: `International Women's Day`,
    tech: ['Vite', 'TypeScript', 'Firebase', 'tailwindcss'],
    url: 'https://event-8-3.vercel.app/',
    image: Event,
    member: 2,
  }
]

export const ProjectView = () => {
  const { viewportWidth, container } = useViewport();
  const { x, y } = useMouse();
  const [hover, setHover] = useState(false);



  const item = (project: ProjectProps) => {

    return (
      <a
        href={project.url}
        key={project.title}
        className='flex-1 group flex rounded-xl justify-center items-center overflow-hidden relative'>
        <Image
          width={viewportWidth / (2.5)}
          height={((viewportWidth / 2.5) * 9) / 16}
          objectFit="cover"
          src={project.image}
          alt={project.title} />
        <div className='absolute top-0 left-0 bg-gradient-to-t from-gray-900 w-full h-full flex items-end p-4'>
          <div className="group-hover:text-gray-200 group-hover:-translate-y-4 transition-all duration-300">
            <p className='text-lg lg:text-2xl 2xl:text-4xl font-bold text-gray-200'>{project.title}</p>
          </div>
        </div>
      </a>
    )
  }

  const itemSm = (project: ProjectProps) => {

    return (
      <a
        href={project.url}
        key={project.title}
        className='flex-1 group flex rounded-xl justify-start overflow-hidden relative'>
        <Image
          width={viewportWidth / (2.5)}
          height={((viewportWidth / 2.5) * 9) / 16}
          objectFit="cover"
          src={project.image}
          alt={project.title} />
        <div className="bg-slate-400 flex-1">
          <p className='text-lg lg:text-2xl 2xl:text-4xl font-bold text-gray-200'>Project: {project.title}</p>
          {
            project.member && <p className='text-lg lg:text-2xl 2xl:text-4xl font-bold text-gray-200'>Team size: {project.member}</p>
          }
          {
            project.position && <p className='text-lg lg:text-2xl 2xl:text-4xl font-bold text-gray-200'>position: {project.position}</p>
          }
        </div>
      </a>
    )
  }

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map(viewportWidth > 1023 ? item : itemSm)}
      <motion.div
        animate={{
          opacity: hover ? 1 : 0,
          left: x - 32,
          top: y - 32,
        }}
        transition={{ duration: 0.1, ease: "linear" }}
        className="rounded-full mix-blend-exclusion bg-gradient-to-b from-slate-300 via-slate-100 to-slate-50"
        style={{
          position: 'absolute',
          width: '64px',
          height: '64px',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}