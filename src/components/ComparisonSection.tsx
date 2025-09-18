import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Shield, Lock, Zap, Network } from "lucide-react";

const ComparisonSection = () => {
  const features = [
    { name: "Post-Quantum Cryptography", qubex: true, ethereum: false, bitcoin: false, others: false },
    { name: "Military-Grade Security", qubex: true, ethereum: false, bitcoin: true, others: false },
    { name: "Enterprise Compliance", qubex: true, ethereum: false, bitcoin: false, others: true },
    { name: "Smart Contract Support", qubex: true, ethereum: true, bitcoin: false, others: true },
    { name: "Quantum Resistance", qubex: true, ethereum: false, bitcoin: false, others: false },
    { name: "High TPS Performance", qubex: true, ethereum: false, bitcoin: false, others: true },
    { name: "EVM Compatibility", qubex: true, ethereum: true, bitcoin: false, others: true },
    { name: "Cross-Chain Support", qubex: true, ethereum: false, bitcoin: false, others: true },
    { name: "Zero-Knowledge Proofs", qubex: true, ethereum: true, bitcoin: false, others: false },
    { name: "Regulatory Ready", qubex: true, ethereum: false, bitcoin: false, others: false }
  ];

  const platforms = [
    {
      name: "Qubex Protocol",
      logo: "🛡️",
      gradient: "gradient-primary",
      description: "Quantum-Safe Blockchain"
    },
    {
      name: "Ethereum",
      logo: "⟠",
      gradient: "bg-slate-100 dark:bg-slate-800",
      description: "Smart Contract Platform"
    },
    {
      name: "Bitcoin",
      logo: "₿",
      gradient: "bg-orange-100 dark:bg-orange-900/30",
      description: "Digital Currency"
    },
    {
      name: "Others",
      logo: "🌐",
      gradient: "bg-gray-100 dark:bg-gray-800",
      description: "Traditional Blockchains"
    }
  ];

  const CheckIcon = ({ value }: { value: boolean }) => (
    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
      value ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
              'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
    }`}>
      {value ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
    </div>
  );

  return (
    <section id="technology" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/30">
            <Shield className="w-4 h-4 mr-2" />
            Technology Comparison
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-primary bg-clip-text text-transparent">
            Why Qubex Protocol Leads
          </h2>
          <p className="text-xl font-subtitle text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            See how Qubex Protocol's quantum-safe technology compares to traditional blockchain platforms across key enterprise requirements.
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="professional-glow border-primary/20 overflow-hidden">
          <CardContent className="p-0">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-4 p-6 border-b border-border bg-muted/20">
              <div className="font-medium text-muted-foreground">Features</div>
              {platforms.map((platform, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 ${platform.gradient} rounded-xl flex items-center justify-center text-2xl mb-2 mx-auto`}>
                    {platform.logo}
                  </div>
                  <div className="font-bold text-sm">{platform.name}</div>
                  <div className="text-xs text-muted-foreground">{platform.description}</div>
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {features.map((feature, index) => (
              <div key={index} className={`grid grid-cols-5 gap-4 p-6 border-b border-border last:border-b-0 ${
                index % 2 === 0 ? 'bg-muted/5' : 'bg-background'
              }`}>
                <div className="font-medium flex items-center">
                  {feature.name}
                </div>
                <div className="flex justify-center">
                  <CheckIcon value={feature.qubex} />
                </div>
                <div className="flex justify-center">
                  <CheckIcon value={feature.ethereum} />
                </div>
                <div className="flex justify-center">
                  <CheckIcon value={feature.bitcoin} />
                </div>
                <div className="flex justify-center">
                  <CheckIcon value={feature.others} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Key Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold mb-2">Quantum-Safe</h3>
            <p className="text-sm text-muted-foreground">Only platform with complete post-quantum protection</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 gradient-security rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold mb-2">Enterprise Ready</h3>
            <p className="text-sm text-muted-foreground">Built-in compliance and audit capabilities</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold mb-2">High Performance</h3>
            <p className="text-sm text-muted-foreground">Superior speed without compromising security</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Network className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold mb-2">Universal Access</h3>
            <p className="text-sm text-muted-foreground">Compatible with all major blockchain networks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;