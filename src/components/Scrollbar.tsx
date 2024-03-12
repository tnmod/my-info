import { useScroll } from "@/hooks/useScroll";
import { useViewport } from "@/hooks/useViewport";
import { motion } from "framer-motion";

export const Scrollbar = () => {
  const { scrollY } = useScroll();
  const { viewportHeight, totalHeight } = useViewport();
  console.log("====================================");
  console.log(scrollY - scrollY * (viewportHeight / totalHeight));
  console.log("====================================");

  return (
    <div style={{ zIndex: 1000 }} className="fixed right-0 top-0 w-1 h-screen">
      <div
        style={{
          height: (viewportHeight / totalHeight) * 100 + "%",
          top: scrollY - scrollY * (viewportHeight / totalHeight),
        }}
        className="absolute right-0 w-1 bg-cyan-500"
      />
    </div>
  );
};
