import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send,
  Building2,
  User,
  Calendar,
  Home,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    budget: "",
    visitDate: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds (demo purpose)
    setTimeout(() => {
      setIsSubmitted(false);
      setContactForm({
        name: "",
        phone: "",
        email: "",
        project: "",
        budget: "",
        visitDate: "",
        message: ""
      });
    }, 3000);
    //todo: remove mock functionality - implement actual form submission
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 8888883257",
      secondary: "+91 8888883294",
      description: "Sales & Support",
      action: "Call Now",
      bgColor: "bg-green-500/10",
      iconColor: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "sales@nirman.co.in",
      secondary: "info@nirman.co.in",
      description: "Quick Response",
      action: "Send Email",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      primary: "+91 8888883257",
      secondary: "Instant Response",
      description: "Available 24/7",
      action: "Chat Now",
      bgColor: "bg-orange/10",
      iconColor: "text-orange"
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "Nirman House, L.P. Poddar Marg",
        "College Road, Nashik - 422005",
        "Opposite Big Bazaar"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed"
      ]
    },
    {
      icon: Building2,
      title: "Site Offices",
      details: [
        "Mangalum: Behind Guruji Hospital",
        "Dwarkapuram: Near Tata Motors",
        "Visit for Live Demonstrations"
      ]
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
              <Badge className="mb-6 text-orange bg-orange/10 border-orange/20" data-testid="badge-contact">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Us
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6" data-testid="heading-contact">
                Let's Find Your
                <span className="block text-orange font-serif italic">Dream Home</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to take the next step? Our expert team is here to guide you through 
                your property journey with personalized service and professional advice.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Methods */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get in Touch Instantly</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Choose your preferred way to connect with our team
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <AnimatedSection key={method.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="text-center hover-elevate h-full">
                      <CardContent className="p-8">
                        <div className={`w-20 h-20 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                          <method.icon className={`w-10 h-10 ${method.iconColor}`} />
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-3">{method.title}</h3>
                        <div className="space-y-1 mb-4">
                          <p className="font-medium text-primary">{method.primary}</p>
                          <p className="text-sm text-muted-foreground">{method.secondary}</p>
                          <p className="text-xs text-muted-foreground">{method.description}</p>
                        </div>
                        <Button 
                          className="w-full bg-orange hover:bg-orange/90"
                          data-testid={`button-${method.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {method.action}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Office Info */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Send className="w-6 h-6 text-orange" />
                      Schedule a Visit
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </CardHeader>
                  <CardContent>
                    <AnimatePresence mode="wait">
                      {!isSubmitted ? (
                        <motion.form
                          key="form"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0, y: -20 }}
                          onSubmit={handleSubmit}
                          className="space-y-6"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                name="name"
                                value={contactForm.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                required
                                data-testid="input-contact-name"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={contactForm.phone}
                                onChange={handleInputChange}
                                placeholder="+91 9876543210"
                                required
                                data-testid="input-contact-phone"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={contactForm.email}
                              onChange={handleInputChange}
                              placeholder="your.email@example.com"
                              data-testid="input-contact-email"
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Interested Project</Label>
                              <Select value={contactForm.project} onValueChange={(value) => handleSelectChange("project", value)}>
                                <SelectTrigger data-testid="select-contact-project">
                                  <SelectValue placeholder="Select project" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="mangalum">Nirman's Mangalum</SelectItem>
                                  <SelectItem value="dwarkapuram">Nirman's Dwarkapuram</SelectItem>
                                  <SelectItem value="vrindavan">Nirman's Vrindavan Gardens</SelectItem>
                                  <SelectItem value="upcoming">Upcoming Projects</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label>Budget Range</Label>
                              <Select value={contactForm.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                                <SelectTrigger data-testid="select-contact-budget">
                                  <SelectValue placeholder="Select budget" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="15-25">₹15 - ₹25 Lakhs</SelectItem>
                                  <SelectItem value="25-35">₹25 - ₹35 Lakhs</SelectItem>
                                  <SelectItem value="35-50">₹35 - ₹50 Lakhs</SelectItem>
                                  <SelectItem value="50+">₹50+ Lakhs</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="visitDate">Preferred Visit Date</Label>
                            <Input
                              id="visitDate"
                              name="visitDate"
                              type="date"
                              value={contactForm.visitDate}
                              onChange={handleInputChange}
                              data-testid="input-visit-date"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Additional Requirements</Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={contactForm.message}
                              onChange={handleInputChange}
                              placeholder="Tell us about your specific requirements..."
                              rows={4}
                              data-testid="textarea-contact-message"
                            />
                          </div>

                          <Button 
                            type="submit" 
                            className="w-full bg-orange hover:bg-orange/90" 
                            size="lg"
                            data-testid="button-submit-contact"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Schedule Visit
                          </Button>

                          <p className="text-xs text-muted-foreground text-center">
                            By submitting this form, you agree to our privacy policy and terms of service
                          </p>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center py-12"
                        >
                          <div className="w-20 h-20 bg-chart-3/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-chart-3" />
                          </div>
                          <h3 className="text-2xl font-semibold text-primary mb-3">Thank You!</h3>
                          <p className="text-muted-foreground mb-6">
                            Your request has been submitted successfully. Our team will contact you within 24 hours.
                          </p>
                          <Button 
                            onClick={() => setIsSubmitted(false)}
                            variant="outline"
                            data-testid="button-submit-another"
                          >
                            Submit Another Request
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Office Information */}
              <div className="space-y-8">
                <AnimatedSection delay={0.2}>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-4">Visit Our Office</h2>
                    <p className="text-muted-foreground">
                      Come meet our team in person for personalized consultation and project tours
                    </p>
                  </div>
                </AnimatedSection>

                {officeInfo.map((info, index) => (
                  <AnimatedSection key={info.title} delay={0.1 * (index + 3)}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="hover-elevate">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <info.icon className="w-6 h-6 text-orange" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                              <div className="space-y-1">
                                {info.details.map((detail, idx) => (
                                  <p key={idx} className="text-sm text-muted-foreground">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatedSection>
                ))}

                <AnimatedSection delay={0.6}>
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
                      <p className="text-primary-foreground/80 mb-4">
                        For urgent property-related queries or emergencies
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span className="font-medium">+91 8888883257</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">Available 24/7 for emergencies</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
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
                  <div className="bg-muted/50 h-96 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-orange mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-primary mb-2">Interactive Map</h3>
                      <p className="text-muted-foreground mb-4">
                        Google Maps integration would be embedded here
                      </p>
                      <Button className="bg-orange hover:bg-orange/90" data-testid="button-get-directions">
                        Get Directions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
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