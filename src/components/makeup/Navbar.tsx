import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [elevated, setElevated] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Academy", href: "#academy" },
    { name: "Reviews", href: "#reviews" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setElevated(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollToSection = (hash: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const id = hash.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      const offset = 90;
      const position = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isNavSolid = true;

  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full z-[9999] border-b border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-colors duration-500"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        transform: "translateY(0)",
        willChange: "background-color, backdrop-filter",
        backgroundColor: "#000000",
        zIndex: 9999,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Makeup Republic logo"
              className="w-14 h-14 rounded-full object-cover logo-glow"
            />
            <span className="text-2xl font-playfair font-bold text-white">
              Makeup Republic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <Link
              to="/"
              className="nav-link font-semibold relative text-white/90 hover:text-white transition-colors lobby-glow-breathe"
            >
              LOBBY
            </Link>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => scrollToSection(link.href, e)}
                className={`nav-link font-medium relative transition-colors ${
                  activeSection === link.href.replace("#", "") ? "nav-link-active" : "text-white/80"
                }`}
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.8)] animate-pulse" />
                )}
              </button>
            ))}
            <Button
              className="glow-button bg-primary text-primary-foreground transition-all"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact", e);
              }}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 z-[1500] md:hidden">
            <div
              className="absolute inset-0 bg-black"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-24 left-0 right-0 px-6 pb-12">
              <div className="rounded-3xl bg-black shadow-2xl border border-white/20 overflow-hidden divide-y divide-white/10" style={{ backgroundColor: "#000000" }}>
                <Link
                  to="/"
                  className="block py-4 px-5 text-white font-semibold lobby-glow-breathe transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  LOBBY
                </Link>
                <div className="max-h-[60vh] overflow-y-auto">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href, e);
                        setIsOpen(false);
                      }}
                      className={`block w-full text-left text-white font-medium py-4 px-5 hover:bg-white/10 transition-colors ${
                        activeSection === link.href.replace("#", "")
                          ? "text-primary"
                          : "text-white"
                      }`}
                    >
                      {link.name}
                      {activeSection === link.href.replace("#", "") && (
                        <span className="absolute right-5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.8)] animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="p-5" style={{ backgroundColor: "#000000" }}>
                  <Button
                    className="w-full glow-button bg-primary text-primary-foreground text-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#contact", e);
                      setIsOpen(false);
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
