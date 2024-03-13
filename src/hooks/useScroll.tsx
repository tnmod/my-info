import { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  useLenis((lenis) => {
    setScrollY(lenis.scroll);
  }, []);
  return {
    scrollY,
  };
};
