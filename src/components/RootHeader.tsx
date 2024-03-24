"use client";
import { useState, useEffect, useRef } from "react";
import "@/app/globals.css";
import Image from "next/image";
import { useScroll } from "@/hooks/useScroll";
import Icon from "@/images/icon.png";
import { motion, useAnimation } from "framer-motion";
import { useViewport } from "@/hooks/useViewport";
import { AnimatedText } from "./AnimatedText";
//https://colorhunt.co/palette/b5c0d0ccd3caf5e8ddeed3d9

type Item = {
  title: string;
  href: string;
};

const Index: Item[] = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Works",
    href: "#works",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const RootHeader = () => {
  const { scrollY } = useScroll();
  const { container } = useViewport();
  const [active, setActive] = useState<boolean>(false);
  const [currentItem, setItem] = useState<number>(-1);

  useEffect(() => {
    if (active && scrollY < 300) {
      setActive(false);
    }
    if (currentItem > -1) setItem(-1);
  }, [scrollY]);
  return (
    <header>
      <div className="absolute top-0 left-0 w-screen z-30">
        <div
          className={`w-screen items-start flex justify-between p-5 bg-transparent`}
        >
          <div className={"w-16 h-16"}>
            <div className="-translate-y-3">
              <Image src={Icon} alt="icon" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateY: 200 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1.8 }}
            className={"w-auto h-auto flex flex-col"}
          >
            <ul className="flex flex-col items-end">
              {Index.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="group/item py-0.5 h-full flex justify-center items-center cursor-pointer"
                  >
                    <a
                      className="group-hover/item:-translate-x-3 transition-all duration-200 text-lg text-slate-700 font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(item.href)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
      <motion.button
        onClick={() => scrollY > 300 && setActive(!active)}
        className={`fixed z-50 m-5 ${scrollY > 300 ? "cursor-pointer" : "cursor-default"
          }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 300 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`w-12 h-12 md:h-14 md:w-14 flex flex-col justify-center items-center gap-1 md:gap-1.5 p-3 rounded-full ${active ? "bg-transparent" : "bg-white"
            }`}
        >
          <motion.div
            className="w-full h-0.5 md:h-1 md:rounded-full backdrop-blur-2xl "
            animate={{
              rotate: active ? 45 : 0,
              y: active
                ? container === "sm" || container === "md"
                  ? 6
                  : 10
                : 0,
              backgroundColor: active ? "white" : "black",
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-full h-0.5 md:h-1 md:rounded-full"
            animate={{
              opacity: active ? 0 : 1,
              backgroundColor: active ? "white" : "black",
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-full h-0.5 md:h-1 md:rounded-full bg-black"
            transition={{ duration: 0.3 }}
            animate={{
              rotate: active ? -45 : 0,
              y: active
                ? container === "sm" || container === "md"
                  ? -6
                  : -10
                : 0,
              backgroundColor: active ? "white" : "black",
            }}
          />
        </div>
      </motion.button>
      <motion.div
        className={`fixed top-0 left-0 w-screen h-screen p-2 max-w-3xl z-40 pr-2 justify-center items-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0, x: active ? 0 : -100 }}
        transition={{ duration: 0.5, ease: "easeOut", velocity: 100 }}
      >
        {
          active && (
            <div className="w-full relative flex flex-col flex-1 h-full bg-black rounded-tr-2xl rounded-xl">
              <ul className="absolute flex flex-col items-start w-full h-full justify-center p-24">
                {Index.map((item, index) => {
                  return (
                    <motion.li
                      key={index}
                      className="flex cursor-pointer py-4 items-center relative"
                      initial={{ opacity: 0, translateY: 50, translateX: 0 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 * index + 0.51 }}
                      onMouseEnter={() => setItem(index)}
                      onMouseLeave={() => setItem(-1)}
                    >
                      {
                        currentItem === index && (
                          <motion.div
                            className="w-4 h-4 bg-white rounded-full mr-2 absolute"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                          />
                        )
                      }
                      <motion.p
                        className="transition-all duration200 text-6xl font-bold text-[#dfdfdf]"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(false);
                          document
                            .querySelector(item.href)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        animate={currentItem === index ? { translateX: 40 } : { translateX: 0 }}
                        transition={{ duration: 0.03 }}
                      >
                        {item.title}
                      </motion.p>
                    </motion.li>
                  );
                })}
              </ul>
              <motion.div className="absolute bottom-0 px-8 py-3 w-full left-0 flex flex-row justify-between pointer-events-none">
                <AnimatedText text="Nguyễn Phú Tín" variants="little" textColor="#575656" once />
                <AnimatedText text="© Folio 2024" variants="little" textColor="#575656" once />
              </motion.div>
            </div>
          )
        }
      </motion.div>
    </header >
  );
};
