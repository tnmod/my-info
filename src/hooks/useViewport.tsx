import { useState, useEffect } from "react";

export const useViewport = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [orientation, setOrientation] = useState<"portrait" | "landscape">(
    "portrait"
  );
  const [container, setContainer] = useState<
    "sm" | "md" | "lg" | "xl" | "2xl" | "none"
  >("none");
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (viewportWidth > viewportHeight) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  }, [viewportWidth, viewportHeight]);

  useEffect(() => {
    if (viewportWidth <= 640) {
      setContainer("sm");
    } else if (viewportWidth <= 768) {
      setContainer("md");
    } else if (viewportWidth <= 1024) {
      setContainer("lg");
    } else if (viewportWidth <= 1280) {
      setContainer("xl");
    } else if (viewportWidth <= 1536) {
      setContainer("2xl");
    } else {
      setContainer("none");
    }
  }, [viewportWidth]);

  useEffect(() => {
    const calculateTotalHeight = () => {
      const elements = document.body.getElementsByTagName("*");
      let totalHeight = 0;

      for (let i = 0; i < elements.length; i++) {
        totalHeight += elements[i].offsetHeight;
      }
      setTotalHeight(totalHeight);
    };

    calculateTotalHeight();

    window.addEventListener("resize", calculateTotalHeight);

    return () => {
      window.removeEventListener("resize", calculateTotalHeight);
    };
  }, []);

  return {
    viewportHeight,
    viewportWidth,
    orientation,
    container,
    totalHeight
  };
};
