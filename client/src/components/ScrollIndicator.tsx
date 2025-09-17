import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-orange origin-left z-50"
      style={{ scaleX }}
    />
  );
}