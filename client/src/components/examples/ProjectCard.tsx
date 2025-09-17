import ProjectCard from '../ProjectCard'
import mangalumImage from "@assets/generated_images/Mangalum_project_building_exterior_1cf65600.png";

export default function ProjectCardExample() {
  return (
    <div className="max-w-md">
      <ProjectCard
        title="Nirman's Mangalum"
        location="Tukaram Kale Road, Gangapur Road, Behind Guruji Hospital, Anandvalli, Nashik"
        status="Ongoing"
        image={mangalumImage}
        configuration="1 BHK & 2 BHK Apartments"
        priceRange="₹20.16 - ₹31.41 Lakhs"
        carpetArea="394-1017 sq ft"
        totalUnits={96}
        possession="November 2021 onwards"
        reraId="P51600018587"
        keyFeatures={["Sky Club on Terrace", "Kids' Play Zone", "Landscaped Garden", "Granite Kitchen Platform"]}
        onViewDetails={() => console.log('View details clicked')}
        onScheduleVisit={() => console.log('Schedule visit clicked')}
      />
    </div>
  )
}