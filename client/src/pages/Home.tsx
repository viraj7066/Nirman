import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EMICalculator from "@/components/EMICalculator";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <AboutSection />
        <TestimonialsSection />
        <EMICalculator />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}