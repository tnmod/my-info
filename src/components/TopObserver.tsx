import { useEffect, useRef, useState } from "react";

interface TopObserverProps {
  children: React.ReactNode;
  onTop: () => void;
}

export const TopObserver = ({
  children,
  onTop
}: TopObserverProps) => {
  const divRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAtTop(entry.isIntersecting);
        }
      });
    }, {
      rootMargin: '-1px 0px 0px 0px',
      threshold: 1.0
    });
    if (divRef.current) observer.observe(divRef.current);
    return () => {
      if (divRef.current) observer.unobserve(divRef.current);
    }
  }, []);
  return (
    <div>
      {children}
    </div>
  )
}