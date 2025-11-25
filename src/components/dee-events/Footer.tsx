import { Link } from "react-router-dom";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#2C1B1B] to-[#1a1414] text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 3D Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF69B4]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFB6C1]/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#FF69B4]/5 via-[#FFB6C1]/5 to-transparent rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D99A4A]/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#FF1493]/5 rounded-full blur-2xl animate-float-delayed" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">Mysore Plate Decor</h3>
            <p className="text-white/70">
              Handcrafted heritage. Stage-ready plates. Custom traditional plate decor for all your special ceremonies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#home" className="hover:text-[#FF69B4] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF69B4] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF69B4] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#FF69B4] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#how-we-craft" className="hover:text-[#FF69B4] transition-colors">
                  How We Craft
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#FF69B4] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF69B4] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact & Social</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                Phone:{" "}
                <a href="tel:+918197963763" className="hover:text-[#FF69B4] transition-colors">
                  +91 81979 63763
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:deekshitharaj.1018@gmail.com" className="hover:text-[#FF69B4] transition-colors">
                  deekshitharaj.1018@gmail.com
                </a>
              </li>
              <li>Mysuru, Karnataka, India</li>
              <li className="pt-2">
                <a
                  href="https://www.instagram.com/mysore_plate_decor?igsh=MWV1Njd2bXRpYnFlcA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#FF69B4] transition-colors mb-3"
                >
                  <Instagram className="w-5 h-5" />
                  Follow us on Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918197963763?text=Hi! I'm interested in booking plate decor services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#25D366]/40 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Mysore Plate Decor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

