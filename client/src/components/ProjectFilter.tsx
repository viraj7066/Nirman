import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, MapPin, Home, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (value: string) => void;
  selectedLocation: string;
  onLocationChange: (value: string) => void;
  selectedType: string;
  onTypeChange: (value: string) => void;
  resultCount: number;
}

export default function ProjectFilter({
  searchTerm,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  selectedLocation,
  onLocationChange,
  selectedType,
  onTypeChange,
  resultCount
}: ProjectFilterProps) {
  const clearFilters = () => {
    onSearchChange("");
    onStatusChange("all");
    onLocationChange("all");
    onTypeChange("all");
  };

  const hasActiveFilters = searchTerm || selectedStatus !== "all" || selectedLocation !== "all" || selectedType !== "all";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10"
                  data-testid="input-project-search"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedStatus} onValueChange={onStatusChange}>
                <SelectTrigger className="w-full sm:w-40" data-testid="select-status">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="ready-to-move">Ready to Move</SelectItem>
                  <SelectItem value="sold-out">Sold Out</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={onLocationChange}>
                <SelectTrigger className="w-full sm:w-40" data-testid="select-location">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="gangapur-road">Gangapur Road</SelectItem>
                  <SelectItem value="dwarka">Dwarka</SelectItem>
                  <SelectItem value="satpur">Satpur</SelectItem>
                  <SelectItem value="panchavati">Panchavati</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={onTypeChange}>
                <SelectTrigger className="w-full sm:w-40" data-testid="select-type">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="1bhk">1 BHK</SelectItem>
                  <SelectItem value="2bhk">2 BHK</SelectItem>
                  <SelectItem value="3bhk">3 BHK</SelectItem>
                  <SelectItem value="plots">Plots</SelectItem>
                </SelectContent>
              </Select>

              <AnimatePresence>
                {hasActiveFilters && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="whitespace-nowrap"
                      data-testid="button-clear-filters"
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Clear Filters
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Results and Active Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4 pt-4 border-t border-border">
            <motion.div
              key={resultCount}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-muted-foreground"
              data-testid="text-result-count"
            >
              Showing {resultCount} projects
            </motion.div>

            <AnimatePresence>
              {hasActiveFilters && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex flex-wrap gap-2"
                >
                  {searchTerm && (
                    <Badge variant="secondary" className="gap-1">
                      <Search className="w-3 h-3" />
                      "{searchTerm}"
                    </Badge>
                  )}
                  {selectedStatus !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      <Calendar className="w-3 h-3" />
                      {selectedStatus}
                    </Badge>
                  )}
                  {selectedLocation !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      <MapPin className="w-3 h-3" />
                      {selectedLocation}
                    </Badge>
                  )}
                  {selectedType !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      <Home className="w-3 h-3" />
                      {selectedType}
                    </Badge>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}