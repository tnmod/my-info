import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface Props {
  content: string;
  speed: number;
  direction: number;
}

export const ScrollingText = ({ content, speed, direction }:Props) => {
  const controls = useAnimation();

  const handleScroll = (e:any) => {
    const delta = e.deltaY;
    controls.start({
      x: direction === 1 ? speed * (delta > 0 ? 1 : -1) : 0,
    });
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <motion.div className="scrolling-text" animate={controls}>
      <h2 className="scrolling-text-content text-black">{content}</h2>
    </motion.div>
  );
};