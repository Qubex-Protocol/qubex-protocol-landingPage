import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Network, Activity } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ComingSoonPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-2 right-5 z-20">
        <ThemeToggle />
      </div>
      
      {/* Background Animation */}
      {/* <div className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none">
        <DotLottieReact
          src="https://lottie.host/0149e876-1332-4071-9afe-95abc3b13ef5/jHuXHhF5ab.lottie"
          loop
          autoplay
          className="w-500 h-full"
          style={{ width: "100%", height: "100%" }}
        />
      </div> */}
      
      {/* Quantum Grid Overlay */}
      <div className="absolute inset-0 block dark:hidden bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <Badge variant="outline" className="mb-8 mt-[7vh] px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 quantum-glow">
          <Activity className="w-4 h-4 mr-2" />
          Coming Soon!
        </Badge>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-accent/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent data-stream" />
    </section>
  );
};

export default ComingSoonPage;