import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Users, Calendar, CheckCircle } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location: string;
  status: "Ongoing" | "Completed" | "Ready to Move" | "Sold Out";
  image: string;
  configuration: string;
  priceRange?: string;
  carpetArea: string;
  totalUnits: number;
  possession: string;
  reraId: string;
  keyFeatures: string[];
  onViewDetails: () => void;
  onScheduleVisit: () => void;
}

export default function ProjectCard({
  title,
  location,
  status,
  image,
  configuration,
  priceRange,
  carpetArea,
  totalUnits,
  possession,
  reraId,
  keyFeatures,
  onViewDetails,
  onScheduleVisit
}: ProjectCardProps) {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ongoing": return "bg-orange/10 text-orange border-orange/20";
      case "Completed": return "bg-chart-3/10 text-chart-3 border-chart-3/20";
      case "Ready to Move": return "bg-chart-3/10 text-chart-3 border-chart-3/20";
      case "Sold Out": return "bg-muted/50 text-muted-foreground border-muted";
      default: return "bg-orange/10 text-orange border-orange/20";
    }
  };

  return (
    <Card className="group hover-elevate overflow-hidden transition-all duration-300" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${title} Project`}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className={getStatusVariant(status)} data-testid={`status-${status.toLowerCase().replace(/\s+/g, '-')}`}>
            {status === "Completed" || status === "Ready to Move" ? (
              <CheckCircle className="w-3 h-3 mr-1" />
            ) : null}
            {status}
          </Badge>
        </div>
        {status === "Sold Out" && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <Badge variant="destructive" className="text-lg px-4 py-2">
              SOLD OUT
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-3">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-primary hover:text-primary/80 transition-colors" data-testid={`text-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
          <div className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm leading-relaxed" data-testid={`text-location-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {location}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Home className="w-3 h-3" />
              <span>Configuration</span>
            </div>
            <p className="font-medium" data-testid={`text-config-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {configuration}
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="w-3 h-3" />
              <span>Total Units</span>
            </div>
            <p className="font-medium" data-testid={`text-units-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {totalUnits}
            </p>
          </div>
        </div>

        {priceRange && (
          <div className="bg-orange/5 rounded-lg p-3 border border-orange/10">
            <p className="text-2xl font-bold text-orange" data-testid={`text-price-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {priceRange}
            </p>
            <p className="text-sm text-muted-foreground">Starting Price</p>
          </div>
        )}

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Carpet Area:</span>
            <span className="font-medium" data-testid={`text-area-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {carpetArea}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Possession:</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span className="font-medium" data-testid={`text-possession-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                {possession}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Key Features:</p>
          <div className="flex flex-wrap gap-1">
            {keyFeatures.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs" data-testid={`feature-${index}-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                {feature}
              </Badge>
            ))}
            {keyFeatures.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{keyFeatures.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="text-xs text-muted-foreground pt-2 border-t border-border">
          <p>RERA ID: <span className="font-mono" data-testid={`text-rera-${title.toLowerCase().replace(/\s+/g, '-')}`}>{reraId}</span></p>
        </div>
      </CardContent>

      <CardFooter className="pt-0 gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={onViewDetails}
          data-testid={`button-details-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          View Details
        </Button>
        <Button
          className="flex-1 bg-orange hover:bg-orange/90"
          onClick={onScheduleVisit}
          disabled={status === "Sold Out"}
          data-testid={`button-visit-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Schedule Visit
        </Button>
      </CardFooter>
    </Card>
  );
}