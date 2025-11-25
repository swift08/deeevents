/**
 * Dee Events → Mysore Plate Decor
 * Production-ready page with 3D animations, parallax effects, and interactive elements
 * 
 * DEPLOYMENT TIPS:
 * - Replace +91XXXXXXXXXX with actual WhatsApp number in all components
 * - Set window.__DEEEVENTS_REDUCE_3D = true to disable heavy animations on low-end devices
 * - Update /api/book endpoint to handle form submissions
 * - Add actual portfolio images to /assets/dee events/portfolio images/
 * - Configure structured data with actual business information
 */

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/dee-events/Navbar";
import Hero from "@/components/dee-events/Hero";
import About from "@/components/dee-events/About";
import Services from "@/components/dee-events/Services";
import Portfolio from "@/components/dee-events/Portfolio";
import Timeline from "@/components/dee-events/Timeline";
import Testimonials from "@/components/dee-events/Testimonials";
import Contact from "@/components/dee-events/Contact";
import Footer from "@/components/dee-events/Footer";
import WhatsAppWidget from "@/components/dee-events/WhatsAppWidget";
import PlateBuilder from "@/components/dee-events/PlateBuilder";

// Global animation control
declare global {
  interface Window {
    __DEEEVENTS_REDUCE_3D?: boolean;
  }
}

const DeeEvents = () => {
  const [showPlateBuilder, setShowPlateBuilder] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const forceReduce = window.__DEEEVENTS_REDUCE_3D === true;
    setReduceMotion(prefersReducedMotion || forceReduce);

    // Handle scroll performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mysore Plate Decor",
    "description": "Custom traditional plate decor for Babyshowers, Engagements, Half-Saree, Weddings, Naming & Thread ceremonies",
    "url": window.location.origin,
    "telephone": "+918197963763",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mysuru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    },
    "priceRange": "$$",
    "image": `${window.location.origin}/assets/dee-events/logo.png`
  };

  return (
    <>
      <Helmet>
        <title>Dee Events | Custom Traditional Plate Decor for Ceremonies</title>
        <meta
          name="description"
          content="Handcrafted heritage plate decor for Babyshowers, Engagements, Half-Saree, Weddings, Naming & Thread ceremonies. Stage-ready plates crafted with tradition."
        />
        <meta property="og:title" content="Dee Events | Custom Traditional Plate Decor" />
        <meta
          property="og:description"
          content="Handcrafted heritage. Stage-ready plates. Custom traditional plate decor for all your special ceremonies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className={`dee-events-page ${reduceMotion ? "reduce-motion" : ""}`}>
        <Navbar />
        <main className="pt-20 md:pt-24">
          <Hero reduceMotion={reduceMotion} />
          <About />
          <Services reduceMotion={reduceMotion} />
          <Portfolio reduceMotion={reduceMotion} />
          <Timeline reduceMotion={reduceMotion} />
          <Testimonials reduceMotion={reduceMotion} />
          <Contact />
        </main>
        <Footer />
        <WhatsAppWidget />
        {showPlateBuilder && <PlateBuilder onClose={() => setShowPlateBuilder(false)} />}
      </div>
    </>
  );
};

export default DeeEvents;

