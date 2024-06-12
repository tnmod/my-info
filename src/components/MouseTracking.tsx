import { useEffect, useRef, useState } from "react"

export const useMouse = () => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const [, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      mousePosition.current = { x: ev.clientX, y: ev.clientY };
      setMousePosition({ x: ev.clientX, y: ev.clientY }); // This will trigger a re-render
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return { x: mousePosition.current.x, y: mousePosition.current.y };
};