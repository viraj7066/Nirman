import { motion } from "framer-motion";
import { Building2, Home, Award, Users } from "lucide-react";

export default function FloatingElements() {
  const elements = [
    { icon: Building2, delay: 0, x: "10vw", y: "20vh" },
    { icon: Home, delay: 0.5, x: "80vw", y: "15vh" },
    { icon: Award, delay: 1, x: "90vw", y: "70vh" },
    { icon: Users, delay: 1.5, x: "15vw", y: "80vh" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.03,
            scale: 1,
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            delay: element.delay,
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute"
          style={{ left: element.x, top: element.y }}
        >
          <element.icon className="w-24 h-24 text-primary" />
        </motion.div>
      ))}
    </div>
  );
}