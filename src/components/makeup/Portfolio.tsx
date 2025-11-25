import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

// Import all portfolio images
import portfolio01 from "@/assets/portfolio images/portfolio-01.jpg";
import portfolio02 from "@/assets/portfolio images/portfolio-02.jpg";
import portfolio03 from "@/assets/portfolio images/portfolio-03.jpg";
import portfolio04 from "@/assets/portfolio images/portfolio-04.jpg";
import portfolio05 from "@/assets/portfolio images/portfolio-05.jpg";
import portfolio06 from "@/assets/portfolio images/portfolio-06.jpg";
import portfolio07 from "@/assets/portfolio images/portfolio-07.jpg";
import portfolio08 from "@/assets/portfolio images/portfolio-08.jpg";
import portfolio09 from "@/assets/portfolio images/portfolio-09.jpg";
import portfolio10 from "@/assets/portfolio images/portfolio-10.jpg";
import portfolio11 from "@/assets/portfolio images/portfolio-11.jpg";
import portfolio12 from "@/assets/portfolio images/portfolio-12.jpg";
import portfolio13 from "@/assets/portfolio images/portfolio-13.jpg";
import portfolio14 from "@/assets/portfolio images/portfolio-14.jpg";
import portfolio15 from "@/assets/portfolio images/portfolio-15.jpg";
import portfolio16 from "@/assets/portfolio images/portfolio-16.jpg";
import portfolio17 from "@/assets/portfolio images/portfolio-17.jpg";
import portfolio18 from "@/assets/portfolio images/portfolio-18.jpg";
import portfolio19 from "@/assets/portfolio images/portfolio-19.jpg";
import portfolio20 from "@/assets/portfolio images/portfolio-20.jpg";
import portfolio21 from "@/assets/portfolio images/portfolio-21.jpg";
import portfolio22 from "@/assets/portfolio images/portfolio-22.jpg";
import portfolio23 from "@/assets/portfolio images/portfolio-23.jpg";
import portfolio24 from "@/assets/portfolio images/portfolio-24.jpg";
import portfolio25 from "@/assets/portfolio images/portfolio-25.jpg";
import rck02067 from "@/assets/portfolio images/rck02067.jpg";
import rck02068 from "@/assets/portfolio images/rck02068.jpg";
import rck02069 from "@/assets/portfolio images/rck02069.jpg";
import rck02070 from "@/assets/portfolio images/RCK02070.JPG";
import rck02071 from "@/assets/portfolio images/rck02071.jpg";
import rck02072 from "@/assets/portfolio images/rck02072.jpg";
import rck02073 from "@/assets/portfolio images/rck02073.jpg";
import rck02074 from "@/assets/portfolio images/rck02074.jpg";
import rck02075 from "@/assets/portfolio images/rck02075.jpg";
import rck02076 from "@/assets/portfolio images/rck02076.jpg";
import rck02077 from "@/assets/portfolio images/rck02077.jpg";
import rck02078 from "@/assets/portfolio images/rck02078.jpg";
import rck02079 from "@/assets/portfolio images/rck02079.jpg";
import rck02080 from "@/assets/portfolio images/rck02080.jpg";
import rck02081 from "@/assets/portfolio images/rck02081.jpg";
import rck02086 from "@/assets/portfolio images/RCK02086.JPG";
import rck02123 from "@/assets/portfolio images/RCK02123.JPG";
import rck02139 from "@/assets/portfolio images/RCK02139.JPG";
import rck02144 from "@/assets/portfolio images/RCK02144.JPG";
import rck02588 from "@/assets/portfolio images/RCK02588.JPG";
import rck02595 from "@/assets/portfolio images/RCK02595.JPG";
import rck02600 from "@/assets/portfolio images/RCK02600.JPG";
import rck02608 from "@/assets/portfolio images/RCK02608.JPG";
import rck02658 from "@/assets/portfolio images/RCK02658.JPG";
import rck03045 from "@/assets/portfolio images/RCK03045.JPG";
import rck03047 from "@/assets/portfolio images/RCK03047.JPG";
import rck03051 from "@/assets/portfolio images/RCK03051.JPG";
import rck03106 from "@/assets/portfolio images/RCK03106.JPG";
import rck03148 from "@/assets/portfolio images/RCK03148.JPG";
import rck07657 from "@/assets/portfolio images/RCK07657.JPG";
import rck07665 from "@/assets/portfolio images/RCK07665.JPG";
import rck07669 from "@/assets/portfolio images/RCK07669.JPG";
import rck07682 from "@/assets/portfolio images/RCK07682.JPG";
import rck07690 from "@/assets/portfolio images/RCK07690.JPG";
import rck07691 from "@/assets/portfolio images/RCK07691.JPG";
import rck07693 from "@/assets/portfolio images/RCK07693.JPG";
import rck07701 from "@/assets/portfolio images/RCK07701.JPG";
import rck07737 from "@/assets/portfolio images/RCK07737.JPG";
import rck07744 from "@/assets/portfolio images/RCK07744.JPG";
import rck07751 from "@/assets/portfolio images/RCK07751.JPG";
import rck07753 from "@/assets/portfolio images/RCK07753.JPG";
import rck07754 from "@/assets/portfolio images/RCK07754.JPG";
import rck07756 from "@/assets/portfolio images/RCK07756.JPG";
import rck07795 from "@/assets/portfolio images/RCK07795.JPG";
import rck07821 from "@/assets/portfolio images/RCK07821.JPG";
import rck07836 from "@/assets/portfolio images/RCK07836.JPG";
import rck07846 from "@/assets/portfolio images/RCK07846.JPG";
import rck07860 from "@/assets/portfolio images/RCK07860.JPG";
import rck07862 from "@/assets/portfolio images/RCK07862.JPG";
import rck07916 from "@/assets/portfolio images/RCK07916.JPG";
import rck07941 from "@/assets/portfolio images/RCK07941.JPG";
import rck07951 from "@/assets/portfolio images/RCK07951.JPG";
import rck07972 from "@/assets/portfolio images/RCK07972.JPG";
import rck07987 from "@/assets/portfolio images/RCK07987.JPG";
import rck07997 from "@/assets/portfolio images/RCK07997.JPG";
import rck07998 from "@/assets/portfolio images/RCK07998.JPG";
import rck08004 from "@/assets/portfolio images/RCK08004.JPG";
import rck08033 from "@/assets/portfolio images/RCK08033.JPG";

