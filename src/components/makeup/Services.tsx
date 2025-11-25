import { useState } from "react";
import { Sparkles, Heart, Star, Palette, Wind, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Couture Bridal Experience",
    badge: "Most Booked",
    description:
      "Complete wedding day glam with luxe skin prep, personalized look design, jewellery setting, and veil/saree draping.",
    highlights: ["Custom skin therapy ritual", "HD + Airbrush hybrid finish", "Hair architecture & hair padding"],
    duration: "4-5 hrs on event day",
  },
  {
    icon: Star,
    title: "Editorial HD Glam",
    badge: "Camera Ready",
    description: "Studio-grade HD glam for reels, photoshoots, and on-stage appearances with precise contour sculpting.",
    highlights: ["Photo-proof complexion", "Body glow finishing", "Look book styling"],
    duration: "2.5 hrs",
  },
  {
    icon: Wind,
    title: "Airbrush Perfection",
    badge: "Feather Light",
    description: "Airbrush artistry designed for humid weather and long ceremonies with transfer-proof finish.",
    highlights: ["Silicone-based kit", "Waterproof sealing", "Temperature control mist"],
    duration: "2 hrs",
  },
  {
    icon: Heart,
    title: "Engagement & Sangeet Glam",
    badge: "Soft Focus",
    description: "Romantic colour stories with dewy skin, luminous eyes and statement hair for pre-wedding celebrations.",
    highlights: ["Look moodboard", "Accessory curation", "Extended touch-up kit"],
    duration: "2-3 hrs",
  },
  {
    icon: Palette,
    title: "Party / Reception Styling",
    badge: "After Hours",
    description: "Red-carpet inspired glam with bold liner work, glossy lips and glass skin highlight.",
    highlights: ["Face lifting techniques", "Body highlight", "On-site changeovers"],
    duration: "90 mins",
  },
  {
    icon: User,
    title: "Groom & Entourage",
    badge: "Finishing Suite",
    description: "Photo-perfect grooming for the groom and close family including skin correction and hairstyling.",
    highlights: ["Matte shine control", "Brow & beard grooming", "Pocket touch-up kit"],
    duration: "60 mins / person",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section
      id="services"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-black-card relative overflow-hidden reveal-section"
      data-animate="true"
    >
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.5em] text-primary">Luxury Menu</p>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold gold-gradient">
            Services Designed Like Couture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tap into our drop-down atelier to explore every curated experience. Each service blooms open with the
            details you care about most.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeService.title === service.title;

              return (
                <button
                  key={service.title}
                  onClick={() => setActiveService(service)}
                  className={`w-full text-left rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:border-primary/50 transition-all p-5 ${
                    isActive ? "border-primary/60 bg-primary/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">{service.title}</p>
                        <p className="text-xs uppercase tracking-[0.4em] text-primary/70">{service.badge}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${isActive ? "rotate-180 text-primary" : "text-white/50"}`}
                    />
                  </div>
                  <div
                    className={`mt-4 text-sm text-muted-foreground leading-relaxed transition-all duration-300 ${
                      isActive ? "max-h-36 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    {service.description}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-black/60 p-10 backdrop-blur-3xl shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
            <div className="absolute inset-0 rounded-[32px] border border-white/5 pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <p className="text-sm uppercase tracking-[0.5em] text-primary">Now Viewing</p>
              <h3 className="text-3xl font-playfair text-white">{activeService.title}</h3>
              <p className="text-muted-foreground/90">{activeService.description}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {activeService.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary"
                  >
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between bg-black/40 border border-white/10 rounded-2xl px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">Duration</p>
                  <p className="text-lg font-semibold text-white">{activeService.duration}</p>
                </div>
                <Button
                  className="glow-button cta-pop bg-primary text-primary-foreground"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book Slot
                </Button>
              </div>

              <p className="text-xs text-white/50">
                Every booking includes a detailed consultation, moodboard + look confirmations, and a personalised skin
                prep checklist delivered over WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
