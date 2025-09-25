import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { value: "90%", label: "Private Bitcoin" },
    { value: "256", label: "Transaction Pool" },
    { value: "NIST", label: "Approved Crypto" },
    { value: "5", label: "Specialized Canisters" }
  ];

  const features = [
    { icon: <Shield className="h-6 w-6 text-accent-primary" />, text: "NIST-Approved" },
    { icon: <Zap className="h-6 w-6 text-accent-primary" />, text: "zkSTARK Proofs" },
    { icon: <Globe className="h-6 w-6 text-accent-primary" />, text: "Multi-Chain Native" }
  ];

  return (
    <>
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary-blue/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary-light))_0%,_transparent_50%)] opacity-20" />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(25,59,106,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(25,59,106,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            {/* Announcement Bar */}
            <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-primary/90 text-white border border-primary-light/50 mb-8 backdrop-blur-md shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-secondary-blue mr-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-secondary-blue opacity-75"></span>
              </span>
              NIST-Approved • 90% Private Bitcoin Transactions
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-title font-bold text-foreground mb-6 leading-tight">
              Perfect Bitcoin
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-extrabold">
                Anonymity
              </span>
              with Ghost Stark
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-foreground/70 font-subtitle max-w-4xl mx-auto mb-12 leading-relaxed">
              The world's first mathematically guaranteed anonymous Bitcoin transactions with
              post-quantum cryptography. Privacy-first infrastructure built on quantum-safe foundations.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 border border-primary/20 rounded-full px-4 py-2 text-sm font-body hover:border-primary/40 transition-colors"
                >
                  <div className="text-primary">{feature.icon}</div>
                  <span className="text-foreground/80">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold group text-foreground/40 cursor-not-allowed"
              >
                Launch App
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-white" />
              </Button>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold group"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="mr-2 h-5 w-5 text-white" />
                Watch Demo
              </Button>

              <Link to="/waitlist">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold"
                >
                  Join Waitlist
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-title font-bold text-primary-light mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-foreground/60 font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse" />
          <div className="absolute top-40 right-10 w-16 h-16 border border-secondary-blue/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-20 w-12 h-12 border border-primary-light/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Data Streams */}
          <div className="absolute top-1/3 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-60" />
          <div className="absolute top-1/2 right-0 w-1 h-24 bg-gradient-to-b from-transparent via-secondary-blue/50 to-transparent opacity-60" />
        </div>

        {/* Video Modal */}
        {isVideoPlaying && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoPlaying(false)}
          >
            <div className="relative max-w-4xl w-full mx-4">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setIsVideoPlaying(false)}
              >
                Close
              </Button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/N3yEALPCjKY"
                  title="Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HeroSection;