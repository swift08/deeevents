import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Certifications", href: "#certifications" },
    ],
    services: [
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Reviews", href: "#reviews" },
    ],
    academy: [
      { name: "Makeup Academy", href: "#academy" },
      { name: "Courses", href: "#academy" },
      { name: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-playfair font-bold gold-gradient">
                Makeup Republic
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Premium bridal makeup studio in Mysore, creating timeless beauty for your special moments.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mysore_bridal_makeup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:deekshitharaj.1018@gmail.com"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary flex items-center justify-center transition-all group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="tel:+918197963763"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary flex items-center justify-center transition-all group"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-playfair font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-foreground mb-4">Academy</h3>
            <ul className="space-y-2">
              {footerLinks.academy.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-muted-foreground text-center">
              © {currentYear} Makeup Republic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
