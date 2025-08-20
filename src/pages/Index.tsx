import HeroSection from "@/components/HeroSection";
import StatusSection from "@/components/StatusSection";
import MetricsSection from "@/components/MetricsSection";
import RoadmapSection from "@/components/RoadmapSection";
import TechnicalSection from "@/components/TechnicalSection";
import Reveal from "@/components/Reveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Reveal>
        <StatusSection />
      </Reveal>
      <Reveal delayMs={100}>
        <MetricsSection />
      </Reveal>
      <Reveal delayMs={200}>
        <RoadmapSection />
      </Reveal>
      <Reveal delayMs={300}>
        <TechnicalSection />
      </Reveal>
    </div>
  );
};

export default Index;
