import HeroSection from "@/components/HeroSection";
import StatusSection from "@/components/StatusSection";
import MetricsSection from "@/components/MetricsSection";
import RoadmapSection from "@/components/RoadmapSection";
import TechnicalSection from "@/components/TechnicalSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatusSection />
      <MetricsSection />
      <RoadmapSection />
      <TechnicalSection />
    </div>
  );
};

export default Index;
