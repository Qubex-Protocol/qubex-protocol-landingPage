import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    {
      name: "Technology",
      href: "#technology",
      dropdown: [
        { name: "Ghost Stark Privacy", href: "#privacy" },
        { name: "NIST Cryptography", href: "#quantum" },
        { name: "Multi-Chain", href: "#multichain" }
      ]
    },
    {
      name: "Features",
      href: "#features",
      dropdown: [
        { name: "Anonymous Pool", href: "#pool" },
        { name: "zkSTARK Proofs", href: "#zkstark" },
        { name: "Enterprise Architecture", href: "#enterprise" }
      ]
    },
    { name: "Community", href: "#community" },
    { name: "Documentation", href: "#documentation" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/src/assets/logo.png"
                alt="Qubex Protocol"
                className="h-8 w-8"
              />
              <span className="text-xl font-title font-bold from-primary via-primary-light to-accent-primary bg-clip-text">
                Qubex Protocol
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    className="text-foreground/80 hover:text-primary px-3 py-2 text-sm font-body font-medium transition-colors flex items-center space-x-1"
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="h-4 w-4 text-foreground/60" />}
                  </button>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 w-48 bg-background border border-border rounded-lg shadow-lg py-2"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropItem) => (
                        <div
                          key={dropItem.name}
                          className="relative flex items-center justify-between px-4 py-2 text-sm text-foreground/40 cursor-not-allowed group"
                          onMouseEnter={() => setHoveredItem(dropItem.name)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <span>{dropItem.name}</span>
                          {hoveredItem === dropItem.name && (
                            <Ban className="h-4 w-4 text-red-500 ml-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/waitlist">
              <Button variant="outline" size="sm">
                Join Waitlist
              </Button>
            </Link>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Documentation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/80 hover:text-primary p-2"
            >
              {isOpen ? <X className="h-6 w-6 text-foreground/80" /> : <Menu className="h-6 w-6 text-foreground/80" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-base font-body font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((dropItem) => (
                      <a
                        key={dropItem.name}
                        href={dropItem.href}
                        className="block px-3 py-1 text-sm text-foreground/60 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2 space-y-2">
              <Link to="/waitlist" className="block">
                <Button variant="outline" size="sm" className="w-full">
                  Join Waitlist
                </Button>
              </Link>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                Documentation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;