import { useEffect } from "react";

export const useSmoothScroll = () => {
  useEffect(() => {
    // Enhanced smooth scrolling for all anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement;
      
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Use requestAnimationFrame for smooth scrolling
        const startPosition = window.pageYOffset;
        const distance = offsetPosition - startPosition;
        const duration = 800; // milliseconds
        let start: number | null = null;

        const easeInOutCubic = (t: number): number => {
          return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animateScroll = (currentTime: number) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const progress = Math.min(timeElapsed / duration, 1);
          const ease = easeInOutCubic(progress);

          window.scrollTo({
            top: startPosition + distance * ease,
            behavior: "auto" as ScrollBehavior,
          });

          if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }
    };

    // Use passive event listener for better performance
    document.addEventListener("click", handleClick, { passive: false });

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};

