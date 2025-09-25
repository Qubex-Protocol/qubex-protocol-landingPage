import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Twitter, Linkedin, Mail, Globe, ArrowUpRight, Youtube, Ban } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const footerLinks = {
    technology: [
      { name: "Ghost Stark Privacy", href: "#privacy" },
      { name: "NIST Cryptography", href: "#quantum" },
      { name: "zkSTARK Proofs", href: "#zkstark" },
      { name: "Anonymous Pool", href: "#pool" }
    ],
    features: [
      { name: "Bitcoin Anonymity", href: "#bitcoin" },
      { name: "Multi-Chain Native", href: "#multichain" },
      { name: "Enterprise Architecture", href: "#enterprise" },
      { name: "Multi-Hop Routing", href: "#routing" }
    ],
    community: [
      { name: "Discord", href: "https://discord.gg/khjM74KbT4" },
      { name: "Twitter/X", href: "https://x.com/QubexProtocol" },
      { name: "Documentation", href: "https://qubex-protocol.gitbook.io/qubex-protocol-docs/" },
      { name: "WCHL Hackathon", href: "https://wchl25.worldcomputer.com/" }
    ],
    resources: [
      { name: "Privacy Research", href: "#research" },
      { name: "Market Analysis", href: "#analysis" },
      { name: "Post-Quantum Evolution", href: "#evolution" },
      { name: "Technical Documentation", href: "#docs" }
    ]
  };

  const socialLinks = [
    { name: "Discord", href: "https://discord.gg/khjM74KbT4", icon: <MessageCircle className="h-5 w-5 text-primary-light" /> },
    { name: "Twitter", href: "https://x.com/QubexProtocol", icon: <Twitter className="h-5 w-5 text-primary-light" /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/qubex-protocl/", icon: <Linkedin className="h-5 w-5 text-primary-light" /> },
    { name: "YouTube", href: "https://www.youtube.com/@QubexProtocol", icon: <Youtube className="h-5 w-5 text-primary-light" /> },
    { name: "Email", href: "mailto:qubexprotocol@gmail.com", icon: <Mail className="h-5 w-5 text-primary-light" /> }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section */}
          <ScrollAnimation>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src="/src/assets/logo.png"
                  alt="Qubex Protocol"
                  className="h-8 w-8"
                />
                <span className="text-xl font-title font-bold text-white">
                  Qubex Protocol
                </span>
              </div>

              <p className="text-foreground/70 font-body text-lg mb-8 max-w-md">
                Privacy-focused infrastructure that treats quantum safety as standard.
                Perfect Bitcoin anonymity with Ghost Stark technology.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <h3 className="text-lg font-title font-semibold text-foreground mb-4">
                  Stay Updated
                </h3>
                <div className="flex max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-background border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                  />
                  <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-r-lg transition-colors font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 text-foreground/60 hover:text-primary transition-colors rounded-lg border border-transparent hover:border-primary/20"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="lg:text-right">
              <h3 className="text-2xl font-title font-bold text-foreground mb-4">
                Privacy is the Next Frontier
              </h3>
              <p className="text-foreground/70 font-body mb-8">
                The quantum problem is solved. Join us in building tomorrow's privacy infrastructure
                with mathematically guaranteed Bitcoin anonymity.
              </p>

              <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                <Link to="/waitlist">
                  <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors group">
                    Join Waitlist
                    <ArrowUpRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-white" />
                  </button>
                </Link>
                <a href="https://qubex-protocol.gitbook.io/qubex-protocol-docs/">
                  <button className="border border-border hover:border-primary/50 text-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                    Documentation
                  </button>
                </a>
              </div>
            </div>
            </div>
          </ScrollAnimation>

          {/* Links Grid */}
          <ScrollAnimation delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Technology */}
            <div>
              <h4 className="text-sm font-title font-semibold text-foreground uppercase tracking-wider mb-4">
                Technology
              </h4>
              <ul className="space-y-3">
                {footerLinks.technology.map((link) => (
                  <li key={link.name}>
                    <div
                      className="flex items-center justify-between text-foreground/40 cursor-not-allowed font-body group"
                      onMouseEnter={() => setHoveredItem(link.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span>{link.name}</span>
                      {hoveredItem === link.name && (
                        <Ban className="h-4 w-4 text-red-500 ml-2" />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm font-title font-semibold text-foreground uppercase tracking-wider mb-4">
                Features
              </h4>
              <ul className="space-y-3">
                {footerLinks.features.map((link) => (
                  <li key={link.name}>
                    <div
                      className="flex items-center justify-between text-foreground/40 cursor-not-allowed font-body group"
                      onMouseEnter={() => setHoveredItem(link.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span>{link.name}</span>
                      {hoveredItem === link.name && (
                        <Ban className="h-4 w-4 text-red-500 ml-2" />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-sm font-title font-semibold text-foreground uppercase tracking-wider mb-4">
                Community
              </h4>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground/60 hover:text-primary transition-colors font-body flex items-center"
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {link.name}
                      {link.href.startsWith('http') && (
                        <ArrowUpRight className="ml-1 h-3 w-3 text-primary-light" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-title font-semibold text-foreground uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <div
                      className="flex items-center justify-between text-foreground/40 cursor-not-allowed font-body group"
                      onMouseEnter={() => setHoveredItem(link.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span>{link.name}</span>
                      {hoveredItem === link.name && (
                        <Ban className="h-4 w-4 text-red-500 ml-2" />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/60 font-body text-sm">
              © {currentYear} Qubex Protocol. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-foreground/60 font-body">
                <Globe className="h-4 w-4 text-foreground/60" />
                <span>Global</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-foreground/60 font-body">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;