import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Filter } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import dwarakaImage from "@assets/generated_images/dwaraka.png";
import magalamImage from "@assets/generated_images/magalam.png";
import vrindaImage from "@assets/generated_images/vrinda.jpg";

const categories = [
  { id: "all", label: "All" },
  { id: "achievements", label: "Achievements" },
  { id: "past-projects", label: "Past Projects" },
  { id: "interiors", label: "Interiors" },
  { id: "construction", label: "Construction" },
  { id: "community", label: "Community" },
];

type GalleryImage = {
  src: string;
  title: string;
  subtitle: string;
  category: string;
};

const images: GalleryImage[] = [
  {
    src: magalamImage,
    title: "Mangalum Exterior",
    subtitle: "Modern facade with landscaped surroundings and premium finishes",
    category: "past-projects",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    title: "Luxury Apartment Interior",
    subtitle: "Spacious living area with contemporary design and natural lighting",
    category: "interiors",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    title: "Construction Excellence",
    subtitle: "Quality construction work showcasing our attention to detail",
    category: "construction",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    title: "Happy Families",
    subtitle: "Our satisfied customers enjoying their dream homes",
    category: "community",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    title: "RERA Excellence Award",
    subtitle: "Recognition for outstanding compliance and customer satisfaction",
    category: "achievements",
  },
  {
    src: dwarakaImage,
    title: "Dwarkapuram Project",
    subtitle: "Completed residential complex with modern amenities",
    category: "past-projects",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    title: "Master Bedroom Design",
    subtitle: "Elegant bedroom interiors with premium fixtures",
    category: "interiors",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    title: "Site Progress",
    subtitle: "Ongoing construction showing our systematic approach",
    category: "construction",
  },
  {
    src: "https://images.unsplash.com/photo-1520975922323-0f259bfec5e1?w=800&h=600&fit=crop",
    title: "Community Events",
    subtitle: "Residents enjoying community facilities and events",
    category: "community",
  },
  {
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
    title: "Best Developer Award",
    subtitle: "Industry recognition for innovation and quality",
    category: "achievements",
  },
  {
    src: vrindaImage,
    title: "Vrindavan Gardens",
    subtitle: "Completed project with beautiful landscaping and amenities",
    category: "past-projects",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-5f986d240cbf?w=800&h=600&fit=crop",
    title: "Modern Kitchen",
    subtitle: "Contemporary kitchen design with premium appliances",
    category: "interiors",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openAt = (index: number) => {
    const filteredIndex = images.findIndex(img => img === filteredImages[index]);
    setLightboxIndex(filteredIndex);
  };

  const close = () => setLightboxIndex(null);
  const next = () => setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
  const prev = () => setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-orange/5">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center">
                <Badge className="mb-6 text-orange bg-orange/10 border-orange/20">Our Work</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                  Project Gallery
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Explore highlights from our projects and interiors, crafted with quality and care.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Browse by Category</h2>
                <p className="text-muted-foreground">Filter our gallery to find exactly what you're looking for</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className={`${
                      activeCategory === category.id 
                        ? "bg-orange hover:bg-orange/90 text-white" 
                        : "hover:bg-orange/10 hover:text-orange"
                    }`}
                    data-testid={`filter-${category.id}`}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {category.label}
                  </Button>
                ))}
              </div>
              
              <div className="text-center mt-4 text-sm text-muted-foreground">
                Showing {filteredImages.length} of {images.length} images
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Grid Gallery */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((img, index) => (
                  <Card key={img.src} className="hover-elevate overflow-hidden cursor-pointer" onClick={() => openAt(index)}>
                    <CardContent className="p-0">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={img.src}
                          alt={img.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </AspectRatio>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {categories.find(cat => cat.id === img.category)?.label}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-primary">{img.title}</h3>
                        <p className="text-sm text-muted-foreground">{img.subtitle}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.2}>
              <div className="mt-12 text-center text-sm text-muted-foreground">
                Looking for something specific? Visit our projects page or contact us for a guided tour.
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => (!open ? close() : null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {lightboxIndex !== null && (
            <div className="relative bg-black">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].title}
                  className="h-full w-full object-contain bg-black"
                />
              </AspectRatio>
              <button
                className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
                onClick={close}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
                <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white" size="icon" onClick={prev} aria-label="Previous image">
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white" size="icon" onClick={next} aria-label="Next image">
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {categories.find(cat => cat.id === images[lightboxIndex].category)?.label}
                  </Badge>
                  <span className="text-xs opacity-80">
                    {lightboxIndex + 1} of {images.length}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{images[lightboxIndex].title}</h3>
                <p className="text-sm opacity-80">{images[lightboxIndex].subtitle}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}