import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send,
  Building2
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // todo: remove mock functionality - implement actual form submission
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["Nirman House, L.P. Poddar Marg", "College Road, Nashik - 422005", "Opposite Big Bazaar"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 8888883257 (Sales)", "+91 8888883294 (Support)"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@nirman.co.in", "info@nirman.co.in"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: Closed", "Sunday: Closed"],
      action: "Schedule Visit"
    }
  ];

  return (
    <section className="py-16 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 text-orange bg-orange/10 border-orange/20" data-testid="badge-contact">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="heading-contact">
            Get in Touch with Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to find your dream home? Our expert team is here to help you every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4" data-testid="heading-contact-info">
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                Visit our office or get in touch through any of the following channels
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-elevate" data-testid={`contact-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange/10 p-3 rounded-lg flex-shrink-0">
                        <info.icon className="w-6 h-6 text-orange" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-primary mb-2" data-testid={`contact-title-${index}`}>
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm text-muted-foreground" data-testid={`contact-detail-${index}-${detailIndex}`}>
                              {detail}
                            </p>
                          ))}
                        </div>
                        <Button 
                          variant="ghost" 
                          className="h-auto p-0 mt-2 text-orange hover:text-orange/80"
                          data-testid={`contact-action-${index}`}
                        >
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Site Office Information */}
            <Card className="bg-primary/5 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Building2 className="w-5 h-5" />
                  Site Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div data-testid="site-office-mangalum">
                  <p className="font-medium text-sm">Mangalum Site Office</p>
                  <p className="text-xs text-muted-foreground">Behind Guruji Hospital, Anandvalli</p>
                </div>
                <div data-testid="site-office-info">
                  <p className="text-xs text-muted-foreground">
                    Visit our project sites for live demonstrations and detailed discussions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-orange" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        required
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project">Interested Project</Label>
                    <Input
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      placeholder="Mangalum, Dwarkapuram, etc."
                      data-testid="input-project"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-orange hover:bg-orange/90" 
                    size="lg"
                    data-testid="button-send-message"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}