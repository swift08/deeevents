import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays, Sparkles, Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Landing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  const headerRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const card1Ref = useScrollReveal<HTMLAnchorElement>({ threshold: 0.1, delay: 100 });
  const card2Ref = useScrollReveal<HTMLAnchorElement>({ threshold: 0.1, delay: 200 });
  const footerRef = useScrollReveal<HTMLParagraphElement>({ threshold: 0.2, delay: 300 });

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Only enable mouse tracking on desktop
    if (isMobile) return;

    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({
            x: (e.clientX / window.innerWidth - 0.5) * 20,
            y: (e.clientY / window.innerHeight - 0.5) * 20,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-orange-200/40 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-pink-100/20 via-transparent to-transparent rounded-full" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      <div className="relative z-10 min-h-screen px-4 sm:px-8 py-20 sm:py-24 text-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          {/* Header Section with Enhanced Typography */}
          <div ref={headerRef} className="space-y-6 mb-20 scroll-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-orange-50 border border-pink-200/50 backdrop-blur-sm">
              <Star className="h-4 w-4 text-pink-500 fill-pink-500" />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
                Premium Services
              </p>
            </div>
            
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent premium-text-shadow">
              Choose Your Experience
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto font-light">
              Select from our premium services
            </p>
          </div>

          {/* Premium Service Cards */}
          <div className="mt-8 grid w-full gap-8 md:gap-12 md:grid-cols-2 max-w-6xl">
            {/* Mysore Plate Decor Card */}
            <Link
              ref={card1Ref}
              to="/d-events"
              aria-label="Navigate to Mysore Plate Decor"
              className="group relative block rounded-[40px] transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] active:scale-[0.98] scroll-reveal-left scroll-reveal-delay-1"
              style={{
                background:
                  "radial-gradient(circle at 10% 10%, rgba(255,255,255,0.8), rgba(255,255,255,0)), linear-gradient(145deg, #ff7a18, #ff3a7a 50%, #ffc6ff)",
              }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-orange-400 to-pink-400 rounded-[40px] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-700" />
              
              <div className="relative h-full rounded-[40px] p-8 sm:p-12 overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Icon */}
              <div className="mb-8 inline-flex rounded-2xl bg-white/40 p-5 text-[#8a0f4c] backdrop-blur-xl shadow-lg group-hover:scale-110 transition-transform duration-500 premium-shine">
                <CalendarDays className="h-7 w-7" />
              </div>

                {/* Content Card */}
                <div className="relative rounded-[32px] border border-white/60 bg-white/70 p-8 sm:p-10 text-left text-[#8a0f4c] shadow-[0_40px_90px_rgba(255,130,168,0.4)] backdrop-blur-2xl transition-all duration-700 group-hover:bg-white/85 group-hover:shadow-[0_50px_120px_rgba(255,130,168,0.5)] group-hover:border-white/80 premium-shine">
                  <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#8a0f4c] mb-4 premium-text-shadow">
                    Mysore Plate Decor
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-[#8a0f4c]/90 leading-relaxed font-medium">
                    Premium event planning and management services for
                    unforgettable experiences
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-sm font-bold text-[#8a0f4c] group-hover:gap-4 transition-all duration-300">
                    <span>Premium Planning</span>
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                {/* Footer Text */}
                <div className="mt-8 text-left text-sm sm:text-base text-white/90 font-medium">
                  <p>Masterfully curated events crafted end-to-end</p>
                </div>
              </div>
            </Link>

            {/* Makeup Republic Card */}
            <Link
              ref={card2Ref}
              to="/makeup-republic"
              aria-label="Navigate to Makeup Republic"
              className="group relative block rounded-[40px] transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] active:scale-[0.98] scroll-reveal-right scroll-reveal-delay-2"
              style={{
                background:
                  "linear-gradient(135deg, #0f182e 0%, #04040f 55%, #0d0d2c 100%)",
              }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/50 via-purple-400/50 to-indigo-400/50 rounded-[40px] opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-700" />
              
              <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_top,#2f2f59,transparent_60%)] opacity-70" />
              
              <div className="relative h-full rounded-[40px] p-8 sm:p-12 text-left text-white overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                {/* Icon */}
                <div className="mb-10 inline-flex rounded-2xl border border-white/20 bg-white/10 p-5 text-amber-400 backdrop-blur-xl shadow-lg group-hover:scale-110 group-hover:border-amber-400/50 transition-all duration-500 premium-shine">
                  <Sparkles className="h-7 w-7" />
                </div>

                {/* Content Card */}
                <div className="relative rounded-[32px] border border-white/15 bg-white/8 p-8 sm:p-10 shadow-[0_40px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-700 group-hover:border-white/30 group-hover:bg-white/12 group-hover:shadow-[0_50px_120px_rgba(0,0,0,0.6)] premium-shine">
                  <p className="text-sm font-bold uppercase tracking-[0.4em] text-amber-300/90 mb-2">
                    Makeup Studio
                  </p>
                  <h2 className="mt-3 font-playfair text-4xl sm:text-5xl font-bold mb-4 premium-text-shadow">Makeup Republic</h2>
                  <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed font-medium">
                    Professional makeup artistry and beauty services for every
                    occasion
                  </p>
                  <div className="mt-10 flex items-center gap-3 text-sm font-bold text-amber-300 group-hover:gap-4 transition-all duration-300">
                    <span>Luxury Studio</span>
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Footer Text */}
          <p ref={footerRef} className="mt-16 text-sm sm:text-base text-slate-500 font-medium scroll-reveal scroll-reveal-delay-3">
            Click on any option to explore our services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
