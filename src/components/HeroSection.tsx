import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Network, Activity } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-2 right-5 z-20">
        <ThemeToggle />
      </div>
      
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none">
        <DotLottieReact
          src="https://lottie.host/0149e876-1332-4071-9afe-95abc3b13ef5/jHuXHhF5ab.lottie"
          loop
          autoplay
          className="w-500 h-full"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      
      {/* Quantum Grid Overlay */}
      <div className="absolute inset-0 block dark:hidden bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <Badge variant="outline" className="mb-8 mt-[7vh] px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 quantum-glow">
          <Activity className="w-4 h-4 mr-2" />
          Upcoming production • Quantum Secure
        </Badge>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Qubex Protocol
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 dark:text-foreground/90 mb-4 max-w-4xl mx-auto leading-relaxed">
          The first <span className="text-primary font-semibold">post-quantum</span>, enterprise-grade Layer 2 on Internet Computer Protocol
        </p>
        
        <p className="text-lg text-foreground/70 dark:text-foreground/80 mb-12 max-w-3xl mx-auto">
          Revolutionary multi-chain DeFi platform combining post-quantum cryptography, zero-knowledge capabilities, and intelligent transaction processing for the quantum computing era.
        </p>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-card/70 dark:bg-card/30 backdrop-blur-sm border border-border/60 rounded-xl p-6 hover:bg-card/80 dark:hover:bg-card/40 shadow-md transition-all duration-300">
            <Shield className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Quantum-Ready</h3>
            <p className="text-sm text-muted-foreground">NIST-approved post-quantum cryptography with hybrid compatibility</p>
          </div>
          
          <div className="bg-card/70 dark:bg-card/30 backdrop-blur-sm border border-border/60 rounded-xl p-6 hover:bg-card/80 dark:hover:bg-card/40 shadow-md transition-all duration-300">
            <Zap className="w-8 h-8 text-accent mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">MEV Protection</h3>
            <p className="text-sm text-muted-foreground">Industry-leading protection with 99%+ attack prevention rate</p>
          </div>
          
          <div className="bg-card/70 dark:bg-card/30 backdrop-blur-sm border border-border/60 rounded-xl p-6 hover:bg-card/80 dark:hover:bg-card/40 shadow-md transition-all duration-300">
            <Network className="w-8 h-8 text-secondary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Multi-Chain</h3>
            <p className="text-sm text-muted-foreground">Native Bitcoin & ICP integration without bridge risks</p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground px-8 py-3 quantum-glow">
            Launch Platform
          </Button>
          <Button variant="outline" size="lg" className="border-primary/40 text-primary hover:bg-primary/15 px-8 py-3">
            View Documentation
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-accent/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent data-stream" />
    </section>
  );
};

export default HeroSection;