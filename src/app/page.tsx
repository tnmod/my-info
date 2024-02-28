"use client";
import { useScroll } from "@/hooks/useScroll";
import styles from "./styles.module.css";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useViewport } from "@/hooks/useViewport";
import { Avatar2, useImage } from "@/hooks/useImage";
import { motion } from "framer-motion";
import { ProgressBar } from "@/components/ProgressBar";

const TIMEOUT = 3000;

export default function Home() {
  const { scrollY } = useScroll();
  const { devTools } = useImage();
  const {viewportHeight,viewportWidth,orientation} = useViewport();
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  let MyName = ["t", "n", "m", "o", "d"];

  const activeA = () => {
    const timeout = setTimeout(() => {
      setActive(true);
    }, TIMEOUT / 2);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [active]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          activeA();
          return 100;
        }
      });
    }, TIMEOUT / 100);

    return () => clearInterval(interval);
  }, []);

  console.log(active, progress);

  return (
    <div className="flex min-h-screen flex-col justify-between bg-white">
      <div
        className={`bg-white h-screen flex flex-col transform transition-all pt-32`}
      >
        <div
          className={`z-50 h-full w-full top-0 bg-[#ffe4c4] absolute items-center justify-center flex flex-col duration-500 ${
            scrollY > 1 && "-translate-y-full "
          }`}
        >
          {active && (
            <div className="flex flex-col">
              <motion.div
                animate={{
                  translateY: -100,
                  translateX: -200,
                  scale: 0.6,
                }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-row"
              >
                {MyName.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, translateY: -100 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.2 }}
                    >
                      <p className={styles.text}>{item}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
              <motion.div className="flex flex-row  justify-between">
                <motion.p
                  initial={{ opacity: 0, translateY: -100 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.3, delay: 2.5 }}
                  className="md:text-xl text-base lg:text-2xl text-black font-semibold"
                >
                  {"Nguyễn Phú Tín"}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, translateY: -100 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.3, delay: 2.7 }}
                  className="md:text-xl text-base lg:text-2xl text-black font-semibold"
                >
                  {"Mobile Developer"}
                </motion.p>
              </motion.div>
            </div>
          )}
          <motion.div
            className="absolute bottom-0 left-0 right-0 top-0 flex justify-center items-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 3.5 }}
          >
            <p className="text-black text-6xl font-bold">{progress}</p>
          </motion.div>
          <motion.div
            animate={{ opacity: active ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
              <ProgressBar
                time={0.2}
                progress={progress}
                color="#ffffff"
                backdrop="#000000"
              />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col min-h-screen justify-center">
          {scrollY > 1 && (
            <div className=" 2xl:items-center flex flex-col bg-white">
              <div className="lg:h-32 h-72 w-full" />
              <div className=" md:flex flex-row min-h-screen xl:justify-center 2xl:max-w-screen-xl">
                <div className="flex-1 xl:flex-none hidden lg:flex h-full px-6 justify-center">
                  <motion.div
                    initial={{ opacity: 0, translateY: -100 }}
                    animate={
                      scrollY > 1
                        ? { opacity: 1, translateY: 0 }
                        : { opacity: 0, translateY: -100 }
                    }
                    transition={{ duration: 0.3, delay: 0.2 }}
                    style={{
                      width: window.innerWidth * 0.4,
                      height: window.innerWidth * 0.4 * 1.5,
                      maxWidth: 512,
                      maxHeight: 512 * 1.5,
                    }}
                  >
                    <Image
                      src={Avatar2}
                      alt="tnmod"
                      style={{ width: "100%", height: "100%" }}
                      sizes="50%"
                      className="overflow-hidden rounded-xl"
                      objectPosition="center"
                    />
                  </motion.div>
                </div>
                <div className="flex-1 px-6 flex flex-col">
                  <div className="gap-6 grid xl:grid-cols-2 2xl:grid-cols-1">
                    <div className="flex-col flex-1 flex gap-4 ">
                      <motion.p
                        className="flex-1 text-black text-base md:text-lg lg:text-xl xl:text-2xl"
                        initial={{ opacity: 0, translateY: -100 }}
                        animate={
                          scrollY > 1
                            ? { opacity: 1, translateY: 0 }
                            : { opacity: 0, translateY: -100 }
                        }
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        {
                          "Hello, I'm Nguyen Phu Tin, a dedicated mobile developer with a passion for crafting seamless and user-friendly applications. My expertise lies in React Native, allowing me to build versatile and cross-platform mobile solutions for both iOS and Android."
                        }
                      </motion.p>
                      <motion.p
                        className="flex-1 text-black text-base md:text-lg lg:text-xl xl:text-2xl"
                        initial={{ opacity: 0, translateY: -100 }}
                        animate={
                          scrollY > 1
                            ? { opacity: 1, translateY: 0 }
                            : { opacity: 0, translateY: -100 }
                        }
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        {
                          "Beyond mobile development, I'm well-versed in Next.js, showcasing my versatility in web development. Additionally, I have a working knowledge of MySQL, adding a database layer to my skill set."
                        }
                      </motion.p>
                    </div>
                    <div className="flex-col flex-1 flex gap-4 ">
                      <motion.p
                        className="text-black text-base md:text-lg lg:text-xl xl:text-2xl"
                        initial={{ opacity: 0, translateY: -100 }}
                        animate={
                          scrollY > 1
                            ? { opacity: 1, translateY: 0 }
                            : { opacity: 0, translateY: -100 }
                        }
                        transition={{ duration: 0.3, delay: 0.6 }}
                      >
                        {
                          "With over a year of hands-on experience in the field, I've had the opportunity to contribute to various projects, honing my skills and staying abreast of the latest industry trends. My commitment to delivering high-quality, efficient code is at the core of my professional ethos."
                        }
                      </motion.p>
                      <motion.p
                        className="text-black text-base md:text-lg lg:text-xl xl:text-2xl"
                        initial={{ opacity: 0, translateY: -100 }}
                        animate={
                          scrollY > 1
                            ? { opacity: 1, translateY: 0 }
                            : { opacity: 0, translateY: -100 }
                        }
                        transition={{ duration: 0.3, delay: 0.8 }}
                      >
                        {
                          "I'm excited about the intersection of mobile and web technologies, and I'm always eager to take on new challenges. Let's build something great together!"
                        }
                      </motion.p>
                    </div>
                  </div>
                  <div
                    style={{ height: 100 }}
                    className="flex justify-center lg:justify-start gap-6 mt-6"
                  >
                    {devTools.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`justify-center items-center flex`}
                        >
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: scrollY > 1 ? 1 : 0 }}
                            transition={{
                              delay: index * 0.1 + 0.8,
                              duration: 0.3,
                            }}
                          >
                            <Image
                              src={item.src}
                              alt={item.name}
                              width={48}
                              height={48}
                              className={`rounded-lg`}
                            />
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
