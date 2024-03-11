import { useViewport } from '@/hooks/useViewport';
import { Variants, motion, useAnimation, useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react'; // Import ReactNode

interface AnimatedTextProps {
  text: string;
  variants?: "small" | "medium" | "large";
  delay?: number;
  duration?: number;
  translateY?: {
    from: number;
    to: number;
  };
  containerDelay?: number;
  once?: boolean;
  amount?: number;
  textColor?: string;
  loop?: boolean;
  loopDuration?: number;
  textTranslateX?: number;
  textTranform?: boolean;
}

const TEXT_SIZE_CLASSES = {
  small: "text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl",
  medium: "text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl",
  large: "text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl",
};

export const AnimatedText = ({
  text,
  variants = "small",
  delay = 0,
  duration = 1,
  translateY = {
    from: 0,
    to: 100
  },
  containerDelay = 0,
  once = false,
  amount = 0.1,
  textColor = "#fff",
  loop = false,
  loopDuration = 0,
  textTranslateX = 0,
  textTranform = false
}: AnimatedTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inViewRef = useInView(ref, { amount, once });
  const controls = useAnimation();
  const { container, viewportWidth } = useViewport();

  const generateTextVariants = (translateX: number): Variants => ({
    initial: {
      fontSize: "48px",
      // translateY: -translateX * 0.8,
    },
    animate: {
      fontSize:
        viewportWidth * 0.05 > 166
          ? "166px"
          : viewportWidth * 0.05 < 42
            ? "42px"
            : viewportWidth * 0.05 + "px",
      transition: {
        duration: 0.1,
        ease: "easeInOut",
        delay: 0
      },
      translateX: container === "sm" ? 0 : translateX
    }
  });

  useEffect(() => {
    let loopAnimation = () => {
      controls.start("animate");

      if (loop) {
        setTimeout(async () => {
          await controls.start("initial");
          loopAnimation();
        }, (loopDuration + duration + containerDelay) * 1000);
      }
    }

    if (inViewRef) {
      loopAnimation()
    } else {
      controls.start("initial");
    }

  }, [inViewRef]);

  return (
    <motion.div
      ref={ref}
      transition={{ staggerChildren: 0.1 }}
      className='overflow-hidden'
    >
      {
        text.split('').map((char, index) => (
          <motion.div
            className='inline-block pt-5'
            key={index}
            initial='initial'
            animate={controls}
            variants={{
              initial: {
                opacity: 0,
                translateY: translateY.to,
              },
              animate: {
                opacity: 1,
                translateY: translateY.from,
                transition: {
                  duration,
                  delay: index * delay
                }
              }
            }}
          >
            <motion.span
              initial='initial'
              animate='animate'
              variants={textTranform ? generateTextVariants(textTranslateX) : {}}
              style={{ color: textColor }}
              className={`text-black font-bold tracking-widest uppercase ${!textTranform && TEXT_SIZE_CLASSES[variants]}`}>
              {char}
            </motion.span>
          </motion.div>
        ))
      }
    </motion.div>
  )
}