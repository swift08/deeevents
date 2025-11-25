import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { X, ArrowLeft, ArrowRight, Volume2, VolumeX } from "lucide-react";

// Import portfolio videos
import portfolioVideo1 from "@/assets/portfolio video/C5443.mp4";
import portfolioVideo2 from "@/assets/portfolio video/C5444.mp4";

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
  const [imagePosition, setImagePosition] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [previewImage, setPreviewImage] = useState<{ image: PortfolioImage; position: { x: number; y: number; width: number; height: number } } | null>(null);
  const pressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isPressingRef = useRef(false);
  
  // Video state and refs
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const [videoAudio, setVideoAudio] = useState<{ [key: string]: boolean }>({
    video1: false,
    video2: false,
  });

  const portfolioVideos = [
    { 
      id: "video1", 
      title: "Portfolio Showreel 1", 
      src: portfolioVideo1,
      aspectRatio: "9/16", // Instagram Reel ratio (vertical)
      caption: "Transformations that speak volumes • Bridal artistry redefined",
      sideQuotes: [
        "Where beauty meets",
        "artistry",
        "500+ brides",
        "transformed"
      ],
      decorativeText: "✨"
    },
    { 
      id: "video2", 
      title: "Portfolio Showreel 2", 
      src: portfolioVideo2,
      aspectRatio: "16/9", // YouTube ratio (horizontal)
      caption: "Every brushstroke tells a story • Crafting perfection, one look at a time",
      sideQuotes: [
        "Crafting",
        "perfection",
        "one look",
        "at a time"
      ],
      decorativeText: "💎"
    },
  ];

  const handleSoundToggle = useCallback((videoId: string) => {
    setVideoAudio((prev) => {
      const newState = { ...prev, [videoId]: !prev[videoId] };
      const video = videoRefs.current[videoId];
      if (video) {
        video.muted = !newState[videoId];
      }
      return newState;
    });
  }, []);

  const visibleImages = useMemo(() => allPortfolioImages.slice(0, visibleCount), [visibleCount]);
  const hasMoreImages = visibleCount < allPortfolioImages.length;

  const currentImageIndex = useMemo(() => {
    if (!selectedImage) return -1;
    return allPortfolioImages.findIndex((img) => img.id === selectedImage.id);
  }, [selectedImage]);

  const handleImagePressStart = useCallback((image: PortfolioImage, e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isPressingRef.current = true;
    
    // Get the pressed image container position
    const target = e.currentTarget as HTMLElement;
    if (target) {
      const rect = target.getBoundingClientRect();
      const imgElement = target.querySelector('img');
      if (imgElement) {
        const imgRect = imgElement.getBoundingClientRect();
        const position = {
          x: imgRect.left + imgRect.width / 2,
          y: imgRect.top + imgRect.height / 2,
          width: imgRect.width,
          height: imgRect.height
        };
        
        // Show preview popup immediately
        setPreviewImage({ image, position });
        
        // After 1-2 seconds, open fullscreen
        pressTimerRef.current = setTimeout(() => {
          if (isPressingRef.current) {
            setImagePosition(position);
            setSelectedImage(image);
            setImageLoaded(false);
            setPreviewImage(null);
          }
        }, 1500);
      }
    }
  }, []);

  const handleImagePressEnd = useCallback((image: PortfolioImage, e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (pressTimerRef.current) {
      clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
    
    // If preview is showing, open fullscreen
    if (previewImage && previewImage.image.id === image.id) {
      setImagePosition(previewImage.position);
      setSelectedImage(image);
      setImageLoaded(false);
      setPreviewImage(null);
    }
    
    isPressingRef.current = false;
  }, [previewImage]);

  const handleImageClick = useCallback((image: PortfolioImage, e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Get the clicked image container position
    const target = e?.currentTarget as HTMLElement;
    if (target) {
      const rect = target.getBoundingClientRect();
      const imgElement = target.querySelector('img');
      if (imgElement) {
        const imgRect = imgElement.getBoundingClientRect();
        setImagePosition({
          x: imgRect.left + imgRect.width / 2,
          y: imgRect.top + imgRect.height / 2,
          width: imgRect.width,
          height: imgRect.height
        });
      } else {
        setImagePosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height
        });
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
    
    // Clear any preview
    setPreviewImage(null);
    if (pressTimerRef.current) {
      clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
    isPressingRef.current = false;
    
    setLightboxAnimating(true);
    setTimeout(() => {
      setSelectedImage(null);
      setLightboxAnimating(false);
      setImageLoaded(false);
      setImagePosition(null);
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

  // Handle keyboard navigation (no scroll locking)
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
      document.addEventListener("keydown", handleEscape, { passive: false });
      document.addEventListener("keydown", handleArrowKeys, { passive: false });
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

        {/* Videos Section */}
        {portfolioVideos.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold gold-gradient mb-8 text-center">
              Our Work in Motion
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
              {portfolioVideos.map((video) => {
                const isVertical = video.aspectRatio === "9/16";
                return (
                  <div
                    key={video.id}
                    className="relative bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-300 group p-6"
                  >
                    {/* Video Container with side captions */}
                    <div className={`relative w-full flex ${isVertical ? 'justify-center items-start gap-4' : 'flex-col items-center'} mb-4`}>
                      {/* Left/Right Side Captions for Vertical Video */}
                      {isVertical && (
                        <>
                          {/* Left Side Captions */}
                          <div className="hidden md:flex flex-col justify-center items-start gap-3 pt-8 flex-1 max-w-[120px]">
                            <div className="text-primary text-4xl mb-2 opacity-60">{video.decorativeText}</div>
                            {video.sideQuotes.slice(0, 2).map((quote, idx) => (
                              <div key={idx} className="relative">
                                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary/40"></div>
                                <p className="text-white/70 font-playfair text-sm md:text-base font-medium leading-tight pl-3">
                                  {quote}
                                </p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      
                      {/* Video */}
                      <div className="relative flex-shrink-0">
                        <video
                          ref={(el) => {
                            videoRefs.current[video.id] = el;
                            if (el) {
                              el.loop = true;
                              el.muted = !videoAudio[video.id];
                              void el.play().catch(() => undefined);
                            }
                          }}
                          src={video.src}
                          className={`${isVertical ? 'w-auto h-[500px] max-w-full' : 'w-full h-auto max-h-[400px]'} object-cover rounded-lg`}
                          style={{ 
                            border: "2px solid rgba(212, 175, 55, 0.5)",
                            boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)"
                          }}
                          loop
                          playsInline
                          muted={!videoAudio[video.id]}
                          preload="auto"
                          onLoadedData={(e) => {
                            const element = e.currentTarget;
                            element.loop = true;
                            element.muted = !videoAudio[video.id];
                            void element.play().catch(() => undefined);
                          }}
                          onError={(e) => {
                            // Silent error handling for production
                            const target = e.currentTarget;
                            const container = target.parentElement;
                            if (container && !container.querySelector('.video-error-fallback')) {
                              target.style.display = 'none';
                              const errorDiv = document.createElement('div');
                              errorDiv.className = 'video-error-fallback w-full h-full flex items-center justify-center bg-black/50 rounded-lg border-2 border-primary/30';
                              errorDiv.innerHTML = `
                                <div class="text-center p-4">
                                  <p class="text-white/60 text-sm mb-2">Video unavailable</p>
                                  <p class="text-primary/60 text-xs">${video.title}</p>
                                </div>
                              `;
                              container.appendChild(errorDiv);
                            }
                          }}
                        />
                        {/* Sound Toggle Button */}
                        <div className="absolute top-2 right-2 z-10">
                          <button
                            onClick={() => handleSoundToggle(video.id)}
                            className="w-10 h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm shadow-lg"
                            aria-label={videoAudio[video.id] ? "Mute" : "Unmute"}
                          >
                            {videoAudio[video.id] ? (
                              <Volume2 className="w-5 h-5" />
                            ) : (
                              <VolumeX className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Right Side Captions for Vertical Video */}
                      {isVertical && (
                        <div className="hidden md:flex flex-col justify-center items-end gap-3 pt-8 flex-1 max-w-[120px]">
                          {video.sideQuotes.slice(2, 4).map((quote, idx) => (
                            <div key={idx} className="relative">
                              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary/40"></div>
                              <p className="text-white/70 font-playfair text-sm md:text-base font-medium leading-tight text-right pr-3">
                                {quote}
                              </p>
                            </div>
                          ))}
                          <div className="text-primary text-4xl mt-2 opacity-60">{video.decorativeText}</div>
                        </div>
                      )}

                      {/* Top/Bottom Captions for Horizontal Video */}
                      {!isVertical && (
                        <div className="w-full mt-4 grid grid-cols-2 gap-4">
                          <div className="flex flex-col items-start gap-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-0.5 bg-primary/50"></div>
                              <span className="text-primary text-2xl">{video.decorativeText}</span>
                            </div>
                            {video.sideQuotes.slice(0, 2).map((quote, idx) => (
                              <p key={idx} className="text-white/70 font-playfair text-sm md:text-base font-medium">
                                {quote}
                              </p>
                            ))}
                          </div>
                          <div className="flex flex-col items-end gap-2 text-right">
                            {video.sideQuotes.slice(2, 4).map((quote, idx) => (
                              <p key={idx} className="text-white/70 font-playfair text-sm md:text-base font-medium">
                                {quote}
                              </p>
                            ))}
                            <div className="flex items-center gap-2 justify-end">
                              <span className="text-primary text-2xl">{video.decorativeText}</span>
                              <div className="w-8 h-0.5 bg-primary/50"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Main Caption below video */}
                    <div className="text-center space-y-3 mt-4">
                      <div className="bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/30 inline-block">
                        <p className="text-primary font-semibold text-xs uppercase tracking-wider">
                          {video.title}
                        </p>
                      </div>
                      <p className="text-white/90 font-playfair text-base md:text-lg font-medium leading-relaxed px-4">
                        {video.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {visibleImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
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
              <div className="aspect-square overflow-hidden bg-gray-900 relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-110"
                  loading={index < 12 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  onError={(e) => {
                    // Fallback handling for failed image loads
                    const target = e.currentTarget;
                    target.style.opacity = '0';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.image-error-fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'image-error-fallback absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-400';
                      fallback.innerHTML = '<p class="text-sm">Loading...</p>';
                      parent.appendChild(fallback);
                    }
                  }}
                  onLoad={(e) => {
                    // Remove any error fallback when image loads successfully
                    const parent = e.currentTarget.parentElement;
                    const fallback = parent?.querySelector('.image-error-fallback');
                    if (fallback) {
                      fallback.remove();
                    }
                    e.currentTarget.style.opacity = '1';
                  }}
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

      {/* Preview Popup - Instagram Style */}
        {previewImage && !selectedImage && (
          <>
          <div
            style={{
              position: 'fixed',
              top: previewImage.position.y - (previewImage.position.height * 0.75),
              left: previewImage.position.x - (previewImage.position.width * 0.75),
              width: previewImage.position.width * 1.5,
              height: previewImage.position.height * 1.5,
              zIndex: 10000,
              pointerEvents: 'none',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7)',
              animation: 'previewPop 0.3s ease-out',
              transform: 'scale(1.3)',
              transformOrigin: 'center center'
            }}
          >
            <img
              src={previewImage.image.src}
              alt={previewImage.image.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
          <style>{`
            @keyframes previewPop {
              0% {
                transform: scale(1);
                opacity: 0.7;
              }
              100% {
                transform: scale(1.3);
                opacity: 1;
              }
            }
          `}</style>
          </>
        )}

      {/* Fullscreen Lightbox - Instagram Style */}
        {selectedImage && imagePosition && (
          <>
          <div 
          className="lightbox-overlay"
          onClick={handleCloseLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10001,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-out'
          }}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                zIndex: 10002,
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            {currentImageIndex > 0 && (
              <button
                onClick={handlePrevious}
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10002,
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Button */}
            {currentImageIndex < allPortfolioImages.length - 1 && (
              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10002,
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            )}

            {/* Image - Expands from clicked position */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              onClick={(e) => e.stopPropagation()}
              onLoad={() => setImageLoaded(true)}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                transformOrigin: `${imagePosition.x}px ${imagePosition.y}px`,
                animation: `imageExpand 0.4s cubic-bezier(0.4, 0, 0.2, 1)`
              }}
            />

            {/* Image Counter */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0, 0, 0, 0.6)',
              padding: '8px 16px',
              borderRadius: '20px',
              color: 'white',
              fontSize: '14px'
            }}>
              {currentImageIndex + 1} / {allPortfolioImages.length}
            </div>
          </div>
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes imageExpand {
              from {
                transform: scale(${imagePosition ? Math.min(imagePosition.width / 1728, imagePosition.height / 972) : 1});
                opacity: 0.8;
              }
              to {
                transform: scale(1);
                opacity: 1;
              }
            }
          `}</style>
          </>
        )}
    </section>
  );
};

export default Portfolio;
