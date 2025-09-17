import TestimonialCard from '../TestimonialCard'
import customerAvatar from "@assets/generated_images/Customer_testimonial_profile_e8ba6bbc.png";

export default function TestimonialCardExample() {
  return (
    <div className="max-w-md">
      <TestimonialCard
        name="Rajesh Sharma"
        project="Mangalum Resident"
        avatar={customerAvatar}
        rating={5}
        testimonial="The Sky Club amenity is exactly as promised. Quality construction with timely updates. Nirman Group has exceeded our expectations in every aspect."
        designation="Software Engineer"
        date="March 2024"
      />
    </div>
  )
}