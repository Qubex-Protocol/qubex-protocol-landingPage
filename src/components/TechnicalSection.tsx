import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Terminal, GitBranch, Cpu, Database, Lock } from "lucide-react";

const TechnicalSection = () => {
  const specs = [
    {
      component: "Consensus",
      implementation: "AlgoConsensus (PoS + VRF)",
      status: "Production",
      icon: Cpu
    },
    {
      component: "Post-Quantum",
      implementation: "SLH-DSA-SHA2-128f, ML-DSA",
      status: "Production",
      icon: Lock
    },
    {
      component: "Classical Crypto",
      implementation: "ECDSA, Schnorr",
      status: "Production",
      icon: Lock
    },
    {
      component: "MEV Protection",
      implementation: "Commit-reveal + VRF ordering",
      status: "Production",
      icon: Database
    },
    {
      component: "Compression",
      implementation: "ZSTD + adaptive algorithms",
      status: "Production",
      icon: Code
    },
    {
      component: "Multi-Chain",
      implementation: "Bitcoin, ICP native integration",
      status: "Production",
      icon: GitBranch
    }
  ];

  const codeExamples = [
    {
      title: "Multi-Chain Operations",
      language: "Rust",
      code: `// Deposit across chains
deposit_bitcoin(address: String, amount_satoshi: u64)
deposit_icp(address: String, amount_e8s: u64)

// Real-time balance queries
get_bitcoin_balance(address: String) -> BitcoinBalance
get_icp_balance(address: String) -> IcpBalance`
    },
    {
      title: "Cryptographic Engine",
      language: "Rust",
      code: `// Performance benchmarking
crypto_algorithm_benchmark(message: String, algorithm: String)

// Smart algorithm selection
get_crypto_recommendation(amount: u64, threat_level: u8)

// Quantum-ready validation
withdraw_bitcoin_adaptive(address: String, amount: u64)`
    },
    {
      title: "Transaction Processing",
      language: "Rust",
      code: `// Fair transaction ordering
create_transaction_sequencer(strategy: String)
sequence_transaction_batch(batch_size: u64)

// MEV protection
commit_transaction(hash: String, sender: String)
reveal_transaction(hash: String, tx: PolyTransaction)`
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            <Terminal className="w-4 h-4 mr-2" />
            Technical Specifications
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Under the Hood
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into the technical architecture powering Qubex Protocol's quantum-ready infrastructure
          </p>
        </div>

        {/* Technical Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {specs.map((spec, index) => (
            <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <spec.icon className="w-6 h-6 text-primary" />
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {spec.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{spec.component}</h3>
                  <p className="text-sm text-muted-foreground">{spec.implementation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Code Examples */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Core API Functions</h3>
            <p className="text-lg text-muted-foreground">Production-ready Rust implementations</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">{example.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">{example.language}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre className="text-muted-foreground whitespace-pre-wrap">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-card/50 to-card/30 border-primary/20 backdrop-blur-sm">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">17K+</div>
                  <div className="text-sm text-muted-foreground">Lines of Rust Code</div>
                  <div className="text-xs text-primary mt-1">Zero warnings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">NIST</div>
                  <div className="text-sm text-muted-foreground">Approved Algorithms</div>
                  <div className="text-xs text-accent mt-1">Post-quantum ready</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-2">ICP</div>
                  <div className="text-sm text-muted-foreground">Native Platform</div>
                  <div className="text-xs text-secondary mt-1">Canister smart contracts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">124</div>
                  <div className="text-sm text-muted-foreground">Test Cases</div>
                  <div className="text-xs text-primary mt-1">Comprehensive coverage</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Start Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Ready to Build?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground px-8">
              <Terminal className="w-4 h-4 mr-2" />
              Quick Start Guide
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 px-8">
              <GitBranch className="w-4 h-4 mr-2" />
              View Repository
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;