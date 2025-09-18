import { useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users } from "lucide-react";
import customerAvatar from "@assets/generated_images/Customer_testimonial_profile_e8ba6bbc.png";

export default function TestimonialsSection() {
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);

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
    },
    {
      name: "Vikram Singh",
      project: "Mangalum Resident",
      avatar: customerAvatar,
      rating: 5,
      testimonial: "Exceptional quality and timely delivery. The project management team was always available to address our concerns. The amenities are world-class and the location is perfect for families.",
      designation: "Engineer",
      date: "September 2023"
    },
    {
      name: "Anita Reddy",
      project: "Dwarkapuram Owner",
      avatar: customerAvatar,
      rating: 5,
      testimonial: "Best investment decision we made. The property value has appreciated significantly and the community is wonderful. Nirman Group's commitment to quality is evident in every aspect.",
      designation: "Accountant",
      date: "June 2020"
    },
    {
      name: "Suresh Kumar",
      project: "Vrindavan Gardens",
      avatar: customerAvatar,
      rating: 5,
      testimonial: "Living here for 2 years now and couldn't be happier. The maintenance is excellent and all facilities are well-maintained. Great place to raise a family.",
      designation: "Manager",
      date: "February 2022"
    },
    {
      name: "Meera Iyer",
      project: "Mangalum Resident",
      avatar: customerAvatar,
      rating: 5,
      testimonial: "The construction quality is outstanding. Every detail has been carefully planned and executed. The team's professionalism and transparency throughout the process was commendable.",
      designation: "Architect",
      date: "December 2023"
    },
    {
      name: "Arjun Gupta",
      project: "Dwarkapuram Owner",
      avatar: customerAvatar,
      rating: 5,
      testimonial: "Excellent location with great connectivity. The project was delivered on time with all promised amenities. The after-sales service has been exceptional. Highly recommended!",
      designation: "Marketing Executive",
      date: "July 2020"
    },
    {
      name: "Deepika Shah",
      project: "Vrindavan Gardens",
      avatar: customerAvatar,
      rating: 5,
      testimonial: "Beautiful project with lush green surroundings. The apartments are spacious and well-designed. The security and maintenance services are top-notch. Perfect for families.",
      designation: "HR Manager",
      date: "October 2021"
    },
    {
      name: "Ravi Nair",
      project: "Nirman Sugandh",
      avatar: customerAvatar,
      rating: 4,
      testimonial: "Good value for money with decent amenities. The location is convenient and the construction quality is solid. The team was helpful throughout the buying process.",
      designation: "Sales Manager",
      date: "September 2020"
    },
    {
      name: "Sunita Agarwal",
      project: "Mangalum Resident",
      avatar: customerAvatar,
      rating: 5,
      testimonial: "Living here has been a dream come true. The community is friendly and the facilities are excellent. The property management team is very responsive to our needs.",
      designation: "Teacher",
      date: "January 2024"
    },
    {
      name: "Kiran Rao",
      project: "Dwarkapuram Owner",
      avatar: customerAvatar,
      rating: 5,
      testimonial: "Outstanding project with premium amenities. The construction quality exceeds expectations and the location is perfect for professionals working in the industrial area.",
      designation: "Production Manager",
      date: "March 2020"
    }
  ];

  // Create enough duplicates for seamless infinite scrolling
  const createInfiniteArray = (arr: typeof testimonials, multiplier: number = 4) => {
    const result = [];
    for (let i = 0; i < multiplier; i++) {
      result.push(...arr);
    }
    return result;
  };

  const infiniteTestimonials = createInfiniteArray(testimonials, 4);

  // Split testimonials into 3 columns with random offsets
  const column1 = infiniteTestimonials.filter((_, index) => index % 3 === 0);
  const column2 = infiniteTestimonials.filter((_, index) => index % 3 === 1);
  const column3 = infiniteTestimonials.filter((_, index) => index % 3 === 2);

  useEffect(() => {
    const startScrolling = () => {
      if (column1Ref.current) {
        column1Ref.current.style.animation = "scrollUpSlow 60s linear infinite";
      }
      if (column2Ref.current) {
        column2Ref.current.style.animation = "scrollUpSlow 60s linear infinite";
      }
      if (column3Ref.current) {
        column3Ref.current.style.animation = "scrollUpSlow 60s linear infinite";
      }
    };

    startScrolling();
  }, []);

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

        {/* Auto-scrolling Testimonials */}
        <div className="relative mb-12">
          {/* Blur overlays */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling columns with random alignment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[700px] overflow-hidden">
            {/* Column 1 */}
            <div className="space-y-6">
              <div
                ref={column1Ref}
                className="space-y-6"
                style={{
                  animation: "scrollUpSlow 60s linear infinite",
                  transform: "translateY(-20px)"
                }}
              >
                {column1.map((testimonial, index) => (
                  <TestimonialCard
                    key={`col1-${index}`}
                    {...testimonial}
                  />
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div
                ref={column2Ref}
                className="space-y-6"
                style={{
                  animation: "scrollUpSlow 60s linear infinite",
                  transform: "translateY(30px)"
                }}
              >
                {column2.map((testimonial, index) => (
                  <TestimonialCard
                    key={`col2-${index}`}
                    {...testimonial}
                  />
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <div
                ref={column3Ref}
                className="space-y-6"
                style={{
                  animation: "scrollUpSlow 60s linear infinite",
                  transform: "translateY(-10px)"
                }}
              >
                {column3.map((testimonial, index) => (
            <TestimonialCard
                    key={`col3-${index}`}
              {...testimonial}
            />
          ))}
              </div>
            </div>
          </div>
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
          <Button size="lg" className="bg-orange hover:bg-orange/90" data-testid="button-join-family" asChild>
            <a href="/projects">
            Explore Our Projects
            <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scrollUpSlow {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
}