type PortfolioImage = {
  id: string;
  src: string;
  alt: string;
};

// All portfolio images
const allPortfolioImages: PortfolioImage[] = [
  { id: "portfolio01", src: portfolio01, alt: "Bridal makeup transformation" },
  { id: "portfolio02", src: portfolio02, alt: "Bridal makeup transformation" },
  { id: "portfolio03", src: portfolio03, alt: "Bridal makeup transformation" },
  { id: "portfolio04", src: portfolio04, alt: "Bridal makeup transformation" },
  { id: "portfolio05", src: portfolio05, alt: "Bridal makeup transformation" },
  { id: "portfolio06", src: portfolio06, alt: "Bridal makeup transformation" },
  { id: "portfolio07", src: portfolio07, alt: "Bridal makeup transformation" },
  { id: "portfolio08", src: portfolio08, alt: "Bridal makeup transformation" },
  { id: "portfolio09", src: portfolio09, alt: "Bridal makeup transformation" },
  { id: "portfolio10", src: portfolio10, alt: "Bridal makeup transformation" },
  { id: "portfolio11", src: portfolio11, alt: "Bridal makeup transformation" },
  { id: "portfolio12", src: portfolio12, alt: "Bridal makeup transformation" },
  { id: "portfolio13", src: portfolio13, alt: "Bridal makeup transformation" },
  { id: "portfolio14", src: portfolio14, alt: "Bridal makeup transformation" },
  { id: "portfolio15", src: portfolio15, alt: "Bridal makeup transformation" },
  { id: "portfolio16", src: portfolio16, alt: "Bridal makeup transformation" },
  { id: "portfolio17", src: portfolio17, alt: "Bridal makeup transformation" },
  { id: "portfolio18", src: portfolio18, alt: "Bridal makeup transformation" },
  { id: "portfolio19", src: portfolio19, alt: "Bridal makeup transformation" },
  { id: "portfolio20", src: portfolio20, alt: "Bridal makeup transformation" },
  { id: "portfolio21", src: portfolio21, alt: "Bridal makeup transformation" },
  { id: "portfolio22", src: portfolio22, alt: "Bridal makeup transformation" },
  { id: "portfolio23", src: portfolio23, alt: "Bridal makeup transformation" },
  { id: "portfolio24", src: portfolio24, alt: "Bridal makeup transformation" },
  { id: "portfolio25", src: portfolio25, alt: "Bridal makeup transformation" },
  { id: "rck02067", src: rck02067, alt: "Bridal makeup transformation" },
  { id: "rck02068", src: rck02068, alt: "Bridal makeup transformation" },
  { id: "rck02069", src: rck02069, alt: "Bridal makeup transformation" },
  { id: "rck02070", src: rck02070, alt: "Bridal makeup transformation" },
  { id: "rck02071", src: rck02071, alt: "Bridal makeup transformation" },
  { id: "rck02072", src: rck02072, alt: "Bridal makeup transformation" },
  { id: "rck02073", src: rck02073, alt: "Bridal makeup transformation" },
  { id: "rck02074", src: rck02074, alt: "Bridal makeup transformation" },
  { id: "rck02075", src: rck02075, alt: "Bridal makeup transformation" },
  { id: "rck02076", src: rck02076, alt: "Bridal makeup transformation" },
  { id: "rck02077", src: rck02077, alt: "Bridal makeup transformation" },
  { id: "rck02078", src: rck02078, alt: "Bridal makeup transformation" },
  { id: "rck02079", src: rck02079, alt: "Bridal makeup transformation" },
  { id: "rck02080", src: rck02080, alt: "Bridal makeup transformation" },
  { id: "rck02081", src: rck02081, alt: "Bridal makeup transformation" },
  { id: "rck02086", src: rck02086, alt: "Bridal makeup transformation" },
  { id: "rck02123", src: rck02123, alt: "Bridal makeup transformation" },
  { id: "rck02139", src: rck02139, alt: "Bridal makeup transformation" },
  { id: "rck02144", src: rck02144, alt: "Bridal makeup transformation" },
  { id: "rck02588", src: rck02588, alt: "Bridal makeup transformation" },
  { id: "rck02595", src: rck02595, alt: "Bridal makeup transformation" },
  { id: "rck02600", src: rck02600, alt: "Bridal makeup transformation" },
  { id: "rck02608", src: rck02608, alt: "Bridal makeup transformation" },
  { id: "rck02658", src: rck02658, alt: "Bridal makeup transformation" },
  { id: "rck03045", src: rck03045, alt: "Bridal makeup transformation" },
  { id: "rck03047", src: rck03047, alt: "Bridal makeup transformation" },
  { id: "rck03051", src: rck03051, alt: "Bridal makeup transformation" },
  { id: "rck03106", src: rck03106, alt: "Bridal makeup transformation" },
  { id: "rck03148", src: rck03148, alt: "Bridal makeup transformation" },
  { id: "rck07657", src: rck07657, alt: "Bridal makeup transformation" },
  { id: "rck07665", src: rck07665, alt: "Bridal makeup transformation" },
  { id: "rck07669", src: rck07669, alt: "Bridal makeup transformation" },
  { id: "rck07682", src: rck07682, alt: "Bridal makeup transformation" },
  { id: "rck07690", src: rck07690, alt: "Bridal makeup transformation" },
  { id: "rck07691", src: rck07691, alt: "Bridal makeup transformation" },
  { id: "rck07693", src: rck07693, alt: "Bridal makeup transformation" },
  { id: "rck07701", src: rck07701, alt: "Bridal makeup transformation" },
  { id: "rck07737", src: rck07737, alt: "Bridal makeup transformation" },
  { id: "rck07744", src: rck07744, alt: "Bridal makeup transformation" },
  { id: "rck07751", src: rck07751, alt: "Bridal makeup transformation" },
  { id: "rck07753", src: rck07753, alt: "Bridal makeup transformation" },
  { id: "rck07754", src: rck07754, alt: "Bridal makeup transformation" },
  { id: "rck07756", src: rck07756, alt: "Bridal makeup transformation" },
  { id: "rck07795", src: rck07795, alt: "Bridal makeup transformation" },
  { id: "rck07821", src: rck07821, alt: "Bridal makeup transformation" },
  { id: "rck07836", src: rck07836, alt: "Bridal makeup transformation" },
  { id: "rck07846", src: rck07846, alt: "Bridal makeup transformation" },
  { id: "rck07860", src: rck07860, alt: "Bridal makeup transformation" },
  { id: "rck07862", src: rck07862, alt: "Bridal makeup transformation" },
  { id: "rck07916", src: rck07916, alt: "Bridal makeup transformation" },
  { id: "rck07941", src: rck07941, alt: "Bridal makeup transformation" },
  { id: "rck07951", src: rck07951, alt: "Bridal makeup transformation" },
  { id: "rck07972", src: rck07972, alt: "Bridal makeup transformation" },
  { id: "rck07987", src: rck07987, alt: "Bridal makeup transformation" },
  { id: "rck07997", src: rck07997, alt: "Bridal makeup transformation" },
  { id: "rck07998", src: rck07998, alt: "Bridal makeup transformation" },
  { id: "rck08004", src: rck08004, alt: "Bridal makeup transformation" },
  { id: "rck08033", src: rck08033, alt: "Bridal makeup transformation" },
];

