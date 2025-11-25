import { Award, Shield, BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "6 Days Master Class (Nikitha Anand)",
    issuer: "International Makeup Techniques Residency",
    year: "2024",
    description: "Completed an intensive 6-day residency specialising in global bridal techniques with hands-on application.",
  },
  {
    title: "Make-Up Seminar (with Shilpa & Lekha)",
    issuer: "Bridal Expo 2023",
    year: "2023",
    description: "Look & Learn seminar focusing on contemporary South Indian bridal glam and workflow automation.",
  },
  {
    title: "Make-Up Seminar (with Somu Hassan)",
    issuer: "Bridal Expo 2023",
    year: "2023",
    description: "Advanced session on cinematic lighting friendly makeup and speed-draping for destination weddings.",
  },
  {
    title: "Make-Up Seminar (with Kinjal Mehta)",
    issuer: "Bridal Expo 2023",
    year: "2023",
    description: "Editorial beauty curation and bold colour blocking trends translated for Indian skin tones.",
  },
  {
    title: "2 Days Gel Extension Master Class",
    issuer: "The Nail Art School",
    year: "2022",
    description: "Mastered long-wear gel nail extensions and luxury nail prep to offer cohesive bridal styling.",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-background reveal-section"
      data-animate="true"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-primary font-semibold tracking-wider uppercase">Credentials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold gold-gradient mb-6">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professionally trained and certified by leading beauty institutions
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-card border-2 border-primary/30 rounded-xl p-8 overflow-hidden hover:border-primary transition-all duration-300 card-hover-3d shimmer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Icon */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity mx-auto w-16" />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-playfair font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                  <BadgeCheck className="w-4 h-4" />
                  <span>Certified {cert.year}</span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/50 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/50 rounded-bl-xl" />

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 rounded-2xl p-8 md:p-12 text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-playfair font-bold gold-gradient mb-4">
            Trusted Professional
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            All certifications are from recognized institutions and verified by industry standards. 
            We maintain the highest level of professionalism and expertise in every service we provide.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <span>Verified Professional</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <span>Continuous Education</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <span>Industry Recognized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
