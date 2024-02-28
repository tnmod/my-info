import { useState, useEffect } from 'react';

export  const useViewport = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

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

  return {
    viewportHeight,
    viewportWidth,
    orientation,
  };
};
