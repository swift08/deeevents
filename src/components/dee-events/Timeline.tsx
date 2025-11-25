import { useState, useRef, useEffect } from "react";
import { MessageSquare, Palette, Hammer, Truck } from "lucide-react";

interface TimelineProps {
  reduceMotion: boolean;
}

const steps = [
  {
    id: "consult",
    title: "Consult",
    icon: MessageSquare,
    description: "We discuss your vision, ceremony type, and preferences",
    artisanNote: "Every plate starts with understanding your story",
    image: "/assets/dee-events/timeline-consult.jpg",
  },
  {
    id: "design",
    title: "Design",
    icon: Palette,
    description: "Custom designs crafted to match your ceremony's essence",
    artisanNote: "Tradition meets your unique style",
    image: "/assets/dee-events/timeline-design.jpg",
  },
  {
    id: "craft",
    title: "Craft",
    icon: Hammer,
    description: "Handcrafted with precision and attention to detail",
    artisanNote: "Each plate is a work of art, made with love",
    image: "/assets/dee-events/timeline-craft.jpg",
  },
  {
    id: "deliver",
    title: "Deliver",
    icon: Truck,
    description: "On-time delivery and setup at your venue",
    artisanNote: "We ensure everything is perfect for your special day",
    image: "/assets/dee-events/timeline-deliver.jpg",
  },
];

const Timeline = ({ reduceMotion }: TimelineProps) => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion || !timelineRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-timeline-progress");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <section id="how-we-craft" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFEFE6] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-[#2C1B1B] mb-4">
            How We Craft
          </h2>
          <p className="text-xl text-[#2C1B1B]/70 max-w-2xl mx-auto">
            From consultation to delivery, every step is crafted with care
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD6D1] via-[#D99A4A] to-[#FFD6D1] transform -translate-y-1/2" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === step.id;

              return (
                <div
                  key={step.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#D99A4A] rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-150 transition-transform duration-300" />

                  {/* Step Card */}
                  <div
                    className={`relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                      !reduceMotion && "hover:scale-105"
                    }`}
                    style={
                      !reduceMotion && isHovered
                        ? {
                            transform: "translateY(-10px) rotateX(5deg)",
                            transformStyle: "preserve-3d",
                          }
                        : {}
                    }
                  >
                    {/* Background Image on Hover */}
                    <div
                      className={`absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                        isHovered ? "opacity-10" : ""
                      }`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-[#FFD6D1] to-[#FFEFE6]" />
                    </div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#FFD6D1] to-[#FFDCC8] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-[#D99A4A]" />
                      </div>

                      <h3 className="text-2xl font-playfair font-bold text-[#2C1B1B] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#2C1B1B]/70 mb-4">{step.description}</p>

                      {/* Artisan Note - Reveals on Hover */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm italic text-[#D99A4A] font-medium border-l-2 border-[#D99A4A] pl-3">
                          {step.artisanNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

