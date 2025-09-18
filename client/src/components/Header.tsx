import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";
import logoImage from "@assets/generated_images/logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 8888883257</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>sales@nirman.co.in</span>
            </div>
          </div>
          <div className="text-sm">
            Mon-Fri: 9:00 AM - 6:00 PM
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 hover-elevate rounded-lg p-2" data-testid="link-home">
              <img
                src={logoImage}
                alt="Nirman Group logo"
                className="w-14 h-14 rounded object-contain bg-white"
              />
              <div>
                <h1 className="font-serif text-xl font-semibold text-primary">Nirman Group</h1>
                <p className="text-xs text-muted-foreground">Building Dreams Since 1980</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="font-medium"
                  data-testid={`link-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" data-testid="button-brochure" asChild>
              <a href="http://nirman.co.in/Nirman-Mangalum-Gangapur-Road-Nashik/mangalum-june-broucher.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download brochure PDF">
                Download Brochure
              </a>
            </Button>
            <Button className="bg-orange hover:bg-orange/90" data-testid="button-schedule-visit">
              Schedule Visit
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-link-${item.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" data-testid="mobile-button-brochure" asChild>
                  <a href="http://nirman.co.in/Nirman-Mangalum-Gangapur-Road-Nashik/mangalum-june-broucher.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download brochure PDF">
                    Download Brochure
                  </a>
                </Button>
                <Button className="bg-orange hover:bg-orange/90" data-testid="mobile-button-schedule-visit">
                  Schedule Visit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
