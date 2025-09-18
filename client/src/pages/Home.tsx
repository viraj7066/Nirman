import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DirectorMessage from "@/components/DirectorMessage";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EMICalculator from "@/components/EMICalculator";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollIndicator />
      <Header />
      <main>
        <Hero />
        <DirectorMessage />
        <FeaturedProjects />
        <AboutSection />
        <TestimonialsSection />
        <EMICalculator />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}