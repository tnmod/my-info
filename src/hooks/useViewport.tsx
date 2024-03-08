import { useState, useEffect } from 'react';

export const useViewport = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [container, setContainer] = useState<"sm" | "md" | "lg" | "xl" | "2xl" | "none">("none");

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (viewportWidth > viewportHeight) {
      setOrientation('landscape');
    } else {
      setOrientation('portrait');
    }
  }, [viewportWidth, viewportHeight]);

  useEffect(() => {
    if (viewportWidth < 640) {
      setContainer("sm");
    } else if (viewportWidth < 768) {
      setContainer("md");
    } else if (viewportWidth < 1024) {
      setContainer("lg");
    } else if (viewportWidth < 1280) {
      setContainer("xl");
    } else if (viewportWidth < 1536) {
      setContainer("2xl");
    } else {
      setContainer("none");
    }
  }, [viewportWidth]);

  return {
    viewportHeight,
    viewportWidth,
    orientation,
    container,
  };
};
