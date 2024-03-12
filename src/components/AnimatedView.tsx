import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedViewProps {
  children?: React.ReactNode;
  translateY?: {
    from: number;
    to: number;
  };
  opacity?: {
    from: number;
    to: number;
  };
  duration?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
  className?: string | undefined;
}

export const AnimatedView = ({
  children,
  translateY = {
    from: 0,
    to: 0,
  },
  opacity = {
    from: 0,
    to: 1,
  },
  duration = 1,
  delay = 0,
  once = false,
  amount = 0.1,
  className,
}: AnimatedViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount, once });
  const controls = useAnimation();

  const animate: Variants = {
    initial: {
      opacity: opacity.from,
      translateY: translateY.from,
    },
    animate: {
      opacity: opacity.to,
      translateY: translateY.to,
      transition: {
        duration: duration,
        ease: "easeInOut",
        delay: delay,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={"initial"}
      animate={controls}
      variants={animate}
      className={className}
    >
      {children}
    </motion.div>
  );
};
