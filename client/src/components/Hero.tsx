import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import heroImage from "@assets/generated_images/Construction_site_hero_image_e22705d0.png";
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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Nirman Group Construction Site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 text-orange bg-orange/10 border-orange/20" data-testid="badge-established">
            <Award className="w-4 h-4 mr-2" />
            Established 1980 - 45+ Years of Excellence
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Dreams
            <span className="block text-orange font-serif italic">Since 1980</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Nashik's Most Trusted Real Estate Developer
            <br />
            Creating Quality Homes for Happy Families
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-orange hover:bg-orange/90 text-lg px-8 py-6"
              data-testid="button-explore-projects"
            >
              <Building className="mr-2 h-5 w-5" />
              Explore Our Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm"
              data-testid="button-watch-video"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>
        </div>

        {/* Stats Counter */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mx-auto max-w-4xl border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="stat-experience">
              <div className="text-orange mb-2">
                <Calendar className="w-8 h-8 mx-auto" />
              </div>
              <Counter end={45} suffix="+" />
              <div className="text-white/80 text-sm mt-1">Years Experience</div>
            </div>
            <div className="text-center" data-testid="stat-projects">
              <div className="text-orange mb-2">
                <Building className="w-8 h-8 mx-auto" />
              </div>
              <Counter end={22} suffix="+" />
              <div className="text-white/80 text-sm mt-1">Projects Completed</div>
            </div>
            <div className="text-center" data-testid="stat-families">
              <div className="text-orange mb-2">
                <Users className="w-8 h-8 mx-auto" />
              </div>
              <Counter end={1000} suffix="+" />
              <div className="text-white/80 text-sm mt-1">Happy Families</div>
            </div>
            <div className="text-center" data-testid="stat-assets">
              <div className="text-orange mb-2">
                <Award className="w-8 h-8 mx-auto" />
              </div>
              <Counter end={500} suffix="+" />
              <div className="text-white/80 text-sm mt-1">Crores Assets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}