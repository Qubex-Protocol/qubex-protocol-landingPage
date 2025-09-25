import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Shield, 
  TrendingUp, 
  Award, 
  Building, 
  Globe,
  Clock,
  CheckCircle,
  Star,
  Lock
} from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Enterprise Partners",
      description: "Global organizations trusting our quantum-safe infrastructure"
    },
    {
      icon: Shield,
      value: "99.99%",
      label: "Security Uptime",
      description: "Guaranteed security service level with 24/7 monitoring"
    },
    {
      icon: TrendingUp,
      value: "$50B+",
      label: "Assets Protected",
      description: "Total value of digital assets secured by our protocol"
    },
    {
      icon: Globe,
      value: "120+",
      label: "Countries",
      description: "Global deployment across six continents"
    }
  ];

  const certifications = [
    {
      icon: Award,
      title: "ISO 27001:2022",
      description: "Information Security Management",
      badge: "Certified"
    },
    {
      icon: Shield,
      title: "SOC 2 Type II",
      description: "Service Organization Controls",
      badge: "Compliant"
    },
    {
      icon: CheckCircle,
      title: "NIST Framework",
      description: "Cybersecurity Framework",
      badge: "Aligned"
    },
    {
      icon: Lock,
      title: "FedRAMP",
      description: "Federal Risk Authorization",
      badge: "Authorized"
    }
  ];

  const partnerships = [
    {
      icon: Building,
      name: "Fortune 500",
      count: "150+",
      description: "Companies"
    },
    {
      icon: Users,
      name: "Financial Institutions",
      count: "200+",
      description: "Banks & Credit Unions"
    },
    {
      icon: Globe,
      name: "Government Agencies",
      count: "50+",
      description: "Worldwide"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/30">
            Trusted Globally
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Leading the Quantum-Safe Revolution
          </h2>
          <p className="text-xl font-subtitle text-muted-foreground max-w-3xl mx-auto">
            Trusted by enterprises worldwide, Qubex Protocol sets the standard for post-quantum blockchain security.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="professional-glow hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold mb-3">{stat.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Compliance */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Security Certifications & Compliance</h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Meeting the highest international standards for security, privacy, and regulatory compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="professional-glow hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-security rounded-xl flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="mb-3 bg-primary/20 text-primary border-primary/30">
                    {cert.badge}
                  </Badge>
                  <h4 className="font-bold mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Organizations worldwide choose Qubex Protocol for mission-critical security infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {partnerships.map((partnership, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <partnership.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  {partnership.count}
                </div>
                <h4 className="font-semibold mb-1">{partnership.name}</h4>
                <p className="text-sm text-muted-foreground">{partnership.description}</p>
              </div>
            ))}
          </div>

          {/* Customer Testimonial */}
          <div className="bg-muted/30 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-current" />
              ))}
            </div>
            <blockquote className="text-lg font-subtitle italic text-foreground mb-4 max-w-3xl mx-auto">
              "Qubex Protocol's post-quantum security gives us the confidence to operate in an increasingly digital world. Their enterprise-grade solution has transformed how we approach blockchain security."
            </blockquote>
            <div className="font-semibold">Chief Technology Officer</div>
            <div className="text-sm text-muted-foreground">Fortune 100 Financial Institution</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to secure your organization with quantum-safe technology?
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Implementation typically takes 30-60 days</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;