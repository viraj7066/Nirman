import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";
import mangalumImage from "@assets/generated_images/Mangalum_project_building_exterior_1cf65600.png";
import interiorImage from "@assets/generated_images/Modern_apartment_interior_view_db2e5e51.png";

export default function FeaturedProjects() {
  //todo: remove mock functionality - replace with real project data
  const featuredProjects = [
    {
      title: "Nirman's Mangalum",
      location: "Tukaram Kale Road, Gangapur Road, Behind Guruji Hospital, Anandvalli, Nashik",
      status: "Ongoing" as const,
      image: mangalumImage,
      configuration: "1 BHK & 2 BHK Apartments",
      priceRange: "₹20.16 - ₹31.41 Lakhs",
      carpetArea: "394-1017 sq ft",
      totalUnits: 96,
      possession: "November 2021 onwards",
      reraId: "P51600018587",
      keyFeatures: ["Sky Club on Terrace", "Kids' Play Zone", "Landscaped Garden", "Granite Kitchen Platform", "Vitrified Tiles", "Concealed Plumbing"]
    },
    {
      title: "Nirman's Dwarkapuram",
      location: "Dwarka, Near Tata Motors, Dwarka Circle, Nashik",
      status: "Sold Out" as const,
      image: interiorImage,
      configuration: "1 BHK & 2 BHK Apartments",
      carpetArea: "341-892 sq ft",
      totalUnits: 132,
      possession: "May 2020 onwards",
      reraId: "P51600001184",
      keyFeatures: ["Near Tata Motors", "Excellent Connectivity", "Quality Construction", "Timely Delivery"]
    },
    {
      title: "Nirman's Vrindavan Gardens",
      location: "Satpur Colony, Shramik Nagar, Nashik",
      status: "Ready to Move" as const,
      image: mangalumImage,
      configuration: "1 BHK, 1.5 BHK & 2 BHK",
      carpetArea: "354-568 sq ft",
      totalUnits: 84,
      possession: "January 2021 onwards",
      reraId: "P51600014656",
      keyFeatures: ["Ready Possession", "Garden View", "Premium Location", "Modern Amenities"]
    }
  ];

  const handleViewDetails = (title: string) => {
    console.log(`View details for ${title}`);
    // Navigation logic will be implemented later
  };

  const handleScheduleVisit = (title: string) => {
    console.log(`Schedule visit for ${title}`);
    // Contact form/scheduling logic will be implemented later
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="heading-featured-projects">
            Our Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our premium residential developments across Nashik, 
            each designed with modern amenities and quality construction
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              onViewDetails={() => handleViewDetails(project.title)}
              onScheduleVisit={() => handleScheduleVisit(project.title)}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-orange hover:bg-orange/90"
            data-testid="button-view-all-projects"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}