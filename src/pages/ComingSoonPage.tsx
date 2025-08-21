import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigate } from "react-router-dom";

const ComingSoonPage = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Back Arrow */}
      <div className="absolute top-12 left-12 z-20">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="h-10 w-10 p-0 hover:bg-primary/10 text-foreground/80 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>      
      {/* Theme Toggle */}
      <div className="absolute top-2 right-5 z-20">
        <ThemeToggle />
      </div>
      
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