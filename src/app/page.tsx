"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import MyImage from "@/images/IMG_0619.jpg";
import { useCallback, useEffect, useState } from "react";
import { useViewport } from "@/hooks/useViewport";
import { useImage } from "@/hooks/useImage";
import { Variants, motion, useMotionValueEvent } from "framer-motion";
import { ProgressBar } from "@/components/ProgressBar";
import { RootHeader } from "@/components/RootHeader";
import Typewriter from "typewriter-effect";
import { ParallaxText } from "@/components/ParallaxText";
import { MarqueeText } from "@/components/Marquee";
import { FrameworksList } from "@/constants/Keywords";
import { AnimatedText } from "@/components/AnimatedText";
import { useScroll } from "@/hooks/useScroll";
import { Scrollbar } from "@/components/Scrollbar";
import { AnimatedView } from "@/components/AnimatedView";
import { convertToPx } from "@/utils/string.helper";
//bg-[#B5C0D0]
export default function Home() {
  const { scrollY } = useScroll();

  const { container, viewportWidth } = useViewport();
  const [active, setActive] = useState<boolean>(false);
  const generateTextVariants = (translateX: number): Variants => ({
    initial: {
      fontSize: "48px",
      // translateY: -translateX * 0.8,
    },
    animate: {
      fontSize:
        viewportWidth * 0.05 > 166
          ? "166px"
          : viewportWidth * 0.05 < 42
          ? "42px"
          : viewportWidth * 0.05 + "px",
      transition: {
        duration: 0.1,
        ease: "easeInOut",
        delay: 0,
      },
      translateX: container === "sm" ? 0 : translateX,
    },
  });

  const initVariants: Variants = {
    initial: {
      translateY: "0",
    },
    animate: {
      translateY: "-100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 1.5,
      },
    },
  };

  useEffect(() => {
    const time = setTimeout(() => {
      setActive(true);
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <main className="scroll-smooth ">
      {/* <Scrollbar /> */}
      <motion.div
        variants={initVariants}
        initial="initial"
        animate="animate"
        className="fixed w-screen h-screen bg-black top-0 left-0 flex flex-col items-center justify-center z-50"
      >
        <AnimatedText text="Nguyễn Phú Tín" once />
        <AnimatedText text="© Folio 2024" once />
      </motion.div>
      {/*  /  */}
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 2, once: true }}
      >
        <RootHeader />
        <motion.div
          className="relative bg-white"
          style={{
            translateY: scrollY * 0.6,
            zIndex: -1000,
          }}
        >
          <div className="relative flex h-screen w-screen flex-col justify-end sm:justify-center sm:items-center items-start bg-white p-5">
            <div
              style={{ opacity: 4 - scrollY / 200 }}
              className="flex flex-col z-10"
            >
              <AnimatedText
                text="HI THERE, I'M"
                textTranform
                textColor="#00000099"
                textTranslateX={container === "sm" ? 0 : -50}
                containerDelay={1.8}
                textScaleDuration={0.6}
                duration={0.6}
                delay={0.05}
                once
              />
              <AnimatedText
                text="TIN NGUYEN."
                textTranform
                textColor="#00000099"
                textTranslateX={container === "sm" ? 0 : 50}
                duration={0.6}
                textScaleDuration={0.6}
                delay={0.05}
                containerDelay={1.8}
                once
              />
            </div>
            <div className="sm:absolute sm:bottom-4 sm:left-4 z-10">
              <Typewriter
                options={{
                  loop: true,
                  cursor: "_",
                  delay: 100,
                  deleteSpeed: 50,
                  wrapperClassName:
                    "text-slate-700 font-bold text-2xl bg-gradient-to-r from-[#009bff] via-[#093c79] to-[#000124] inline-block bg-clip-text text-transparent",
                  cursorClassName: "text-slate-700 font-bold text-2xl ",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Mobile Developer")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Unity Developer")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Web Developer")
                    .pauseFor(2000)
                    .start();
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                initial={{ scale: 0.6, translateY: 200, opacity: 0 }}
                animate={{ scale: 1, translateY: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.6 }}
                style={{
                  width: "calc(100vw - 10rem)",
                  height: "calc(100vw - 10rem)",
                  minWidth: "24rem",
                  minHeight: "24rem",
                  maxWidth: "42rem",
                  maxHeight: "42rem",
                }}
                className="rounded-full bg-gradient-to-b from-slate-300 via-slate-100 to-slate-50"
              />
            </div>
          </div>
          <div className="h-24 w-screen" />
        </motion.div>

        {/*  About  */}
        <div className="bg-neutral-900 rounded-tl-3xl rounded-tr-3xl">
          <div className="h-16 w-screen" />
          <div
            id={"about"}
            className="w-screen bg-neutral-900 flex flex-col items-center"
          >
            <div className="w-2/3 opacity-90 scale-110">
              <AnimatedText
                once
                text="ABOUT ME."
                delay={0.04}
                duration={0.6}
                containerDelay={0.1}
                variants="large"
                textColor="#cbd5e1"
              />
            </div>
            <div className="w-full relative flex justify-center items-center flex-col mt-16">
              <AnimatedView
                duration={0.5}
                delay={0.1}
                translateY={{ from: 50, to: 0 }}
                className="w-full flex justify-center items-center mt-2"
                once
              >
                <div className="w-64 md:w-72 lg:w-96 xl:w-4/6 lg:max-w-lg scale-110 relative">
                  <Image
                    src={MyImage}
                    alt="err"
                    priority
                    className="overflow-hidden rounded-lg object-contain"
                  />
                  <div className="bg-gradient-to-t from-neutral-900 from-20% via-transparent w-full h-full z-0 absolute top-0 left-0 overflow-hidden rounded-lg" />
                </div>
              </AnimatedView>
              <AnimatedView
                duration={0.6}
                delay={0.1}
                translateY={{ from: -50, to: -100 }}
                className="w-3/4 opacity-90 absolute -bottom-12 flex justify-end items-end"
                once
              >
                <span className="text-gray-300 w-full max-w-3xl text-base lg:text-2xl md:text-xl xl:text-3xl text-left text-pretty indent-24">
                  {`With one year of expertise in mobile development, particularly
                  in React Native. Beyond mobile, I'm adept at crafting web
                  interfaces using ViteJs. Passionate about creating visually
                  appealing and optimized user experiences across platforms.`}
                </span>
              </AnimatedView>
            </div>
          </div>
          <div className="h-32 w-screen bg-neutral-900" />
        </div>

        {/* <div className="w-screen bg-black">
          <MarqueeText keyWords={FrameworksList} />
        </div> */}

        {/*  Skills  */}
        <div id="skills" className="h-screen w-screen bg-neutral-900"></div>

        {/*  Works  */}
        <div id="works" className="bg-zinc-600">
          <div className="h-32 w-screen bg-neutral-900 rounded-b-3xl" />
          <div className="h-screen w-screen">
            <h1>test</h1>
          </div>
        </div>

        {/*  Contact  */}
        <div id="contact" className="h-screen w-screen bg-orange-500"></div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            opacity: scrollY * 0.002,
          }}
          transition={{ duration: 0, ease: "easeInOut", delay: 0 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="p-3 rounded-xl backdrop-blur-xl w-16 h-16 fixed bottom-5 right-5 border-2 border-[#00000010]"
        >
          <p className="text-white">UP</p>
        </motion.button>
      </motion.div>
    </main>
  );
}
