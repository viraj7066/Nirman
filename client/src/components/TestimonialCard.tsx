import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  project: string;
  avatar?: string;
  rating: number;
  testimonial: string;
  designation?: string;
  date: string;
}

export default function TestimonialCard({
  name,
  project,
  avatar,
  rating,
  testimonial,
  designation,
  date
}: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="hover-elevate h-full" data-testid={`testimonial-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {getInitials(name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold text-primary" data-testid={`testimonial-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {name}
                </h4>
                <p className="text-sm text-muted-foreground" data-testid={`testimonial-project-${name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {project} {designation && `• ${designation}`}
                </p>
              </div>
            </div>
            <Quote className="w-8 h-8 text-orange/30 flex-shrink-0" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'text-orange fill-orange' : 'text-muted-foreground/30'
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2" data-testid={`testimonial-rating-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              ({rating}/5)
            </span>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-foreground leading-relaxed flex-grow mb-4" data-testid={`testimonial-text-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            "{testimonial}"
          </blockquote>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Badge variant="secondary" className="text-xs">
              Verified Customer
            </Badge>
            <time className="text-xs text-muted-foreground" data-testid={`testimonial-date-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              {date}
            </time>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}