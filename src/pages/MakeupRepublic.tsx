import { useEffect } from "react";
import Navbar from "@/components/makeup/Navbar";
import Hero from "@/components/makeup/Hero";
import Services from "@/components/makeup/Services";
import Portfolio from "@/components/makeup/Portfolio";
import Academy from "@/components/makeup/Academy";
import Reviews from "@/components/makeup/Reviews";
import About from "@/components/makeup/About";
import Certifications from "@/components/makeup/Certifications";
import Contact from "@/components/makeup/Contact";
import Footer from "@/components/makeup/Footer";

const MakeupRepublic = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate='true']");

    // Graceful fallback for browsers without IntersectionObserver support
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Ensure sections become visible even if observer hasn't fired yet
    const timeout = window.setTimeout(() => {
      elements.forEach((el) => el.classList.add("is-visible"));
    }, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <Hero />
        <Services />
        <Portfolio />
        <Academy />
        <Reviews />
        <About />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default MakeupRepublic;
