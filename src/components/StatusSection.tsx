import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Zap, Shield, Network, Code, Brain, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";

const StatusSection = () => {
  const implementations = [
    {
      title: "Cryptography Stack",
      status: "FULLY IMPLEMENTED",
      progress: 100,
      icon: Shield,
      description: "Post-quantum algorithms with 70%+ compression efficiency",
      features: ["SLH-DSA-SHA2-128f", "ML-DSA (Dilithium2)", "Hybrid engine", "Performance benchmarks"]
    },
    {
      title: "MEV Protection",
      status: "INDUSTRY-LEADING",
      progress: 100,
      icon: Zap,
      description: "99%+ attack prevention with sophisticated testing",
      features: ["Front-running protection", "VRF-based ordering", "Economic incentives", "Real-time metrics"]
    },
    {
      title: "Multi-Chain Infrastructure",
      status: "PRODUCTION-READY",
      progress: 100,
      icon: Network,
      description: "Native Bitcoin & ICP integration without bridges",
      features: ["Bitcoin vault", "ICP integration", "Smart routing", "Real-time sync"]
    },
    {
      title: "Transaction Processing",
      status: "PRODUCTION-READY",
      progress: 100,
      icon: Code,
      description: "VRF-powered fair sequencing with sub-second finality",
      features: ["Fair sequencing", "Batch optimization", "ZSTD compression", "Performance monitoring"]
    },
    {
      title: "Professional Frontend",
      status: "ENTERPRISE-READY",
      progress: 90,
      icon: Rocket,
      description: "React interface with real-time WebSocket updates",
      features: ["Real-time updates", "Multi-chain operations", "Analytics", "Blockchain explorer"]
    },
    {
      title: "Zero-Knowledge Proofs",
      status: "IN DEVELOPMENT",
      progress: 30,
      icon: Brain,
      description: "PLONK circuits for privacy-preserving validation",
      features: ["PLONK foundation", "Groth16 planned", "Private consensus", "Cross-chain privacy"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "FULLY IMPLEMENTED":
      case "INDUSTRY-LEADING":
      case "PRODUCTION-READY":
        return "bg-primary/20 text-primary border-primary/30";
      case "ADVANCED":
      case "ENTERPRISE-READY":
        return "bg-primary/20 text-primary border-primary/30";
      case "IN DEVELOPMENT":
        return "bg-primary/20 text-primary border-primary/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress === 100) return "bg-primary";
    if (progress >= 80) return "bg-accent";
    return "bg-accent";
  };

  // Calculer le pourcentage global basé sur les progressions individuelles
  const calculateOverallProgress = () => {
    const totalProgress = implementations.reduce((sum, impl) => sum + impl.progress, 0);
    return Math.round(totalProgress / implementations.length);
  };

  const overallProgress = calculateOverallProgress();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Current Implementation Status
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track the real-time development progress of Qubex Protocol's quantum-ready infrastructure
          </p>
          <div className="cyber-border w-32 mx-auto mt-8" />
        </div>

        {/* Implementation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {implementations.map((impl, index) => (
            <Reveal key={index} delayMs={index * 120}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <impl.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    <Badge className={getStatusColor(impl.status)}>
                      {impl.progress === 100 ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                      {impl.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold">{impl.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{impl.description}</p>
                </CardHeader>
                
                <CardContent>
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{impl.progress}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ease-out ${getProgressColor(impl.progress)}`}
                        style={{ width: `${impl.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    {impl.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-1 h-1 bg-primary rounded-full mr-3" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        
        {/* Overall Progress Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="pt-8">
              <div className="text-3xl font-bold text-primary mb-2">{overallProgress}%</div>
              <div className="text-lg text-muted-foreground mb-4">Overall Platform Completion</div>
              <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-2000 ease-out" style={{ width: `${overallProgress}%` }} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatusSection;