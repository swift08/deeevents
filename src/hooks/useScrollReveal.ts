import { useEffect, useRef, RefObject } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

export const useScrollReveal = <T extends HTMLElement = HTMLElement>(
  options: UseScrollRevealOptions = {}
): RefObject<T> => {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    once = true,
    delay = 0,
  } = options;

  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      element.classList.add("revealed");
      return;
    }

    // Check if IntersectionObserver is supported
    if (!("IntersectionObserver" in window)) {
      element.classList.add("revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                entry.target.classList.add("revealed");
              }, delay);
            } else {
              entry.target.classList.add("revealed");
            }

            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("revealed");
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, delay]);

  return elementRef;
};

