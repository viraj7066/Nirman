import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Target,
  Eye,
  Heart,
  Shield,
  Handshake,
  ArrowRight
} from "lucide-react";

export default function About() {
  //todo: remove mock functionality - replace with real leadership data
  const leadership = [
    {
      name: "Hitesh Poddar",
      position: "Managing Director",
      experience: "45+ Years",
      description: "Visionary leader who founded Nirman Group in 1980 with a dream to provide quality homes to Nashik families."
    },
    {
      name: "Mahendra Poddar",
      position: "General Manager",
      experience: "25+ Years", 
      description: "Leads project execution and customer relations, ensuring every family gets their dream home."
    },
    {
      name: "XYZ",
      position: "Chief Architect",
      experience: "20+ Years",
      description: "Award-winning architect responsible for the innovative designs and modern amenities in our projects."
    }
  ];

  const milestones = [
    { year: "1980", event: "Nirman Group Founded", description: "Started with a vision to transform Nashik's residential landscape" },
    { year: "1985", event: "First Major Project", description: "Completed our first residential complex in Panchavati" },
    { year: "1995", event: "500 Families Milestone", description: "Crossed 500 happy families living in Nirman homes" },
    { year: "2000", event: "Expansion to Dwarka", description: "Launched projects in Dwarka and Gangapur Road areas" },
    { year: "2010", event: "Modern Amenities Era", description: "Introduced contemporary designs and luxury amenities" },
    { year: "2018", event: "RERA Compliance", description: "All projects achieved full RERA compliance and transparency" },
    { year: "2020", event: "1000+ Families", description: "Celebrated 1000+ happy families milestone" },
    { year: "2025", event: "45 Years of Excellence", description: "Continuing the legacy with upcoming premium projects" }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Uncompromising standards in materials, construction, and finishing to deliver homes that last generations."
    },
    {
      icon: Shield,
      title: "Transparency & Trust",
      description: "Complete RERA compliance, honest communication, and transparent dealings in every transaction."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to delivering projects on schedule, respecting our customers' time and investment."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision is made with our customers' best interests at heart, ensuring their satisfaction."
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "Conducting business with honesty, fairness, and ethical practices in all our interactions."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously evolving our designs and processes to create modern, sustainable living spaces."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-orange/5">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 text-orange bg-orange/10 border-orange/20" data-testid="badge-about">
                <Building2 className="w-4 h-4 mr-2" />
                About Nirman Group
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6" data-testid="heading-about">
                45 Years of
                <span className="block text-orange font-serif italic">Building Dreams</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                From a small beginning in 1980 to becoming Nashik's most trusted real estate developer, 
                our journey has been defined by quality, integrity, and customer satisfaction.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange mb-2">45+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange mb-2">22+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Crores Assets</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      In 1980, with a vision to provide quality homes to families in Nashik, Nirman Group was born. 
                      What started as a small real estate venture has grown into one of Nashik's most respected and 
                      trusted developers.
                    </p>
                    <p>
                      Located at Nirman House on L.P. Poddar Marg, College Road, we have been at the forefront of 
                      Nashik's urban development for over four decades. Our commitment to quality construction, 
                      timely delivery, and customer satisfaction has made us the preferred choice for homebuyers.
                    </p>
                    <p>
                      Today, with 1000+ happy families living in our projects across Nashik, we continue to build 
                      on our legacy of excellence, innovation, and trust.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-primary/5 p-6 rounded-xl"
                  >
                    <Eye className="w-8 h-8 text-orange mb-4" />
                    <h3 className="font-semibold text-primary mb-2">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      To be Nashik's leading real estate developer, creating sustainable communities for future generations.
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-orange/5 p-6 rounded-xl"
                  >
                    <Target className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-primary mb-2">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">
                      Building quality homes with modern amenities while maintaining affordability and transparency.
                    </p>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Journey Through Time</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Key milestones that have shaped Nirman Group into what it is today
                </p>
              </div>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange/20 hidden lg:block"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <AnimatedSection
                    key={milestone.year}
                    delay={index * 0.1}
                    direction={index % 2 === 0 ? "left" : "right"}
                  >
                    <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}>
                      <div className="lg:w-1/2">
                        <Card className="hover-elevate">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                                <Clock className="w-6 h-6 text-orange" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-orange">{milestone.year}</div>
                                <h3 className="font-semibold text-primary">{milestone.event}</h3>
                              </div>
                            </div>
                            <p className="text-muted-foreground">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="w-4 h-4 bg-orange rounded-full border-4 border-background shadow-lg hidden lg:block relative z-10"></div>
                      
                      <div className="lg:w-1/2"></div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide every decision and define our commitment to excellence
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full hover-elevate">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <value.icon className="w-8 h-8 text-orange" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Leadership</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Meet the visionary leaders who have built Nirman Group's legacy of excellence
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <AnimatedSection key={leader.name} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full hover-elevate">
                      <CardContent className="p-6 text-center">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-12 h-12 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-1">{leader.name}</h3>
                        <p className="text-orange font-medium mb-2">{leader.position}</p>
                        <Badge variant="secondary" className="mb-4">{leader.experience}</Badge>
                        <p className="text-muted-foreground text-sm leading-relaxed">{leader.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Visit Our Office</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We'd love to meet you and discuss how we can help you find your dream home
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-orange" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">Head Office</h3>
                          <p className="text-muted-foreground">
                            Nirman House, L.P. Poddar Marg<br />
                            College Road, Nashik - 422005<br />
                            (Opposite Big Bazaar)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-orange" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">Phone Numbers</h3>
                          <p className="text-muted-foreground">
                            Sales: +91 8888883257<br />
                            Support: +91 8888883294
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-orange" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">Email</h3>
                          <p className="text-muted-foreground">
                            sales@nirman.co.in<br />
                            info@nirman.co.in
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-orange" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday & Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-primary mb-4">Ready to Visit?</h3>
                      <p className="text-muted-foreground mb-6">
                        Schedule a visit to our office or any of our project sites. Our team is ready to help you find your perfect home.
                      </p>
                      <Button className="w-full bg-orange hover:bg-orange/90" data-testid="button-schedule-visit">
                        Schedule a Visit
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Find Us</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Located in the heart of Nashik at College Road, easily accessible from all parts of the city
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <CardContent className="p-0">
                  <div className="rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0377474407187!2d73.76356081125897!3d20.006930381321318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb997aa969f9%3A0x8e08926d300e9dcf!2sNirman%20Group%2C%20Nashik!5e0!3m2!1sen!2sin!4v1758135734763!5m2!1sen!2sin" 
                      width="100%" 
                      height="450" 
                      style={{border: 0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Nirman Group Location Map"
                    />
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
