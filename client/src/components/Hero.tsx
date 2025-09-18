import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/Construction_site_hero_image_e22705d0.png";
import FloatingElements from "./FloatingElements";
import { Play, Award, Users, Building, Calendar } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ end, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= end) {
          clearInterval(timer);
          return end;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="font-bold text-2xl md:text-3xl">
      {prefix}{Math.floor(count)}{suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingElements />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={heroImage}
          alt="Nirman Group Construction Site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="mb-6 text-orange bg-orange/10 border-orange/20" data-testid="badge-established">
              <Award className="w-4 h-4 mr-2" />
              Established 1980 - 45+ Years of Excellence
            </Badge>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Building Dreams
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block text-orange font-serif italic"
            >
              Since 1980
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
          >
            Nashik's Most Trusted Real Estate Developer
            <br />
            Creating Quality Homes for Happy Families
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-orange hover:bg-orange/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                data-testid="button-explore-projects"
                asChild
              >
                <a href="/projects">
                  <Building className="mr-2 h-5 w-5" />
                  Explore Our Projects
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                data-testid="button-watch-video"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Counter */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mx-auto max-w-4xl border border-white/20 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Calendar, end: 45, suffix: "+", label: "Years Experience", testId: "stat-experience", delay: 0 },
              { icon: Building, end: 22, suffix: "+", label: "Projects Completed", testId: "stat-projects", delay: 0.2 },
              { icon: Users, end: 1000, suffix: "+", label: "Happy Families", testId: "stat-families", delay: 0.4 },
              { icon: Award, end: 500, suffix: "+", label: "Crores Assets", testId: "stat-assets", delay: 0.6 }
            ].map((stat, index) => (
              <motion.div 
                key={stat.testId}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + stat.delay }}
                whileHover={{ scale: 1.05 }}
                className="text-center" 
                data-testid={stat.testId}
              >
                <motion.div 
                  className="text-orange mb-2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 mx-auto" />
                </motion.div>
                <Counter end={stat.end} suffix={stat.suffix} />
                <div className="text-white/80 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}