import {
  Shield,
  Zap,
  Globe,
  Code,
  Lock,
  Layers,
  TrendingUp,
  Cpu,
  Database,
  Network
} from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ghost Stark Privacy",
      description: "Perfect Bitcoin anonymity with 90% private transactions using zkSTARK proofs. Mathematically guaranteed privacy that survives quantum attacks.",
      gradient: "from-primary to-primary-light"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "NIST-Approved Crypto",
      description: "Battle-tested ML-DSA & SLH-DSA implementations. Quantum safety as standard, not a feature - proven and enterprise-ready.",
      gradient: "from-secondary-blue to-primary-light"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-Chain Native",
      description: "Bitcoin, ICP, ckBTC support without bridges. Cross-chain privacy that's virtually impossible elsewhere.",
      gradient: "from-secondary-dark to-secondary-blue"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Enterprise Architecture",
      description: "Microservices across 5 specialized canisters with high-performance transaction processing for institutional adoption.",
      gradient: "from-primary-light to-secondary-blue"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Anonymous Pool",
      description: "256 similar transactions cryptographically grouped with stealth addresses and smart fragmentation for perfect anonymity.",
      gradient: "from-primary to-secondary-dark"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Multi-Hop Routing",
      description: "Automated anonymous execution through routing HOPs with fund conservation and absolute security verification.",
      gradient: "from-secondary-blue to-primary"
    }
  ];

  const stats = [
    {
      icon: <Shield className="h-6 w-6" />,
      value: "90%",
      label: "Bitcoin Privacy"
    },
    {
      icon: <Database className="h-6 w-6" />,
      value: "256",
      label: "Pool Size"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      value: "NIST",
      label: "Approved"
    },
    {
      icon: <Network className="h-6 w-6" />,
      value: "5",
      label: "Canisters"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            Ghost Stark Technology
          </div>

          <h2 className="text-4xl md:text-5xl font-title font-bold text-foreground mb-6">
            Privacy-First
            <span className="block bg-gradient-to-r from-primary via-primary-light to-accent-primary bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h2>

          <p className="text-xl text-foreground/70 font-subtitle max-w-3xl mx-auto">
            Quantum safety is now standard. Privacy is the next frontier.
            Built on battle-tested post-quantum cryptography for tomorrow's privacy infrastructure.
          </p>
        </ScrollAnimation>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} direction="up">
              <div className="text-center p-6 border border-border rounded-xl hover:border-primary/30 transition-colors">
                <div className="flex justify-center mb-4">
                  <div className="p-3 border border-primary/20 rounded-xl text-primary hover:border-primary/40 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-title font-bold text-primary-light mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60 font-body">
                  {stat.label}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} direction="up">
              <div className="group p-8 border border-border rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Icon */}
                <div className="w-16 h-16 border border-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:border-primary/40 group-hover:scale-110 transition-all">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-title font-bold text-foreground mb-4">
                  {feature.title}
                </h3>

                <p className="text-foreground/70 font-body leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center text-primary text-sm font-medium">
                    Learn more
                    <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-lg text-foreground/70 font-body mb-6">
            The quantum problem is solved. Privacy is the next frontier.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Documentation
            </button>
            <button className="border border-accent-primary/30 hover:border-accent-primary text-accent-primary hover:bg-accent-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              Join Discord
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border border-primary/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-10 w-16 h-16 border border-secondary-blue/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default FeaturesSection;