const INITIAL_VISIBLE = 12;
const LOAD_BATCH = 12;

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const scrollLockRef = useRef(0);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [lightboxAnimating, setLightboxAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const lightboxImageRef = useRef<HTMLImageElement | null>(null);

  const visibleImages = useMemo(() => allPortfolioImages.slice(0, visibleCount), [visibleCount]);
  const hasMoreImages = visibleCount < allPortfolioImages.length;

  const currentImageIndex = useMemo(() => {
    if (!selectedImage) return -1;
    return allPortfolioImages.findIndex((img) => img.id === selectedImage.id);
  }, [selectedImage]);

  const handleImageClick = useCallback((image: PortfolioImage, e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      if ((e.nativeEvent as any)?.stopImmediatePropagation) {
        (e.nativeEvent as any).stopImmediatePropagation();
      }
    }
    setSelectedImage(image);
    setImageLoaded(false);
    setLightboxAnimating(false);
  }, []);

  const handleCloseLightbox = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      if ((e.nativeEvent as any)?.stopImmediatePropagation) {
        (e.nativeEvent as any).stopImmediatePropagation();
      }
    }
    setLightboxAnimating(true);
    setTimeout(() => {
      setSelectedImage(null);
      setLightboxAnimating(false);
      setImageLoaded(false);
    }, 200);
  }, []);

  const handlePrevious = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (currentImageIndex > 0 && !lightboxAnimating) {
      setImageLoaded(false);
      setSelectedImage(allPortfolioImages[currentImageIndex - 1]);
    }
  }, [currentImageIndex, lightboxAnimating]);

  const handleNext = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (currentImageIndex < allPortfolioImages.length - 1 && !lightboxAnimating) {
      setImageLoaded(false);
      setSelectedImage(allPortfolioImages[currentImageIndex + 1]);
    }
  }, [currentImageIndex, lightboxAnimating]);

  // Touch handlers for swipe navigation
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swipe left - next image
        handleNext();
      } else {
        // Swipe right - previous image
        handlePrevious();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  }, [handleNext, handlePrevious]);

  // Prevent body scroll when lightbox is open and handle keyboard navigation
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        handleCloseLightbox();
      }
    };

      const handleArrowKeys = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
        e.stopPropagation();
        handlePrevious();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
        e.stopPropagation();
        handleNext();
      }
    };

    if (selectedImage) {
      scrollLockRef.current = window.scrollY;
      document.body.classList.add("lightbox-open");
      document.body.style.overflow = "hidden";

      document.addEventListener("keydown", handleEscape, { passive: false });
      document.addEventListener("keydown", handleArrowKeys, { passive: false });
    } else {
      document.body.classList.remove("lightbox-open");
        document.body.style.overflow = "";
        window.scrollTo(0, scrollLockRef.current);
    }

    return () => {
        document.removeEventListener("keydown", handleEscape);
        document.removeEventListener("keydown", handleArrowKeys);
    };
  }, [selectedImage, handleCloseLightbox, handlePrevious, handleNext]);

  return (
    <section
      id="portfolio"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden reveal-section"
      data-animate="true"
    >
      <div className="absolute -top-32 right-0 w-80 h-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-32 left-0 w-80 h-80 rounded-full bg-primary/15 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold gold-gradient">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of stunning makeup transformations
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {visibleImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if ((e.nativeEvent as any)?.stopImmediatePropagation) {
                  (e.nativeEvent as any).stopImmediatePropagation();
                }
                handleImageClick(image, e);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                  handleImageClick(image, e);
                }
              }}
            >
              <div className="aspect-square overflow-hidden bg-gray-900">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-110"
                  loading={index < 12 ? "eager" : "lazy"}
                  draggable={false}
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreImages && (
          <div className="text-center mt-12">
            <button
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary/40 bg-black/30 text-white font-semibold tracking-wide hover:bg-black/60 hover:border-primary/60 hover:scale-105 transition-all duration-300 ease-out shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
              onClick={() =>
                setVisibleCount((prev) => Math.min(prev + LOAD_BATCH, allPortfolioImages.length))
              }
            >
              Load More Photos
              <span className="text-sm text-muted-foreground">
                ({visibleCount}/{allPortfolioImages.length})
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Premium Lightbox Viewer */}
        {selectedImage && (
          <div 
          className={`lightbox-overlay ${lightboxAnimating ? "lightbox-closing" : "lightbox-opening"}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleCloseLightbox(e);
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10001,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          >
            {/* Close Button */}
            <button
            className="lightbox-close"
            onClick={handleCloseLightbox}
            aria-label="Close lightbox"
            >
            <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

          {/* Previous Button */}
            {currentImageIndex > 0 && (
              <button
              className="lightbox-nav lightbox-nav-prev"
                onClick={handlePrevious}
                aria-label="Previous image"
              >
              <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            )}

          {/* Next Button */}
          {currentImageIndex < allPortfolioImages.length - 1 && (
              <button
              className="lightbox-nav lightbox-nav-next"
                onClick={handleNext}
                aria-label="Next image"
              >
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            )}

            {/* Image Container */}
            <div
            className="lightbox-image-container"
              onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {!imageLoaded && (
              <div className="lightbox-loader">
                <div className="lightbox-spinner"></div>
              </div>
            )}
            <img
              ref={lightboxImageRef}
                src={selectedImage.src}
                alt={selectedImage.alt}
              className={`lightbox-image ${imageLoaded ? "lightbox-image-loaded" : ""}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
              draggable={false}
              style={{
                maxWidth: 'calc(100vw - 2rem)',
                maxHeight: 'calc(100vh - 2rem)',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                objectPosition: 'center',
                margin: 'auto',
                display: 'block'
              }}
            />
            </div>

            {/* Image Counter */}
          <div className="lightbox-counter">
            {currentImageIndex + 1} / {allPortfolioImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
