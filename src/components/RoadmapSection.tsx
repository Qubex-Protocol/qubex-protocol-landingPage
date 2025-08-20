import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Calendar, Zap, Shield, Network, Brain, Rocket } from "lucide-react";

const RoadmapSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "COMPLETED",
      quarter: "Q3 2025",
      progress: 100,
      icon: Shield,
      description: "Core infrastructure and quantum-ready foundation",
      achievements: [
        "Multi-chain vault infrastructure",
        "Post-quantum cryptography (SLH-DSA-SHA2-128f, ML-DSA)",
        "MEV protection system with 99%+ success rate",
        "VRF-based transaction sequencing",
        "ZSTD compression engine",
        "React frontend with real-time updates",
        "124 comprehensive tests"
      ]
    },
    {
      phase: "Phase 2",
      title: "Zero-Knowledge & Privacy",
      quarter: "Q3 2025",
      progress: 30,
      icon: Brain,
      description: "Privacy-preserving transaction validation and ZK proofs",
      achievements: [
        "✅ ZK-SNARK foundation framework",
        "🔄 PLONK circuit implementation",
        "⏳ Groth16 proof system",
        "⏳ Private transaction pools",
        "⏳ ZK consensus integration"
      ]
    },
    {
      phase: "Phase 3",
      title: "Scalability & Performance",
      quarter: "Q3 2025",
      progress: 0,
      icon: Zap,
      description: "High-performance transaction processing and sharding",
      achievements: [
        "Intelligent account-based sharding",
        "Parallel transaction validation",
        "Dynamic load balancing",
        "50,000+ TPS target achievement",
        "Advanced state optimization"
      ]
    },
    {
      phase: "Phase 4",
      title: "Enterprise & Ecosystem",
      quarter: "Q4 2025",
      progress: 0,
      icon: Network,
      description: "Enterprise features and ecosystem expansion",
      achievements: [
        "Additional blockchain integrations",
        "Regulatory compliance modules",
        "Institutional custody solutions",
        "Developer SDK release",
        "Decentralized governance (DAO)"
      ]
    },
    {
      phase: "Phase 5",
      title: "Tokenomics & Network Effects",
      quarter: "Q4 2025",
      progress: 0,
      icon: Rocket,
      description: "Token launch and economic incentive alignment",
      achievements: [
        "Q token launch & staking",
        "MEV reward sharing mechanisms",
        "Ecosystem partnership integrations",
        "Liquidity mining programs",
        "Global multi-region deployment"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "bg-primary/20 text-primary border-primary/30";
      case "IN PROGRESS":
        return "bg-accent/20 text-accent border-accent/30";
      case "PLANNED":
        return "bg-secondary/20 text-secondary border-secondary/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return <CheckCircle className="w-4 h-4" />;
      case "IN PROGRESS":
        return <Clock className="w-4 h-4" />;
      case "PLANNED":
        return <Calendar className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  // Compute dynamic statuses: all before the first non-100% are COMPLETED,
  // the first non-100% is IN PROGRESS, the rest are PLANNED
  const firstNotCompleteIndex = phases.findIndex((p) => p.progress < 100);
  const computedPhases = phases.map((p, i) => {
    let computedStatus: string;
    if (firstNotCompleteIndex === -1) {
      computedStatus = "COMPLETED";
    } else if (i < firstNotCompleteIndex) {
      computedStatus = "COMPLETED";
    } else if (i === firstNotCompleteIndex) {
      computedStatus = "IN PROGRESS";
    } else {
      computedStatus = "PLANNED";
    }
    return { ...p, computedStatus } as typeof p & { computedStatus: string };
  });

  // Colored line ratio: completed phases + fraction of current progress
  const completedCount = computedPhases.filter((p) => p.computedStatus === "COMPLETED").length;
  const currentPhase = computedPhases[completedCount];
  const currentFraction = currentPhase ? Math.max(0, Math.min(1, currentPhase.progress / 100)) : 0;
  const coloredRatio = (completedCount + currentFraction) / computedPhases.length;

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            <Calendar className="w-4 h-4 mr-2" />
            Development Roadmap
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Innovation Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our strategic roadmap to building the quantum-safe future of decentralized finance
          </p>
          <div className="cyber-border w-32 mx-auto mt-8" />
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-secondary opacity-30 hidden lg:block" />
          {/* Colored progression overlay */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/70 hidden lg:block"
            style={{ height: `${Math.min(100, Math.max(0, coloredRatio * 100))}%` }}
          />
          
          <div className="space-y-12">
            {computedPhases.map((phase, index) => (
              <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline Marker */}
                <div
                  className={
                    `absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 hidden lg:block border-2 ` +
                    (phase.computedStatus === 'COMPLETED'
                      ? 'bg-primary border-primary'
                      : phase.computedStatus === 'IN PROGRESS'
                        ? 'bg-accent border-accent'
                        : 'bg-card border-border')
                  }
                />
                
                {/* Content Card */}
                <div className="flex-1 max-w-2xl">
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 quantum-glow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <phase.icon className="w-8 h-8 text-primary" />
                          <div>
                            <div className="text-sm text-muted-foreground">{phase.phase}</div>
                            <CardTitle className="text-xl font-bold">{phase.title}</CardTitle>
                          </div>
                        </div>
                        <div className="text-center">
                          <Badge className={getStatusColor(phase.computedStatus)}>
                            {getStatusIcon(phase.computedStatus)}
                            <span className="ml-1">{phase.computedStatus}</span>
                          </Badge>
                          <div className="text-sm text-muted-foreground mt-2">{phase.quarter}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm text-muted-foreground">{phase.progress}%</span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-1000 ease-out ${
                              phase.progress === 100 ? 'bg-primary' : 
                              phase.progress > 0 ? 'bg-accent' : 'bg-secondary'
                            }`}
                            style={{ width: `${phase.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {phase.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start text-sm">
                            {achievement.startsWith('✅') ? (
                              <>
                                <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-foreground">{achievement.slice(2)}</span>
                              </>
                            ) : achievement.startsWith('🔄') ? (
                              <>
                                <Clock className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-foreground">{achievement.slice(2)}</span>
                              </>
                            ) : achievement.startsWith('⏳') ? (
                              <>
                                <Calendar className="w-4 h-4 text-muted-foreground mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{achievement.slice(2)}</span>
                              </>
                            ) : (
                              <>
                                <div className="w-1 h-1 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;