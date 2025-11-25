import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Sparkles, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#how-we-craft", label: "How We Craft" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const position = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/918197963763?text=Hi! I'm interested in booking plate decor services.`, "_blank");
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-500 ease-out bg-white border-b border-[#FF69B4]/10 shadow-lg shadow-[#FF69B4]/20"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          transform: "translateY(0)",
          willChange: "background-color, backdrop-filter",
          backgroundColor: "#ffffff",
          zIndex: 9999,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF69B4] to-[#FFB6C1] rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-[#FF69B4] via-[#FF1493] to-[#FFB6C1] rounded-full flex items-center justify-center logo-breathe-glow shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="font-playfair text-xl font-bold hidden sm:block transition-colors text-[#2C1B1B]">
                Mysore Plate Decor
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="font-semibold transition-colors relative group lobby-glow-breathe text-[#2C1B1B] hover:text-[#FF69B4]"
              >
                LOBBY
                <span className="absolute bottom-0 left-0 w-full h-0.5 transition-opacity bg-[#FF69B4] opacity-60 group-hover:opacity-100" />
              </Link>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="font-medium transition-colors relative group text-[#2C1B1B] hover:text-[#FF69B4]"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 bg-[#FF69B4] group-hover:w-full" />
                </button>
              ))}
              <a
                href="https://www.instagram.com/mysore_plate_decor?igsh=MWV1Njd2bXRpYnFlcA=="
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors p-2 hover:scale-110 text-[#2C1B1B] hover:text-[#FF69B4]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <button
                onClick={handleWhatsApp}
                className="px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 bg-gradient-to-r from-[#FF69B4] via-[#FF1493] to-[#FF69B4] text-white hover:shadow-[#FF69B4]/40"
              >
                <MessageCircle className="w-4 h-4" />
                Book via WhatsApp
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 transition-colors text-[#2C1B1B]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Sheet Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] md:hidden">
          <div
            className="absolute inset-0 bg-black"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-24 left-0 right-0 px-6 pb-12 animate-slide-up">
            <div className="rounded-3xl bg-white shadow-2xl border border-[#FF69B4]/20 overflow-hidden divide-y divide-[#FF69B4]/10">
              <Link
                to="/"
                className="block py-4 px-5 text-[#2C1B1B] font-semibold lobby-glow-breathe transition-colors hover:text-[#FF69B4]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                LOBBY
              </Link>
              <div className="max-h-[60vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left text-[#2C1B1B] font-medium py-4 px-5 hover:bg-[#FFEFE6] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="p-5 space-y-4 bg-[#FFF6F8]">
                <a
                  href="https://www.instagram.com/mysore_plate_decor?igsh=MWV1Njd2bXRpYnFlcA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 border-2 border-[#FF69B4] text-[#2C1B1B] rounded-full font-semibold hover:bg-[#FF69B4] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full font-semibold"
                >
                  Book via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

