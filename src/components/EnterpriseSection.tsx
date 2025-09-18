import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  Shield,
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";

const EnterpriseSection = () => {
  const enterpriseFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Military-grade encryption with 24/7 threat monitoring and incident response capabilities."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "Dedicated account management with priority support and custom SLAs for enterprise clients."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Compliance Ready",
      description: "Built-in compliance frameworks for SOX, GDPR, HIPAA, and other regulatory requirements."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Custom Deployment",
      description: "On-premises, hybrid, or private cloud deployment options tailored to your infrastructure."
    }
  ];

  const tokenomics = [
    { metric: "Total Supply", value: "100,000,000 QUBEX", description: "Fixed supply with deflationary mechanics" },
    { metric: "Enterprise Reserve", value: "30%", description: "Reserved for enterprise partnerships and development" },
    { metric: "Public Distribution", value: "40%", description: "Available through public sale and community programs" },
    { metric: "Team & Advisors", value: "15%", description: "Vested over 4 years with 1-year cliff" },
    { metric: "Ecosystem Fund", value: "15%", description: "Supporting developers and network growth" }
  ];

  return (
    <>
      {/* Enterprise Section */}
      <section id="enterprise" className="py-24 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/30">
              <Building2 className="w-4 h-4 mr-2" />
              Enterprise Solutions
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-primary bg-clip-text text-transparent">
              Built for Enterprise
            </h2>
            <p className="text-xl font-subtitle text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Qubex Protocol delivers enterprise-grade quantum-safe security with the scalability, compliance, and support that Fortune 500 companies require.
            </p>
          </div>

          {/* Enterprise Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-muted-foreground">Enterprise Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-security bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-muted-foreground">Support Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-muted-foreground">Compliance Rate</div>
            </div>
          </div>

          {/* Enterprise Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {enterpriseFeatures.map((feature, index) => (
              <Card key={index} className="professional-glow hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready for Enterprise Deployment?</h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
              Contact our enterprise team to discuss your specific requirements and get a custom solution tailored to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary text-white">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Enterprise Demo
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Mail className="w-4 h-4 mr-2" />
                Contact Enterprise Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section id="qubex-token" className="py-24 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 px-4 py-2 bg-accent/10 text-accent border-accent/30">
              <TrendingUp className="w-4 h-4 mr-2" />
              QUBEX Token
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-primary bg-clip-text text-transparent">
              Powering the Quantum Economy
            </h2>
            <p className="text-xl font-subtitle text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The QUBEX token serves as the native utility token for the Qubex Protocol ecosystem, enabling governance, staking, and access to premium features.
            </p>
          </div>

          {/* Token Utility */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="professional-glow hover:border-primary/30 transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Network Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Stake QUBEX tokens to participate in network security and earn rewards for validating quantum-safe transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-glow hover:border-primary/30 transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-security rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Governance Rights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hold QUBEX tokens to participate in protocol governance and vote on key network upgrades and proposals.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-glow hover:border-primary/30 transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Premium Access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access advanced features, priority support, and exclusive enterprise tools with QUBEX token holdings.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tokenomics */}
          <Card className="professional-glow border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Token Distribution</h3>
                <p className="text-muted-foreground text-lg">
                  Carefully designed tokenomics to ensure long-term sustainability and network growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {tokenomics.map((item, index) => (
                  <div key={index} className="text-center p-6 bg-background border border-border rounded-xl">
                    <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                      {item.value}
                    </div>
                    <div className="font-semibold mb-2">{item.metric}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button className="gradient-primary text-white mr-4">
                  View Detailed Tokenomics
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Join Token Sale
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default EnterpriseSection;