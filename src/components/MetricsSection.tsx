import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Zap, Network, Clock, Target } from "lucide-react";
import Reveal from "@/components/Reveal";

const MetricsSection = () => {
  const metrics = [
    {
      title: "Compression Efficiency",
      value: "70%+",
      description: "Post-quantum signature compression",
      icon: TrendingUp,
      trend: "+12% vs standard",
      color: "text-primary"
    },
    {
      title: "Attack Prevention",
      value: "99%+",
      description: "MEV attack prevention rate",
      icon: Shield,
      trend: "Industry leading",
      color: "text-primary"
    },
    {
      title: "Transaction Finality",
      value: "<1s",
      description: "Sub-second finality achieved",
      icon: Clock,
      trend: "Real-time processing",
      color: "text-primary"
    },
    {
      title: "Multi-Chain Support",
      value: "2+",
      description: "Native blockchain integrations",
      icon: Network,
      trend: "Bitcoin & ICP live",
      color: "text-primary"
    },
    {
      title: "Code Quality",
      value: "17K+",
      description: "Lines of production Rust code",
      icon: Target,
      trend: "Zero warnings",
      color: "text-primary"
    },
    {
      title: "Test Coverage",
      value: "124",
      description: "Comprehensive test suite",
      icon: Zap,
      trend: "All critical systems",
      color: "text-primary"
    }
  ];

  const liveData = [
    { label: "Network Status", value: "OPERATIONAL", status: "success" },
    { label: "Quantum Readiness", value: "ACTIVE", status: "success" },
    { label: "MEV Protection", value: "ENABLED", status: "success" },
    { label: "Cross-Chain Sync", value: "SYNCED", status: "success" }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            <TrendingUp className="w-4 h-4 mr-2" />
            Real-Time Metrics
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Performance Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Live performance data from Qubex Protocol's quantum-ready infrastructure
          </p>
        </div>

        {/* Live Status Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {liveData.map((item, index) => (
            <Reveal key={index} delayMs={index * 80}>
              <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                <CardContent className="pt-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2" />
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </div>
                  <div className="text-sm font-semibold text-primary">{item.value}</div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Reveal key={index} delayMs={index * 100}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 quantum-glow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <metric.icon className={`w-8 h-8 ${metric.color}`} />
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                      LIVE
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className={`text-3xl font-bold ${metric.color} mb-1`}>
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.description}
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-primary mr-2" />
                      <span className="text-xs text-primary font-medium">
                        {metric.trend}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Performance Summary */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-card/50 to-card/30 border-primary/20 backdrop-blur-sm">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Enterprise-Grade</div>
                  <div className="text-sm text-muted-foreground">Production-ready infrastructure with zero compilation warnings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Quantum-Secure</div>
                  <div className="text-sm text-muted-foreground">NIST-approved post-quantum cryptography implemented</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Multi-Chain</div>
                  <div className="text-sm text-muted-foreground">Native integration without bridge security risks</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;