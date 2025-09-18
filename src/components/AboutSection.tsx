import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Award,
  Globe,
  Shield,
  TrendingUp,
  Target,
  Heart,
  ArrowRight,
  Linkedin,
  Twitter
} from "lucide-react";

const AboutSection = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      expertise: "Post-Quantum Cryptography",
      bio: "Former NIST researcher with 15+ years in quantum-resistant security",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Executive Officer",
      expertise: "Enterprise Blockchain",
      bio: "Previous VP Engineering at Fortune 100 company, blockchain pioneer",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Dr. James Liu",
      role: "Head of Research",
      expertise: "Quantum Computing",
      bio: "PhD in Quantum Physics, published author on quantum security",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Every decision is made with security as the primary consideration"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "Building technology that protects digital assets worldwide"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Empowering developers and enterprises to build the quantum-safe future"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Constantly pushing boundaries in quantum-resistant technology"
    }
  ];

  const milestones = [
    { year: "2022", event: "Qubex Protocol Founded", description: "Vision to create the first quantum-safe blockchain" },
    { year: "2023", event: "First Post-Quantum Implementation", description: "Successfully deployed NIST-approved cryptographic standards" },
    { year: "2024", event: "Enterprise Partnerships", description: "Major Fortune 500 companies begin pilot programs" },
    { year: "2025", event: "Mainnet Launch", description: "Full production launch with complete quantum resistance" }
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/30">
            <Heart className="w-4 h-4 mr-2" />
            About Qubex Protocol
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-primary bg-clip-text text-transparent">
            Securing the Quantum Future
          </h2>
          <p className="text-xl font-subtitle text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a team of quantum security experts, blockchain pioneers, and enterprise technologists united by a single mission: preparing the world for the quantum computing era.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <Card className="professional-glow border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To provide the world's most secure and scalable quantum-resistant blockchain infrastructure, enabling organizations to protect their digital assets against both current and future threats, including the eventual emergence of quantum computing.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm">Quantum-safe by design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm">Enterprise-ready scalability</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm">Industry-leading compliance</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Our Values</h3>
            {values.map((value, index) => (
              <div key={index} className="flex gap-4 p-6 bg-card border border-border rounded-xl professional-glow hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h4 className="font-bold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Leadership Team</h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              World-class experts in quantum computing, cryptography, and enterprise blockchain technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="professional-glow hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                  <div className="text-primary font-medium mb-1">{member.role}</div>
                  <Badge variant="secondary" className="mb-4">{member.expertise}</Badge>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Journey</h3>
            <p className="text-muted-foreground text-lg">
              Key milestones in building the world's first quantum-safe blockchain protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-4">
                  {milestone.year}
                </div>
                <h4 className="font-bold mb-2">{milestone.event}</h4>
                <p className="text-sm text-muted-foreground">{milestone.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="gradient-primary text-white">
              Join Our Mission
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;