import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin } from "lucide-react";
import mangalumImage from "@assets/generated_images/Mangalum_project_building_exterior_1cf65600.png";
import interiorImage from "@assets/generated_images/Modern_apartment_interior_view_db2e5e51.png";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  //todo: remove mock functionality - replace with real project data from API
  const allProjects = [
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
      keyFeatures: ["Sky Club on Terrace", "Kids' Play Zone", "Landscaped Garden", "Granite Kitchen Platform", "Vitrified Tiles", "Concealed Plumbing"],
      locationFilter: "gangapur-road",
      typeFilter: ["1bhk", "2bhk"]
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
      keyFeatures: ["Near Tata Motors", "Excellent Connectivity", "Quality Construction", "Timely Delivery"],
      locationFilter: "dwarka",
      typeFilter: ["1bhk", "2bhk"]
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
      keyFeatures: ["Ready Possession", "Garden View", "Premium Location", "Modern Amenities"],
      locationFilter: "satpur",
      typeFilter: ["1bhk", "2bhk"]
    },
    {
      title: "Nirman Sugandh",
      location: "Gangapur Road, Nashik",
      status: "Completed" as const,
      image: interiorImage,
      configuration: "2 BHK Apartments",
      priceRange: "₹16.72 - ₹19.26 Lakhs",
      carpetArea: "631-727 sq ft",
      totalUnits: 64,
      possession: "Immediate",
      reraId: "P51600012345",
      keyFeatures: ["24Hrs Water Supply", "Covered Car Parking", "Lift", "CCTV"],
      locationFilter: "gangapur-road",
      typeFilter: ["2bhk"]
    },
    {
      title: "Nirman Classic",
      location: "Shreerang Nagar, Nashik",
      status: "Completed" as const,
      image: mangalumImage,
      configuration: "3 BHK Apartments",
      carpetArea: "1560 sq ft",
      totalUnits: 24,
      possession: "Immediate",
      reraId: "P51600011234",
      keyFeatures: ["Spacious 3 BHK", "Premium Finishes", "Established Location", "Good Connectivity"],
      locationFilter: "panchavati",
      typeFilter: ["3bhk"]
    },
    {
      title: "Nirman Ashiyana",
      location: "Dwarka, Nashik",
      status: "Completed" as const,
      image: interiorImage,
      configuration: "1 BHK & 2 BHK Apartments",
      carpetArea: "425-750 sq ft",
      totalUnits: 48,
      possession: "Immediate",
      reraId: "P51600010123",
      keyFeatures: ["Affordable Housing", "Good Ventilation", "Water Storage", "Power Backup"],
      locationFilter: "dwarka",
      typeFilter: ["1bhk", "2bhk"]
    }
  ];

  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = selectedStatus === "all" || 
                           (selectedStatus === "ongoing" && project.status === "Ongoing") ||
                           (selectedStatus === "completed" && project.status === "Completed") ||
                           (selectedStatus === "ready-to-move" && project.status === "Ready to Move") ||
                           (selectedStatus === "sold-out" && project.status === "Sold Out");
      
      const matchesLocation = selectedLocation === "all" || project.locationFilter === selectedLocation;
      
      const matchesType = selectedType === "all" || project.typeFilter.includes(selectedType);

      return matchesSearch && matchesStatus && matchesLocation && matchesType;
    });
  }, [searchTerm, selectedStatus, selectedLocation, selectedType, allProjects]);

  const handleViewDetails = (title: string) => {
    console.log(`View details for ${title}`);
  };

  const handleScheduleVisit = (title: string) => {
    console.log(`Schedule visit for ${title}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-orange/5">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <Badge className="mb-4 text-orange bg-orange/10 border-orange/20" data-testid="badge-projects">
                <Building2 className="w-4 h-4 mr-2" />
                Our Projects
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="heading-projects">
                Discover Your <span className="text-orange font-serif italic">Dream Home</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore our portfolio of premium residential projects across Nashik, 
                each crafted with attention to detail and modern amenities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-orange mb-2">22+</div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </div>
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-orange mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Families</div>
              </div>
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-orange mb-2">45+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection delay={0.2}>
              <ProjectFilter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedStatus={selectedStatus}
                onStatusChange={setSelectedStatus}
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                resultCount={filteredProjects.length}
              />
            </AnimatedSection>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${searchTerm}-${selectedStatus}-${selectedLocation}-${selectedType}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98]
                    }}
                  >
                    <ProjectCard
                      {...project}
                      onViewDetails={() => handleViewDetails(project.title)}
                      onScheduleVisit={() => handleScheduleVisit(project.title)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <AnimatedSection delay={0.3}>
                <div className="text-center py-16">
                  <div className="w-24 h-24 mx-auto mb-6 bg-muted/50 rounded-full flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">No Projects Found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search terms
                  </p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}