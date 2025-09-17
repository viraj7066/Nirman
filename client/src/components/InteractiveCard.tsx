import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  hoverRotate?: number;
  glowEffect?: boolean;
}

export default function InteractiveCard({ 
  children, 
  className = "", 
  hoverScale = 1.02,
  hoverRotate = 0,
  glowEffect = false
}: InteractiveCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale,
        rotate: hoverRotate,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className={`relative ${className}`}
    >
      <Card className={`hover-elevate transition-all duration-300 ${glowEffect ? 'hover:shadow-lg hover:shadow-orange/20' : ''}`}>
        {children}
      </Card>
    </motion.div>
  );
}