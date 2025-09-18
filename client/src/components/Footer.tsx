import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Building2,
  Award,
  Shield,
  Send
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail("");
    // todo: remove mock functionality - implement actual newsletter signup
  };

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/story" },
    { label: "Leadership", href: "/leadership" },
    { label: "Awards & Recognition", href: "/awards" },
    { label: "Careers", href: "/careers" },
    { label: "News & Updates", href: "/news" }
  ];

  const projectLinks = [
    { label: "Ongoing Projects", href: "/projects/ongoing" },
    { label: "Completed Projects", href: "/projects/completed" },
    { label: "Upcoming Projects", href: "/projects/upcoming" },
    { label: "Project Gallery", href: "/gallery" },
    { label: "Virtual Tours", href: "/virtual-tours" },
    { label: "Floor Plans", href: "/floor-plans" }
  ];

  const serviceLinks = [
    { label: "Home Loans", href: "/services/loans" },
    { label: "Property Management", href: "/services/management" },
    { label: "Interior Design", href: "/services/interior" },
    { label: "Legal Services", href: "/services/legal" },
    { label: "Registration Support", href: "/services/registration" },
    { label: "After Sales Service", href: "/services/support" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "RERA Compliance", href: "/rera" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Cookie Policy", href: "/cookies" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <Link href="/">
                <div className="flex items-center gap-3 hover-elevate rounded-lg p-2 -ml-2">
                  <img
                    src="http://nirman.co.in/Nirman-Mangalum-Gangapur-Road-Nashik/assets/img/nirman.png"
                    alt="Nirman Group logo"
                    className="w-12 h-12 rounded object-contain bg-white"
                  />
                  <div>
                    <h1 className="font-serif text-2xl font-bold text-white">Nirman Group</h1>
                    <p className="text-xs text-primary-foreground/80">Building Dreams Since 1980</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="space-y-4 text-sm">
              <p className="leading-relaxed">
                For 45+ years, Nirman Group has been Nashik's most trusted real estate developer, 
                creating quality homes for over 1000 happy families.
              </p>
              
              <div className="flex gap-2">
                <Badge className="bg-orange/10 text-orange border-orange/20">
                  <Award className="w-3 h-3 mr-1" />
                  45+ Years
                </Badge>
                <Badge className="bg-orange/10 text-orange border-orange/20">
                  <Shield className="w-3 h-3 mr-1" />
                  RERA Certified
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-orange flex-shrink-0" />
                  <span>Nirman House, L.P. Poddar Marg, College Road, Nashik - 422005</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-orange flex-shrink-0" />
                  <span>+91 8888883257 | +91 8888883294</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-orange flex-shrink-0" />
                  <span>sales@nirman.co.in</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-orange flex-shrink-0" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-orange">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <Button variant="ghost" className="h-auto p-0 text-sm text-primary-foreground/80 hover:text-orange justify-start">
                      {link.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-orange">Projects</h3>
            <ul className="space-y-2">
              {projectLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <Button variant="ghost" className="h-auto p-0 text-sm text-primary-foreground/80 hover:text-orange justify-start">
                      {link.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-orange">Services</h3>
              <ul className="space-y-2">
                {serviceLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <Button variant="ghost" className="h-auto p-0 text-sm text-primary-foreground/80 hover:text-orange justify-start">
                        {link.label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-orange">Stay Updated</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Get the latest updates on new projects and offers
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  data-testid="input-newsletter"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-orange hover:bg-orange/90 text-white"
                  data-testid="button-newsletter-submit"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Copyright and Legal */}
          <div className="space-y-2">
            <p className="text-sm text-primary-foreground/80">
              © 2025 Nirman Group. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              {legalLinks.map((link, index) => (
                <span key={link.href}>
                  <Link href={link.href}>
                    <Button variant="ghost" className="h-auto p-0 text-xs text-primary-foreground/60 hover:text-orange">
                      {link.label}
                    </Button>
                  </Link>
                  {index < legalLinks.length - 1 && <span className="mx-2 text-primary-foreground/40">|</span>}
                </span>
              ))}
            </div>
          </div>

          {/* RERA Information */}
          <div className="text-right">
            <div className="space-y-1 text-xs text-primary-foreground/80">
              <p>
                <strong>RERA Registration Numbers:</strong>
              </p>
              <p>Mangalum: P51600018587</p>
              <p>Dwarkapuram: P51600001184</p>
              <p>Vrindavan Gardens: P51600014656</p>
            </div>
            <p className="text-xs text-primary-foreground/60 mt-2">
              Website: maharera.mahaonline.gov.in
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start lg:items-end gap-3">
            <p className="text-sm font-medium text-orange">Follow Us</p>
            <div className="flex gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-orange/10" 
                data-testid="social-facebook"
                asChild
              >
                <a href="https://www.facebook.com/nirmangroupindia/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-orange/10" 
                data-testid="social-twitter"
                asChild
              >
                <a href="https://x.com/nirmangroup1" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X (Twitter)">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-orange/10" 
                data-testid="social-instagram"
                asChild
              >
                <a href="https://www.instagram.com/nirmangroup/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-orange/10" 
                data-testid="social-youtube"
                asChild
              >
                <a href="https://www.youtube.com/user/NirmanGroup" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel">
                  <Youtube className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}