import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Home, 
  FileCheck, 
  Palette, 
  Shield, 
  Calculator,
  MapPin,
  Hammer,
  Users,
  Clock,
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Services() {
  //todo: remove mock functionality - replace with real service data
  const mainServices = [
    {
      icon: Building2,
      title: "Residential Development",
      description: "Premium 1, 2, and 3 BHK apartments with modern amenities and quality construction",
      features: [
        "RERA Compliant Projects",
        "Modern Architecture Design", 
        "Quality Construction Materials",
        "Timely Project Delivery",
        "Post-Possession Support"
      ],
      cta: "View Our Projects"
    },
    {
      icon: MapPin,
      title: "Plot Development",
      description: "Well-planned residential plots in prime locations across Nashik with all infrastructure",
      features: [
        "Clear Land Titles",
        "Approved Layout Plans",
        "Infrastructure Ready",
        "Easy EMI Options",
        "Legal Documentation Support"
      ],
      cta: "Explore Plots"
    },
    {
      icon: Calculator,
      title: "Home Loan Assistance",
      description: "Comprehensive home loan support with tie-ups with leading banks for best rates",
      features: [
        "Competitive Interest Rates",
        "Quick Loan Approval",
        "Minimal Documentation",
        "Expert Guidance",
        "End-to-End Support"
      ],
      cta: "Check Eligibility"
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Professional interior design services to transform your space into a dream home",
      features: [
        "Customized Designs",
        "Quality Materials",
        "Expert Craftsmen",
        "Timely Completion", 
        "Budget-Friendly Options"
      ],
      cta: "View Designs"
    },
    {
      icon: Shield,
      title: "Legal Services",
      description: "Complete legal support for property documentation and registration processes",
      features: [
        "Property Verification",
        "Legal Documentation",
        "Registration Support",
        "Title Insurance",
        "Expert Legal Advice"
      ],
      cta: "Get Legal Help"
    },
    {
      icon: Hammer,
      title: "Property Management",
      description: "Comprehensive property management services for maintenance and upkeep",
      features: [
        "Regular Maintenance",
        "Security Services",
        "Facility Management",
        "Tenant Management",
        "24/7 Support"
      ],
      cta: "Learn More"
    }
  ];

  const additionalServices = [
    {
      icon: FileCheck,
      title: "RERA Registration Support",
      description: "Complete assistance with RERA compliance and registration processes"
    },
    {
      icon: Users,
      title: "Customer Relationship Management",
      description: "Dedicated relationship managers for personalized customer service"
    },
    {
      icon: Clock,
      title: "After-Sales Service",
      description: "Comprehensive after-sales support and maintenance services"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality checks and standards throughout construction"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Understanding your requirements and budget preferences"
    },
    {
      step: "02", 
      title: "Site Visit",
      description: "Guided tour of suitable projects and available options"
    },
    {
      step: "03",
      title: "Documentation",
      description: "Complete paperwork and legal formalities assistance"
    },
    {
      step: "04",
      title: "Possession",
      description: "Smooth handover with all amenities and facilities ready"
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
              <Badge className="mb-6 text-orange bg-orange/10 border-orange/20" data-testid="badge-services">
                <Home className="w-4 h-4 mr-2" />
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6" data-testid="heading-services">
                Complete Real Estate
                <span className="block text-orange font-serif italic">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                From finding your dream home to moving in, we provide comprehensive services 
                to make your property journey smooth and hassle-free.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="text-3xl font-bold text-orange mb-2">45+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="text-3xl font-bold text-orange mb-2">6+</div>
                  <div className="text-sm text-muted-foreground">Core Services</div>
                </div>
                <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="text-3xl font-bold text-orange mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive real estate solutions designed to meet all your property needs
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full hover-elevate">
                      <CardHeader>
                        <div className="w-16 h-16 bg-orange/10 rounded-xl flex items-center justify-center mb-4">
                          <service.icon className="w-8 h-8 text-orange" />
                        </div>
                        <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col h-full">
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="space-y-3 mb-6 flex-grow">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-chart-3 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Button 
                          className="w-full bg-orange hover:bg-orange/90"
                          data-testid={`button-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {service.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Process</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Simple, transparent, and customer-focused approach to finding your perfect home
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-orange/10 rounded-full flex items-center justify-center mx-auto border-4 border-orange/20">
                        <span className="text-2xl font-bold text-orange">{step.step}</span>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-orange/20 transform translate-x-10"></div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Additional Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Extended support services to ensure your complete satisfaction
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="hover-elevate">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <service.icon className="w-6 h-6 text-orange" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                            <p className="text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Nirman Group?</h2>
                <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                  45 years of excellence and thousands of satisfied customers speak for our commitment
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "45+", label: "Years of Excellence", desc: "Decades of experience in real estate" },
                { number: "1000+", label: "Happy Families", desc: "Satisfied customers living our projects" },
                { number: "100%", label: "RERA Compliant", desc: "All projects follow RERA guidelines" },
                { number: "24/7", label: "Customer Support", desc: "Round-the-clock assistance available" }
              ].map((stat, index) => (
                <AnimatedSection key={stat.label} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-orange mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-primary-foreground/70">{stat.desc}</div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <AnimatedSection>
              <Card className="bg-gradient-to-br from-orange/5 to-primary/5 border-orange/20">
                <CardContent className="p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Ready to Find Your Dream Home?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Let our experienced team guide you through your property journey with personalized service and expert advice.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-orange hover:bg-orange/90" data-testid="button-start-journey">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" data-testid="button-schedule-consultation">
                      Schedule Consultation
                    </Button>
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