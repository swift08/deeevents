import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    // Use requestAnimationFrame for smooth updates
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-[9999] origin-left transition-transform duration-150 ease-out"
      style={{
        transform: `scaleX(${scrollProgress / 100})`,
        transformOrigin: "left",
      }}
    >
      <div className="h-full w-full bg-gradient-to-r from-amber-400 via-amber-500 via-pink-500 to-amber-400 bg-[length:200%_100%] animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />
    </div>
  );
};

export default ScrollProgress;

