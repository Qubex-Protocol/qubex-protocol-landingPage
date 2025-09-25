import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Calendar,
  TrendingUp,
  Award,
  Users,
  Newspaper
} from "lucide-react";

const HighlightsSection = () => {
  const highlights = [
    {
      type: "Partnership",
      title: "Enterprise Security Alliance",
      description: "Strategic partnership with leading cybersecurity firms to enhance quantum-resistant solutions",
      date: "December 2024",
      badge: "Partnership",
      icon: <Users className="w-5 h-5" />,
      link: "#"
    },
    {
      type: "Achievement",
      title: "NIST Quantum-Safe Certification",
      description: "First blockchain protocol to receive full NIST post-quantum cryptography certification",
      date: "November 2024",
      badge: "Certified",
      icon: <Award className="w-5 h-5" />,
      link: "#"
    },
    {
      type: "News",
      title: "Enterprise Adoption Milestone",
      description: "100+ Fortune 500 companies now testing Qubex Protocol for quantum-safe transactions",
      date: "October 2024",
      badge: "Milestone",
      icon: <TrendingUp className="w-5 h-5" />,
      link: "#"
    }
  ];

  return (
    <section id="highlights" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 bg-accent/10 text-accent border-accent/30">
            <Newspaper className="w-4 h-4 mr-2" />
            Latest Updates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Recent Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest partnerships, achievements, and technological milestones in quantum-safe blockchain security.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group professional-glow hover:border-primary/30 transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                      {highlight.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {highlight.badge}
                    </Badge>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {highlight.date}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {highlight.description}
                </p>

                {/* Action */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80 p-0 h-auto font-medium group/btn"
                >
                  Learn more
                  <ExternalLink className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            View All News & Updates
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;