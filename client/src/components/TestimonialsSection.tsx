import TestimonialCard from "./TestimonialCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users } from "lucide-react";
import customerAvatar from "@assets/generated_images/Customer_testimonial_profile_e8ba6bbc.png";

export default function TestimonialsSection() {
  //todo: remove mock functionality - replace with real testimonial data
  const testimonials = [
    {
      name: "Rajesh Sharma",
      project: "Mangalum Resident",
      avatar: customerAvatar,
      rating: 5,
      testimonial: "The Sky Club amenity is exactly as promised. Quality construction with timely updates. Nirman Group has exceeded our expectations in every aspect. The finishing is top-notch and possession was on time.",
      designation: "Software Engineer",
      date: "March 2024"
    },
    {
      name: "Priya Patel",
      project: "Dwarkapuram Owner",
      avatar: customerAvatar,
      rating: 5,
      testimonial: "Bought in 2020, excellent location near Tata Motors. Great connectivity and the project was delivered exactly as promised. The team was very professional throughout the process.",
      designation: "Business Owner",
      date: "May 2020"
    },
    {
      name: "Amit Desai",
      project: "Vrindavan Gardens",
      avatar: customerAvatar,
      rating: 5,
      testimonial: "45 years of experience shows in every detail. Ready possession as committed and the quality of construction is exceptional. Highly recommend Nirman Group for anyone looking for a quality home.",
      designation: "Bank Manager",
      date: "January 2021"
    },
    {
      name: "Sneha Kulkarni",
      project: "Nirman Sugandh",
      avatar: customerAvatar,
      rating: 4,
      testimonial: "Great value for money project in Gangapur Road. The amenities are well-maintained and the location has excellent connectivity. Happy with our decision to choose Nirman Group.",
      designation: "Teacher",
      date: "August 2020"
    },
    {
      name: "Rohit Joshi",
      project: "Mangalum Resident",
      avatar: customerAvatar,
      rating: 5,
      testimonial: "Outstanding customer service and transparent dealing. The construction quality is remarkable and all amenities were delivered as promised. Living here has been a wonderful experience.",
      designation: "IT Professional",
      date: "November 2023"
    },
    {
      name: "Kavita Marathe",
      project: "Dwarkapuram Owner",
      avatar: customerAvatar,
      rating: 5,
      testimonial: "From booking to possession, the entire journey was smooth. The team kept us updated at every stage and the final delivery exceeded our expectations. Proud to be part of Nirman family.",
      designation: "Doctor",
      date: "April 2020"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 text-orange bg-orange/10 border-orange/20" data-testid="badge-testimonials">
            <Users className="w-4 h-4 mr-2" />
            Customer Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="heading-testimonials">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from our 1000+ happy families who have made Nirman projects their home
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-orange/5 rounded-2xl p-8 mb-12 border border-orange/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-satisfied-customers">
              <div className="text-3xl font-bold text-orange mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Satisfied Customers</div>
            </div>
            <div data-testid="stat-average-rating">
              <div className="text-3xl font-bold text-orange mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div data-testid="stat-repeat-customers">
              <div className="text-3xl font-bold text-orange mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Repeat Customers</div>
            </div>
            <div data-testid="stat-referrals">
              <div className="text-3xl font-bold text-orange mb-2">92%</div>
              <div className="text-sm text-muted-foreground">Would Refer</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Join our family of satisfied customers
          </p>
          <Button size="lg" className="bg-orange hover:bg-orange/90" data-testid="button-join-family">
            Explore Our Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}