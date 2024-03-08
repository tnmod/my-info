"use client";
import { useScroll } from "@/hooks/useScroll";
import styles from "./styles.module.css";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useViewport } from "@/hooks/useViewport";
import { useImage } from "@/hooks/useImage";
import { Variants, motion } from "framer-motion";
import { ProgressBar } from "@/components/ProgressBar";
import { RootHeader } from "@/components/RootHeader";
import Typewriter from 'typewriter-effect';
import { ParallaxText } from "@/components/ParallaxText";
import { MarqueeText } from "@/components/Marquee";
//bg-[#B5C0D0]
export default function Home() {
  const { scrollY } = useScroll();
  const { container, viewportWidth } = useViewport();
  const [active, setActive] = useState<boolean>(false);

  const generateTextVariants = (translateX: number): Variants => ({
    initial: {
      fontSize: "48px"
    },
    animate: {
      fontSize:
        viewportWidth * 0.05 > 96
          ? "96px"
          : viewportWidth * 0.05 < 42
            ? "42px"
            : viewportWidth * 0.05 + "px",
      transition: {
        duration: 0.1,
        ease: "easeInOut",
        delay: 0
      },
      translateX: container === "sm" ? 0 : translateX
    }
  });

  useEffect(() => {
    const time = setTimeout(() => {
      setActive(true);
    }, 1000);
    return () => clearTimeout(time);
  }, []);
  console.log(viewportWidth);


  return (
    <main className="scrollbar-thin scrollbar-track-red-800 scroll-smooth">
      <div className="absolute top-0 left-0 w-screen z-30">
        <RootHeader />
      </div>
      {/*  /  */}
      <div className="relative flex h-screen w-screen flex-col justify-end sm:justify-center sm:items-center items-start bg-white p-5">
        <div className="flex flex-col z-10">
          <motion.p
            className="font-extrabold text-neutral-700"
            variants={generateTextVariants(-50)}
            initial="initial"
            animate="animate"
          >
            {"HI THERE, I'M"}
          </motion.p>
          <motion.p
            className="font-extrabold text-neutral-700 z-10"
            variants={generateTextVariants(50)}
            initial="initial"
            animate="animate"
          >
            TIN NGUYEN.
          </motion.p>
        </div>

        <div className="sm:absolute sm:bottom-4 sm:left-4 z-10">
          <Typewriter
            options={{
              loop: true,
              cursor: "_",
              delay: 100,
              deleteSpeed: 50,
              wrapperClassName: "text-slate-700 font-bold text-2xl bg-gradient-to-r from-[#009bff] via-[#093c79] to-[#000124] inline-block bg-clip-text text-transparent",
              cursorClassName: "text-slate-700 font-bold text-2xl ",
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Mobile Developer')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Unity Developer')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Web Developer')
                .pauseFor(2000)
                .start();
            }}
          />
        </div>
        {/** Circle center */}
        <div className="w-96 h-96 md:w-3/6  bg-red-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-50" />
      </div>

      <MarqueeText keyWords={["React", "Next.js", "TailwindCSS", "Framer Motion", "TypeScript", "Unity", "C#", "JavaScript", "HTML", "CSS", "Node.js", "Express.js", "MongoDB", "Firebase", "Git", "GitHub"]} />

      {/*  About  */}
      <div id={"about"} className="h-screen w-screen bg-red-200">
      </div>


      {/*  Skills  */}
      <div id="skills" className="h-screen w-screen bg-red-800">

      </div>


      {/*  Works  */}
      <div id="works" className="h-screen w-screen bg-zinc-600">

      </div>


      {/*  Contact  */}
      <div id="contact" className="h-screen w-screen bg-orange-500">

      </div>

      {
        scrollY > 100 && (
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="p-3 rounded-xl backdrop-blur-xl w-16 h-16 fixed bottom-5 right-5 border-2 border-[#00000010]">
            <p className="text-white ">UP</p>
          </button>
        )
      }
    </main >
  );
}
