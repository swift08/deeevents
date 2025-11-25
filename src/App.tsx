import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Landing from "./pages/Landing";
import MakeupRepublic from "./pages/MakeupRepublic";
import DeeEvents from "./pages/DeeEvents";
import NotFound from "./pages/NotFound";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import PremiumLoader from "./components/PremiumLoader";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

// Component to initialize smooth scroll
const SmoothScrollInit = () => {
  useSmoothScroll();

  useEffect(() => {
    // Optimize scroll performance
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Scroll-based animations can be added here
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <PremiumLoader />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollProgress />
          <ScrollToTop />
          <SmoothScrollInit />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/makeup-republic" element={<MakeupRepublic />} />
            <Route path="/d-events" element={<DeeEvents />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
