import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ShieldCheck, Play } from "lucide-react";
import portfolio01 from "@/assets/portfolio images/portfolio-14.jpg";
import portfolio02 from "@/assets/portfolio images/portfolio-05.jpg";
import portfolio03 from "@/assets/portfolio images/portfolio-11.jpg";
import portfolio04 from "@/assets/portfolio images/portfolio-04.jpg";
import logo from "@/assets/logo.jpeg";

const heroHighlights = [
  { label: "Luxury Brides", value: "500+" },
  { label: "Cities Travelled", value: "35" },
  { label: "Students Mentored", value: "120+" },
];

const heroSlides = [
  { id: "couture", src: portfolio01, caption: "Couture bridal glam • Mysuru Palace", focus: "center 20%" },
  { id: "editorial", src: portfolio02, caption: "Editorial reception glow • Jaipur", focus: "center 24%" },
  { id: "heritage", src: portfolio03, caption: "Heirloom jasmine look • Bengaluru", focus: "center 18%" },
  {
    id: "studio",
    src: portfolio04,
    caption: "Studio-ready drama • Fashion week",
    focus: "center 22%",
  },
  {
    id: "global",
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    caption: "Global runway beauty • Paris",
    focus: "center 25%",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const orderedSlides = useMemo(() => {
    const slides = [];
    for (let i = 0; i < heroSlides.length; i += 1) {
      const index = (activeSlide + i) % heroSlides.length;
      slides.push({ ...heroSlides[index], position: i });
    }
    return slides;
  }, [activeSlide]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16 reveal-section"
      data-animate="true"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${heroSlides[activeSlide].src})`,
            filter: "blur(18px) scale(1.1)",
            backgroundPosition: heroSlides[activeSlide].focus ?? "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
      </div>

      <div className="absolute inset-0 aurora opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 sm:px-6 py-2">
                <img src={logo} alt="Makeup Republic logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover logo-glow" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.4em] text-white/70">Makeup Republic</span>
              </div>

            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-playfair font-bold leading-tight mb-4">
                <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Makeup Republic</span>
                <span className="block text-white text-2xl sm:text-3xl lg:text-4xl mt-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
                  Mysuru&apos;s Couture Makeup House
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed mx-auto lg:mx-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] font-medium">
                Curating elevated looks that balance tradition with editorial polish. From pre-bridal skin prep
                to grand reception glam, every stroke is bespoke.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-start justify-center">
              <Button
                size="lg"
                className="glow-button cta-pop bg-primary text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Appointment
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg hover:bg-primary/10 cta-pop w-full sm:w-auto"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Services
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/80 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span>Luxe products only</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span>Travel-ready team</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span>HD + Airbrush finish</span>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 mt-8 lg:mt-0">
            <div className="absolute -inset-10 bg-gradient-to-br from-primary/40 to-transparent blur-3xl" />

            <div className="relative h-[300px] sm:h-[380px] lg:h-[420px] w-full rounded-[24px] sm:rounded-[32px] bg-black/50 border border-white/10 backdrop-blur-xl overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 flex items-start justify-center pt-6 sm:pt-8 perspective-1000">
                {orderedSlides.map((slide, index) => {
                  const depth = index * 60;
                  const translate = index * -50;
                  const scale = 1 - index * 0.07;
                  return (
                    <div
                      key={slide.id}
                      className="absolute w-48 h-72 sm:w-56 sm:h-80 lg:w-64 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all duration-700"
                      style={{
                        transform: `translateX(${translate}px) translateZ(${-depth}px) rotateY(${index * -6}deg) scale(${scale})`,
                        opacity: index > 3 ? 0 : 1,
                        zIndex: 50 - index,
                      }}
                    >
                      <img src={slide.src} alt={slide.caption} className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 text-white text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                        {slide.caption}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Text content below the cards */}
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-center">
              <p className="text-xs sm:text-sm uppercase tracking-[0.4em] sm:tracking-[0.5em] text-white/90 font-semibold">Signature Transformations</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-playfair text-white font-bold drop-shadow-lg">Every bride deserves a cinematic entry</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                <span className="rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 text-white/90 font-medium">Bridal</span>
                <span className="rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 text-white/90 font-medium">Editorial</span>
                <span className="rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 text-white/90 font-medium">Studio</span>
              </div>
            </div>

            <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 -translate-x-1/2 flex flex-wrap gap-2 sm:gap-3 bg-black/70 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 backdrop-blur-xl max-w-xl w-[95%]">
              {heroHighlights.map((item) => (
                <div key={item.label} className="text-center flex-1 min-w-[100px] sm:min-w-[120px]">
                  <p className="text-xl sm:text-2xl font-playfair text-white">{item.value}</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden">
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-[0.4em] text-white/50">
        Scroll
      </div>
    </section>
  );
};

export default Hero;
