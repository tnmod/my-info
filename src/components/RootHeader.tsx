"use client";
import { useState, useEffect } from "react";
import "@/app/globals.css";
import Image from "next/image";
import { useScroll } from "@/hooks/useScroll";
import Icon from "@/images/icon.png";
import { motion } from "framer-motion";
import { useViewport } from "@/hooks/useViewport";
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

  useEffect(() => {
    if (active && scrollY < 300) {
      setActive(false);
    }
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
        className={`fixed z-50 m-5 ${
          scrollY > 300 ? "cursor-pointer" : "cursor-default"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 300 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`w-12 h-12 md:h-14 md:w-14 flex flex-col justify-center items-center gap-1 md:gap-1.5 p-3 rounded-full ${
            active ? "bg-transparent" : "bg-white"
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
        className={`fixed top-0 left-0 w-screen h-screen max-w-lg z-40 pr-2 justify-center items-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0, x: active ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full bg-black rounded-tr-2xl rounded-br-2xl pl-8 pt-20">
          <ul className="flex flex-col h-full items-start">
            {Index.map((item, index) => {
              return (
                <li
                  key={index}
                  className="group/item2 py-0.5 flex items-center cursor-pointer"
                >
                  <a
                    onFocus={(e) => {
                      console.log(e);
                    }}
                    className="group-hover/item2:text-white transition-all duration-200 text-lg text-white font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(false);
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
        </div>
      </motion.div>
    </header>
  );
};
