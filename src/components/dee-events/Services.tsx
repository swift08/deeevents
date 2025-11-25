import { useState, useRef, useEffect } from "react";
import { Baby, Heart, Shirt, Sparkles, BabyIcon, Scissors } from "lucide-react";

// Import videos
import babyShowerVideo from "@/assets/dee events/portfolio videos/baby shower.mp4";
import engagementVideo from "@/assets/dee events/portfolio videos/engagement.mp4";
import halfSareeVideo from "@/assets/dee events/portfolio videos/half saree ceremony.mp4";
import weddingVideo from "@/assets/dee events/portfolio videos/Wedding.mp4";

// Import images
import babyShowerImg1 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.34.51 PM.jpeg";
import engagementImg1 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.27.26 PM.jpeg";

interface ServicesProps {
  reduceMotion: boolean;
}

const services = [
  {
    id: "babyshower",
    title: "Babyshower",
    icon: Baby,
    description: "Celebrate new beginnings with beautifully decorated plates",
    hoverText: "Welcome little miracles",
    gradient: "from-pink-300 to-rose-300",
    video: babyShowerVideo,
    image: babyShowerImg1,
  },
  {
    id: "engagement",
    title: "Engagement",
    icon: Heart,
    description: "Elegant plate decor for your special promise",
    hoverText: "Where love begins",
    gradient: "from-rose-300 to-pink-300",
    video: engagementVideo,
    image: engagementImg1,
  },
  {
    id: "halfsaree",
    title: "Halfsaree",
    icon: Shirt,
    description: "Traditional elegance for this milestone ceremony",
    hoverText: "We craft auspicious threads",
    gradient: "from-pink-300 to-fuchsia-300",
    video: halfSareeVideo,
    image: engagementImg1, // Placeholder
  },
  {
    id: "wedding",
    title: "Wedding",
    icon: Sparkles,
    description: "Grand plate arrangements for your big day",
    hoverText: "Your forever starts here",
    gradient: "from-rose-400 to-pink-400",
    video: weddingVideo,
    image: engagementImg1, // Placeholder
  },
  {
    id: "naming",
    title: "Naming Ceremony",
    icon: BabyIcon,
    description: "Blessed plates for naming ceremonies",
    hoverText: "Names that matter",
    gradient: "from-pink-300 to-purple-300",
    video: null,
    image: babyShowerImg1, // Placeholder
  },
  {
    id: "thread",
    title: "Thread Ceremony",
    icon: Scissors,
    description: "Sacred plate decor for thread ceremonies",
    hoverText: "Sacred traditions",
    gradient: "from-purple-300 to-pink-300",
    video: null,
    image: engagementImg1, // Placeholder
  },
];

const Services = ({ reduceMotion }: ServicesProps) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduceMotion) return;

    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              card.style.animationDelay = `${index * 0.1}s`;
              card.classList.add("animate-fade-in-up");
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, [reduceMotion]);


  return (
    <section id="services" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FFE4E1] to-[#FFD6D1] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF69B4]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#FFB6C1]/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-[#2C1B1B] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-[#2C1B1B]/80 max-w-2xl mx-auto">
            Every ceremony deserves plates that tell your story
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <div
                  className={`relative h-full bg-gradient-to-br ${service.gradient} rounded-3xl p-6 cursor-pointer transition-all duration-500 ${
                    !reduceMotion && "hover:scale-105"
                  } shadow-lg hover:shadow-2xl overflow-hidden`}
                  style={
                    !reduceMotion && isHovered
                      ? {
                          transform: "rotateX(5deg) rotateY(-5deg) translateZ(20px)",
                        }
                      : {}
                  }
                >
                  {/* Video or Image Background */}
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                    {service.video ? (
                      <video
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[service.id] = el;
                            el.loop = true;
                            el.muted = true;
                            void el.play().catch(() => undefined);
                          }
                        }}
                        src={service.video}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        autoPlay
                      />
                    ) : (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>


                  {/* Decorative SVG Pattern */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <defs>
                        <pattern id={`pattern-${service.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <circle cx="20" cy="20" r="2" fill="#FF69B4" />
                        </pattern>
                      </defs>
                      <rect width="200" height="200" fill={`url(#pattern-${service.id})`} />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-[#FF69B4]" />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-[#2C1B1B] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[#2C1B1B]/80 mb-4">{service.description}</p>
                    </div>

                    {/* Hover Text */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-[#2C1B1B] font-medium italic">{service.hoverText}</p>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 ${
                      !reduceMotion && "-z-10"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
