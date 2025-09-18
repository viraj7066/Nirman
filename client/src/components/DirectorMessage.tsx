import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import directorimg from "@assets/generated_images/ssfbf.png";

import { Quote, User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function DirectorMessage() {
  return (
    <section className="py-10 bg-gradient-to-br from-primary/5 via-background to-orange/5">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-6">
            <Badge className="mb-6 text-orange bg-orange/10 border-orange/20">
              <Quote className="w-4 h-4 mr-2" />
              Director's Message
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              A Message from Our Leadership
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hear directly from our Director about our vision, values, and commitment to excellence
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Director Image */}
          <AnimatedSection delay={0.2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="overflow-hidden hover-elevate">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={directorimg}
                      alt="Director of Nirman Group"
                      className="w-auto h-auto max-h-[450px] mx-auto object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                      <h3 className="text-xl font-bold mb-1">Mr. Hitesh Poddar</h3>
                      <p className="text-orange font-medium text-sm">Director</p>
                      <p className="text-xs opacity-90 mt-1">Nirman Group</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>

          {/* Director Message */}
          <AnimatedSection delay={0.4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="hover-elevate">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Quote className="w-6 h-6 text-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        Our Vision for the Future
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Leading Nashik's real estate development
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-base leading-relaxed text-muted-foreground italic mb-4">
                    "For over four decades, Nirman Group has been more than just a real estate developer. 
                    We are dream builders, creating not just homes but communities where families thrive. 
                    Our commitment to quality, transparency, and timely delivery has made us Nashik's most 
                    trusted name in real estate."
                  </blockquote>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        <strong className="text-primary">Quality First:</strong> Every project reflects our 
                        uncompromising standards in construction and design.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        <strong className="text-primary">Customer Trust:</strong> Our 1000+ happy families 
                        are a testament to our commitment to excellence.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">
                        <strong className="text-primary">Innovation:</strong> We continuously evolve to 
                        meet modern lifestyle needs while maintaining our core values.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/30">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-primary">Mr. Hitesh Poddar</strong><br />
                      Director, Nirman Group<br />
                      <span className="text-orange">Since 1980</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={0.6}>
          <div className="mt-6 text-center">
            <Card className="bg-primary/5 border-primary/10 p-4">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Ready to Build Your Dream Home?
              </h3>
              <p className="text-muted-foreground mb-4">
                Join our family of satisfied customers and experience the Nirman difference
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="/projects"
                  className="inline-flex items-center justify-center px-4 py-2 bg-orange hover:bg-orange/90 text-white rounded-lg font-medium transition-colors duration-200 text-sm"
                >
                  Explore Our Projects
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 border border-orange text-orange hover:bg-orange hover:text-white rounded-lg font-medium transition-colors duration-200 text-sm"
                >
                  Schedule a Visit
                </a>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
