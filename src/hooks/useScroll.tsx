import { useEffect, useState } from "react";
import {useLenis} from "lenis/react";
export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  useLenis((lenis) => {
    setScrollY(lenis.scroll);
  }, []);
  return {
    scrollY,
  };
};
