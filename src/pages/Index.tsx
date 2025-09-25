import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import AnimatedCube from "@/components/AnimatedCube";
import GhostAnimation from "@/components/GhostAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedCube />
      <GhostAnimation />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;