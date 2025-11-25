import { useEffect, useRef, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

// Import hero images for 3D slideshow
import heroImg1 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.17.17 PM.jpeg";
import heroImg2 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.19.51 PM.jpeg";
import heroImg3 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.21.01 PM.jpeg";
import heroImg4 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.22.23 PM.jpeg";
import heroImg5 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.32 PM.jpeg";

interface HeroProps {
  reduceMotion: boolean;
}

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

const Hero = ({ reduceMotion }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };

    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.5)));
      setScrollProgress(progress);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [reduceMotion]);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/918197963763?text=Hi! I'm interested in booking plate decor services.`, "_blank");
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFB6C1] via-[#FFD6D1] via-[#FFC0CB] to-[#FFDCC8]"
      style={{ perspective: "1200px" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF69B4]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#FFB6C1]/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#FF69B4]/15 via-[#FFB6C1]/10 to-transparent rounded-full" />
      </div>

      {/* 3D Slideshow Stack */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {heroImages.map((img, index) => {
          const isActive = index === currentSlide;
          const isPrev = index === (currentSlide - 1 + heroImages.length) % heroImages.length;
          const isNext = index === (currentSlide + 1) % heroImages.length;
          
          const zIndex = isActive ? 10 : isPrev ? 5 : isNext ? 3 : 1;
          const scale = isActive ? 1 : isPrev ? 0.85 : isNext ? 0.75 : 0.6;
          const translateX = isActive ? 0 : isPrev ? -200 : isNext ? 200 : (index - currentSlide) * 300;
          const translateZ = isActive ? 0 : isPrev ? -100 : isNext ? -150 : -200;
          const rotateY = isActive ? 0 : isPrev ? -15 : isNext ? 15 : (index - currentSlide) * 20;
          const opacity = isActive ? 1 : isPrev ? 0.6 : isNext ? 0.4 : 0.2;

          return (
            <div
              key={index}
              className="absolute w-[600px] h-[600px] transition-all duration-1000 ease-out"
              style={{
                zIndex,
                transform: reduceMotion
                  ? `scale(${scale})`
                  : `translate3d(${translateX + mousePosition.x * 20}px, ${mousePosition.y * 20 + scrollProgress * 100}px, ${translateZ}px) rotateY(${rotateY}deg) rotateX(${mousePosition.y * 5}deg) scale(${scale})`,
                opacity: 1 - scrollProgress * 0.5,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={img}
                  alt={`Hero slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#FF69B4]/20 to-[#FFB6C1]/20 transition-opacity duration-1000 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
              {/* Glow effect */}
              <div
                className={`absolute -inset-4 bg-gradient-to-br from-[#FF69B4]/30 to-[#FFB6C1]/30 rounded-3xl blur-2xl transition-opacity duration-1000 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Logo - Breathing and Glowing */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF69B4] to-[#FFB6C1] rounded-full blur-xl opacity-60 animate-pulse" />
          <div className="relative w-20 h-20 bg-gradient-to-br from-[#FF69B4] via-[#FFB6C1] to-[#FFD6D1] rounded-full flex items-center justify-center shadow-2xl logo-breathe-glow">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32">
        <div
          className="space-y-8 transition-transform duration-500"
          style={{
            transform: reduceMotion
              ? undefined
              : `translateY(${scrollProgress * 50}px) scale(${1 - scrollProgress * 0.1})`,
            opacity: 1 - scrollProgress * 0.3,
          }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold leading-tight">
            <span className="text-white drop-shadow-2xl [text-shadow:0_0_20px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.8),0_0_60px_rgba(255,105,180,0.6),2px_2px_4px_rgba(0,0,0,0.8)]">
              Handcrafted plates,
            </span>
            <br />
            <span className="text-white drop-shadow-2xl [text-shadow:0_0_20px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.8),0_0_60px_rgba(255,105,180,0.6),2px_2px_4px_rgba(0,0,0,0.8)] font-extrabold inline-block">
              ceremony perfect.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-light max-w-3xl mx-auto">
            <span className="bg-gradient-to-r from-white via-[#FFEFE6] to-white bg-clip-text text-transparent drop-shadow-xl [text-shadow:0_0_20px_rgba(255,255,255,0.9),0_0_30px_rgba(255,105,180,0.5)]">
              Custom traditional plate decor for{" "}
              <span className="font-medium text-white [text-shadow:0_0_15px_rgba(255,105,180,0.8)]">Babyshowers</span> •{" "}
              <span className="font-medium text-white [text-shadow:0_0_15px_rgba(255,20,147,0.8)]">Engagements</span> •{" "}
              <span className="font-medium text-white [text-shadow:0_0_15px_rgba(255,105,180,0.8)]">Half-Saree</span> •{" "}
              <span className="font-medium text-white [text-shadow:0_0_15px_rgba(255,20,147,0.8)]">Weddings</span> •{" "}
              <span className="font-medium text-white [text-shadow:0_0_15px_rgba(255,105,180,0.8)]">Naming</span> •{" "}
              <span className="font-medium text-white [text-shadow:0_0_15px_rgba(255,20,147,0.8)]">Thread</span> ceremonies
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={handleWhatsApp}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#FF69B4] via-[#FF1493] to-[#D99A4A] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#FF69B4]/50 hover:scale-110 transition-all duration-300 overflow-hidden cta-glow-pop"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book via WhatsApp
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF1493] via-[#FF69B4] to-[#FF1493] opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
            </button>

            <button
              onClick={scrollToServices}
              className="px-8 py-4 border-2 border-[#FF69B4] text-[#2C1B1B] rounded-full font-semibold text-lg hover:bg-[#FF69B4] hover:text-white hover:shadow-lg hover:shadow-[#FF69B4]/30 transition-all duration-300"
            >
              See our craft
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-[#FF69B4] shadow-lg shadow-[#FF69B4]/50"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="w-6 h-6 text-[#FF69B4]" />
      </div>
    </section>
  );
};

export default Hero;
