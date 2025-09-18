import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Award, Clock, ArrowRight } from "lucide-react";

export default function AboutSection() {
  //todo: remove mock functionality - replace with real timeline data
  const timelineEvents = [
    {
      year: "1980",
      title: "Foundation",
      description: "Nirman Group established with a vision to transform Nashik's skyline",
      icon: Building2
    },
    {
      year: "1990s",
      title: "Early Growth",
      description: "First residential projects launched, establishing quality standards",
      icon: Users
    },
    {
      year: "2000s",
      title: "Expansion",
      description: "Expanded to multiple locations across Nashik including Gangapur Road and Dwarka",
      icon: ArrowRight
    },
    {
      year: "2010s",
      title: "Modern Era",
      description: "Introduced contemporary designs and modern amenities in all projects",
      icon: Award
    },
    {
      year: "2020+",
      title: "RERA Compliance",
      description: "Full RERA compliance achieved, enhancing transparency and customer trust",
      icon: Clock
    },
    {
      year: "2025",
      title: "45 Years Strong",
      description: "Celebrating 45 years of excellence with 1000+ happy families and growing",
      icon: Award
    }
  ];

  const achievements = [
    { number: "45+", label: "Years of Excellence", icon: Clock },
    { number: "1000+", label: "Happy Families", icon: Users },
    { number: "22+", label: "Completed Projects", icon: Building2 },
    { number: "500+", label: "Crores Assets", icon: Award }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 text-orange bg-orange/10 border-orange/20" data-testid="badge-about">
            <Building2 className="w-4 h-4 mr-2" />
            About Nirman Group
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="heading-about">
            Building Dreams Since 1980
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Located at Nirman House on College Road, we've been at the forefront of Nashik's urban development 
            for over four decades, creating quality homes and lasting relationships.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover-elevate" data-testid={`achievement-${index}`}>
              <CardContent className="p-6">
                <div className="text-orange mb-3">
                  <achievement.icon className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1" data-testid={`achievement-number-${index}`}>
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium" data-testid={`achievement-label-${index}`}>
                  {achievement.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" data-testid="heading-journey">
            Our Journey Through the Decades
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineEvents.map((event, index) => (
              <Card key={index} className="hover-elevate" data-testid={`timeline-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange/10 p-3 rounded-lg flex-shrink-0">
                      <event.icon className="w-6 h-6 text-orange" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange mb-1" data-testid={`timeline-year-${index}`}>
                        {event.year}
                      </div>
                      <h4 className="font-semibold text-primary mb-2" data-testid={`timeline-title-${index}`}>
                        {event.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`timeline-desc-${index}`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-12 border border-primary/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4" data-testid="heading-values">
              Our Core Values
            </h3>
            <p className="text-muted-foreground">
              The principles that have guided us for 45 years
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center" data-testid="value-quality">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Quality Construction</h4>
              <p className="text-sm text-muted-foreground">
                Uncompromising standards in materials and workmanship
              </p>
            </div>
            <div className="text-center" data-testid="value-transparency">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Transparency</h4>
              <p className="text-sm text-muted-foreground">
                Complete RERA compliance and honest communication
              </p>
            </div>
            <div className="text-center" data-testid="value-delivery">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Timely Delivery</h4>
              <p className="text-sm text-muted-foreground">
                Committed to delivering projects on schedule
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-orange hover:bg-orange/90" data-testid="button-know-more" asChild>
            <a href="/about">
              Know More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}