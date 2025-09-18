import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Database,
  Network,
  Shield,
  Code,
  Globe,
  Layers,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const IntegrationsSection = () => {
  const integrations = [
    {
      category: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      platforms: ["AWS", "Azure", "Google Cloud", "IBM Cloud"],
      description: "Seamless deployment across major cloud infrastructures",
      color: "gradient-primary"
    },
    {
      category: "Enterprise Systems",
      icon: <Database className="w-6 h-6" />,
      platforms: ["SAP", "Oracle", "Microsoft", "ServiceNow"],
      description: "Native integration with enterprise resource planning",
      color: "gradient-security"
    },
    {
      category: "Blockchain Networks",
      icon: <Network className="w-6 h-6" />,
      platforms: ["Ethereum", "Polygon", "Binance", "Avalanche"],
      description: "Cross-chain compatibility with leading networks",
      color: "gradient-accent"
    },
    {
      category: "Security Tools",
      icon: <Shield className="w-6 h-6" />,
      platforms: ["CyberArk", "HashiCorp", "Ping Identity", "Okta"],
      description: "Integration with enterprise security frameworks",
      color: "gradient-primary"
    }
  ];

  const apis = [
    { name: "RESTful API", status: "Available", description: "Complete REST API for all protocol functions" },
    { name: "GraphQL API", status: "Available", description: "Flexible GraphQL endpoints for complex queries" },
    { name: "WebSocket API", status: "Available", description: "Real-time data streaming and notifications" },
    { name: "SDK Libraries", status: "Coming Soon", description: "Native SDKs for popular programming languages" }
  ];

  return (
    <section id="developers" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 bg-accent/10 text-accent border-accent/30">
            <Layers className="w-4 h-4 mr-2" />
            Platform Integrations
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-primary bg-clip-text text-transparent">
            Universal Compatibility
          </h2>
          <p className="text-xl font-subtitle text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Qubex Protocol seamlessly integrates with your existing technology stack, enabling quantum-safe security across all your systems.
          </p>
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {integrations.map((integration, index) => (
            <Card key={index} className="professional-glow hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 ${integration.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {integration.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{integration.category}</h3>
                    <p className="text-muted-foreground text-sm">{integration.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {integration.platforms.map((platform, platformIndex) => (
                    <div key={platformIndex} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{platform}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-medium group">
                  View Integration Guide
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Developer APIs */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Code className="w-6 h-6 text-primary" />
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                Developer Tools
              </Badge>
            </div>
            <h3 className="text-3xl font-bold mb-4">Comprehensive API Suite</h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Access the full power of Qubex Protocol through our comprehensive APIs and development tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {apis.map((api, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-background border border-border rounded-xl">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold">{api.name}</h4>
                    <Badge variant={api.status === "Available" ? "default" : "secondary"} className="text-xs">
                      {api.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{api.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-primary text-white">
              Access API Documentation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Download SDKs
            </Button>
          </div>
        </div>

        {/* Enterprise Support */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Need Custom Integration?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our enterprise team provides dedicated support for custom integrations and specialized deployment requirements.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Contact Enterprise Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;