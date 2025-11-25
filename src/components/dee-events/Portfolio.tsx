import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { X, Volume2, VolumeX, Sparkles, Quote, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";

function useScrollReveal() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -100px 0px",
      }
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, visible];
}

// Masonry Item Component with fade-in animation
const MasonryItem = ({ 
  image, 
  index, 
  onImageClick 
}: { 
  image: (typeof allImages)[number]; 
  index: number; 
  onImageClick: (image: (typeof allImages)[number], e?: React.MouseEvent | React.KeyboardEvent) => void;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`masonry-item ${isVisible ? "masonry-item-visible" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onImageClick(image, e);
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          onImageClick(image, e);
        }
      }}
      style={{ cursor: 'pointer' }}
    >
      <div className="masonry-item-inner">
        <div className="masonry-image-wrapper">
          <img
            src={image.src}
            alt={image.alt}
            className="masonry-image"
            loading={index < 20 ? "eager" : "lazy"}
            decoding="async"
            style={{ pointerEvents: 'none' }}
          />
        </div>
        <div className="masonry-overlay">
          <div className="masonry-overlay-content">
            <p className="masonry-overlay-label">Premium Detail</p>
            <p className="masonry-overlay-title">{image.alt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Import all portfolio images
import img1 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.17.17 PM.jpeg";
import img2 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.19.51 PM.jpeg";
import img3 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.21.01 PM.jpeg";
import img4 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.22.23 PM.jpeg";
import img5 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.32 PM.jpeg";
import img6 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.32 PM (1).jpeg";
import img7 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.32 PM (2).jpeg";
import img8 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.32 PM (3).jpeg";
import img9 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.32 PM (4).jpeg";
import img10 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.33 PM.jpeg";
import img11 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.34 PM.jpeg";
import img12 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.34 PM (1).jpeg";
import img13 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.34 PM (2).jpeg";
import img14 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.34 PM (3).jpeg";
import img15 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.34 PM (4).jpeg";
import img16 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM.jpeg";
import img17 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (1).jpeg";
import img18 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (2).jpeg";
import img19 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (3).jpeg";
import img20 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (4).jpeg";
import img21 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (5).jpeg";
import img22 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (6).jpeg";
import img23 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (7).jpeg";
import img24 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (8).jpeg";
import img25 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (9).jpeg";
import img26 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (10).jpeg";
import img27 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (11).jpeg";
import img28 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (12).jpeg";
import img29 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (13).jpeg";
import img30 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (14).jpeg";
import img31 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (15).jpeg";
import img32 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (16).jpeg";
import img33 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (17).jpeg";
import img34 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (18).jpeg";
import img35 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (19).jpeg";
import img36 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (20).jpeg";
import img37 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (21).jpeg";
import img38 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (22).jpeg";
import img39 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (23).jpeg";
import img40 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (24).jpeg";
import img41 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (25).jpeg";
import img42 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.24.35 PM (26).jpeg";
import img43 from "@/assets/dee events/portfolio images/WhatsApp Image 2025-11-19 at 6.25.10 PM.jpeg";

// Import Babyshower images
import bs1 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.34.51 PM.jpeg";
import bs2 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.34.52 PM (1).jpeg";
import bs3 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.34.52 PM (2).jpeg";
import bs4 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.34.52 PM.jpeg";
import bs5 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.34.53 PM (1).jpeg";
import bs6 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.34.53 PM (2).jpeg";
import bs7 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.34.53 PM.jpeg";
import bs8 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.34.54 PM (1).jpeg";
import bs9 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.34.54 PM (2).jpeg";
import bs10 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.34.54 PM (3).jpeg";
import bs11 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.34.54 PM.jpeg";
import bs12 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.37.28 PM (1).jpeg";
import bs13 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.37.28 PM (2).jpeg";
import bs14 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.37.28 PM.jpeg";
import bs15 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.37.29 PM (1).jpeg";
import bs16 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.37.29 PM (2).jpeg";
import bs17 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.37.29 PM.jpeg";
import bs18 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.37.30 PM (1).jpeg";
import bs19 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.37.30 PM (2).jpeg";
import bs20 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.37.30 PM.jpeg";
import bs21 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.37.31 PM (1).jpeg";
import bs22 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 4.37.31 PM.jpeg";
import bs23 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 5.01.29 PM (1).jpeg";
import bs24 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 5.01.29 PM.jpeg";
import bs25 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 5.02.38 PM (1).jpeg";
import bs26 from "@/assets/dee events/baby shower/WhatsApp Image 2025-11-18 at 5.02.38 PM.jpeg";

// Import Engagement images
import eng1 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.27.26 PM (1).jpeg";
import eng2 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.27.26 PM (2).jpeg";
import eng3 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.27.26 PM.jpeg";
import eng4 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.27.27 PM (1).jpeg";
import eng5 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.27.27 PM.jpeg";
import eng6 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.27.28 PM (1).jpeg";
import eng7 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.27.28 PM.jpeg";
import eng8 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.20 PM (1).jpeg";
import eng9 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.20 PM (2).jpeg";
import eng10 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.20 PM (3).jpeg";
import eng11 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.20 PM.jpeg";
import eng12 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.21 PM (1).jpeg";
import eng13 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.21 PM (2).jpeg";
import eng14 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.21 PM (3).jpeg";
import eng15 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.21 PM.jpeg";
import eng16 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.22 PM (1).jpeg";
import eng17 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.22 PM (2).jpeg";
import eng18 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.22 PM.jpeg";
import eng19 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.23 PM (1).jpeg";
import eng20 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.23 PM (2).jpeg";
import eng21 from "@/assets/dee events/engagement/WhatsApp Image 2025-11-18 at 4.31.23 PM.jpeg";

// Import Half Saree ceremony images
import hs1 from "@/assets/dee events/Half saree ceremony/WhatsApp Image 2025-11-25 at 2.27.27 PM.jpeg";
import hs2 from "@/assets/dee events/Half saree ceremony/WhatsApp Image 2025-11-25 at 2.27.28 PM (1).jpeg";
import hs3 from "@/assets/dee events/Half saree ceremony/WhatsApp Image 2025-11-25 at 2.27.28 PM (2).jpeg";
import hs4 from "@/assets/dee events/Half saree ceremony/WhatsApp Image 2025-11-25 at 2.27.28 PM.jpeg";
import hs5 from "@/assets/dee events/Half saree ceremony/WhatsApp Image 2025-11-25 at 2.27.29 PM (1).jpeg";
import hs6 from "@/assets/dee events/Half saree ceremony/WhatsApp Image 2025-11-25 at 2.27.29 PM (2).jpeg";
import hs7 from "@/assets/dee events/Half saree ceremony/WhatsApp Image 2025-11-25 at 2.27.29 PM.jpeg";
import hs8 from "@/assets/dee events/Half saree ceremony/WhatsApp Image 2025-11-25 at 2.27.30 PM (1).jpeg";
import hs9 from "@/assets/dee events/Half saree ceremony/WhatsApp Image 2025-11-25 at 2.27.30 PM (2).jpeg";
import hs10 from "@/assets/dee events/Half saree ceremony/WhatsApp Image 2025-11-25 at 2.27.30 PM.jpeg";
import hs11 from "@/assets/dee events/Half saree ceremony/WhatsApp Image 2025-11-25 at 2.27.31 PM (1).jpeg";
import hs12 from "@/assets/dee events/Half saree ceremony/WhatsApp Image 2025-11-25 at 2.27.31 PM (2).jpeg";
import hs13 from "@/assets/dee events/Half saree ceremony/WhatsApp Image 2025-11-25 at 2.27.31 PM.jpeg";

// Import all videos
import babyShowerVideo from "@/assets/dee events/portfolio videos/baby shower.mp4";
import engagementVideo from "@/assets/dee events/portfolio videos/engagement.mp4";
import halfSareeVideo from "@/assets/dee events/portfolio videos/half saree ceremony.mp4";
import weddingVideo from "@/assets/dee events/portfolio videos/Wedding.mp4";
import kitchenDecorationVideo from "@/assets/dee events/portfolio videos/kitchen decoration.mp4";
import lakshmiSaree1Video from "@/assets/dee events/portfolio videos/Lakshmi saree draping services 1.mp4";
import lakshmiSaree2Video from "@/assets/dee events/portfolio videos/Lakshmi saree draping services 2.mp4";

interface PortfolioProps {
  reduceMotion: boolean;
}

const INITIAL_VISIBLE = 18;
const LOAD_BATCH = 12;

const allPortfolioImages = [
  { id: 1, src: img1, alt: "Traditional plate decor", category: "all" },
  { id: 2, src: img2, alt: "Elegant plate arrangement", category: "all" },
  { id: 3, src: img3, alt: "Custom plate design", category: "all" },
  { id: 4, src: img4, alt: "Heritage plate decor", category: "all" },
  { id: 5, src: img5, alt: "Ceremony plate setup", category: "all" },
  { id: 6, src: img6, alt: "Traditional plate styling", category: "all" },
  { id: 7, src: img7, alt: "Babyshower plate decor", category: "babyshower" },
  { id: 8, src: img8, alt: "Engagement plate decor", category: "engagement" },
  { id: 9, src: img9, alt: "Half-Saree plate decor", category: "halfsaree" },
  { id: 10, src: img10, alt: "Wedding plate decor", category: "wedding" },
  { id: 11, src: img11, alt: "Naming ceremony plate decor", category: "naming" },
  { id: 12, src: img12, alt: "Thread ceremony plate decor", category: "thread" },
  { id: 13, src: img13, alt: "Traditional plate arrangement", category: "all" },
  { id: 14, src: img14, alt: "Elegant plate decor", category: "all" },
  { id: 15, src: img15, alt: "Custom plate design", category: "all" },
  { id: 16, src: img16, alt: "Heritage plate decor", category: "all" },
  { id: 17, src: img17, alt: "Ceremony plate setup", category: "all" },
  { id: 18, src: img18, alt: "Traditional plate styling", category: "all" },
  { id: 19, src: img19, alt: "Beautiful plate arrangement", category: "all" },
  { id: 20, src: img20, alt: "Elegant ceremony decor", category: "all" },
  { id: 21, src: img21, alt: "Traditional styling", category: "all" },
  { id: 22, src: img22, alt: "Custom design", category: "all" },
  { id: 23, src: img23, alt: "Heritage decor", category: "all" },
  { id: 24, src: img24, alt: "Plate setup", category: "all" },
  { id: 25, src: img25, alt: "Ceremony styling", category: "all" },
  { id: 26, src: img26, alt: "Traditional arrangement", category: "all" },
  { id: 27, src: img27, alt: "Elegant decor", category: "all" },
  { id: 28, src: img28, alt: "Custom plate", category: "all" },
  { id: 29, src: img29, alt: "Heritage styling", category: "all" },
  { id: 30, src: img30, alt: "Ceremony decor", category: "all" },
  { id: 31, src: img31, alt: "Traditional design", category: "all" },
  { id: 32, src: img32, alt: "Elegant arrangement", category: "all" },
  { id: 33, src: img33, alt: "Custom styling", category: "all" },
  { id: 34, src: img34, alt: "Heritage plate", category: "all" },
  { id: 35, src: img35, alt: "Ceremony arrangement", category: "all" },
  { id: 36, src: img36, alt: "Traditional decor", category: "all" },
  { id: 37, src: img37, alt: "Elegant design", category: "all" },
  { id: 38, src: img38, alt: "Custom arrangement", category: "all" },
  { id: 39, src: img39, alt: "Heritage styling", category: "all" },
  { id: 40, src: img40, alt: "Ceremony design", category: "all" },
  { id: 41, src: img41, alt: "Traditional arrangement", category: "all" },
  { id: 42, src: img42, alt: "Elegant styling", category: "all" },
  { id: 43, src: img43, alt: "Custom decor", category: "all" },
];

const babyshowerImagesArray = [
  { id: "bs1", src: bs1, alt: "Babyshower plate decor" },
  { id: "bs2", src: bs2, alt: "Babyshower arrangement" },
  { id: "bs3", src: bs3, alt: "Babyshower styling" },
  { id: "bs4", src: bs4, alt: "Babyshower decor" },
  { id: "bs5", src: bs5, alt: "Babyshower plate design" },
  { id: "bs6", src: bs6, alt: "Babyshower ceremony" },
  { id: "bs7", src: bs7, alt: "Babyshower setup" },
  { id: "bs8", src: bs8, alt: "Babyshower arrangement" },
  { id: "bs9", src: bs9, alt: "Babyshower decor" },
  { id: "bs10", src: bs10, alt: "Babyshower styling" },
  { id: "bs11", src: bs11, alt: "Babyshower plate" },
  { id: "bs12", src: bs12, alt: "Babyshower design" },
  { id: "bs13", src: bs13, alt: "Babyshower ceremony" },
  { id: "bs14", src: bs14, alt: "Babyshower setup" },
  { id: "bs15", src: bs15, alt: "Babyshower arrangement" },
  { id: "bs16", src: bs16, alt: "Babyshower decor" },
  { id: "bs17", src: bs17, alt: "Babyshower styling" },
  { id: "bs18", src: bs18, alt: "Babyshower plate" },
  { id: "bs19", src: bs19, alt: "Babyshower design" },
  { id: "bs20", src: bs20, alt: "Babyshower ceremony" },
  { id: "bs21", src: bs21, alt: "Babyshower setup" },
  { id: "bs22", src: bs22, alt: "Babyshower arrangement" },
  { id: "bs23", src: bs23, alt: "Babyshower decor" },
  { id: "bs24", src: bs24, alt: "Babyshower styling" },
  { id: "bs25", src: bs25, alt: "Babyshower plate" },
  { id: "bs26", src: bs26, alt: "Babyshower design" },
];

const engagementImagesArray = [
  { id: "eng1", src: eng1, alt: "Engagement plate decor" },
  { id: "eng2", src: eng2, alt: "Engagement arrangement" },
  { id: "eng3", src: eng3, alt: "Engagement styling" },
  { id: "eng4", src: eng4, alt: "Engagement decor" },
  { id: "eng5", src: eng5, alt: "Engagement plate design" },
  { id: "eng6", src: eng6, alt: "Engagement ceremony" },
  { id: "eng7", src: eng7, alt: "Engagement setup" },
  { id: "eng8", src: eng8, alt: "Engagement arrangement" },
  { id: "eng9", src: eng9, alt: "Engagement decor" },
  { id: "eng10", src: eng10, alt: "Engagement styling" },
  { id: "eng11", src: eng11, alt: "Engagement plate" },
  { id: "eng12", src: eng12, alt: "Engagement design" },
  { id: "eng13", src: eng13, alt: "Engagement ceremony" },
  { id: "eng14", src: eng14, alt: "Engagement setup" },
  { id: "eng15", src: eng15, alt: "Engagement arrangement" },
  { id: "eng16", src: eng16, alt: "Engagement decor" },
  { id: "eng17", src: eng17, alt: "Engagement styling" },
  { id: "eng18", src: eng18, alt: "Engagement plate" },
  { id: "eng19", src: eng19, alt: "Engagement design" },
  { id: "eng20", src: eng20, alt: "Engagement ceremony" },
  { id: "eng21", src: eng21, alt: "Engagement setup" },
];

const halfSareeImagesArray = [
  { id: "hs1", src: hs1, alt: "Half saree ceremony floral decor" },
  { id: "hs2", src: hs2, alt: "Half saree entrance styling" },
  { id: "hs3", src: hs3, alt: "Half saree stage decor" },
  { id: "hs4", src: hs4, alt: "Traditional half saree setup" },
  { id: "hs5", src: hs5, alt: "Heritage half saree arrangement" },
  { id: "hs6", src: hs6, alt: "Half saree ceremony plates" },
  { id: "hs7", src: hs7, alt: "Vibrant half saree decor" },
  { id: "hs8", src: hs8, alt: "Half saree backdrop styling" },
  { id: "hs9", src: hs9, alt: "Half saree centerpiece design" },
  { id: "hs10", src: hs10, alt: "Custom half saree florals" },
  { id: "hs11", src: hs11, alt: "Half saree hallway decor" },
  { id: "hs12", src: hs12, alt: "Half saree seating styling" },
  { id: "hs13", src: hs13, alt: "Grand half saree ceremony" },
];

const babyshowerImagesWithCategory = babyshowerImagesArray.map((img) => ({ ...img, category: "babyshower" }));
const engagementImagesWithCategory = engagementImagesArray.map((img) => ({ ...img, category: "engagement" }));
const halfSareeImagesWithCategory = halfSareeImagesArray.map((img) => ({ ...img, category: "halfsaree" }));

const allImages = [
  ...allPortfolioImages,
  ...babyshowerImagesWithCategory,
  ...engagementImagesWithCategory,
  ...halfSareeImagesWithCategory,
];

const categories = [
  { id: "all", label: "All" },
  { id: "babyshower", label: "Babyshower" },
  { id: "engagement", label: "Engagement" },
  { id: "halfsaree", label: "Half Saree" },
];

const reelVideos = [
  { id: "babyshower", title: "Babyshower", src: babyShowerVideo },
  { id: "engagement", title: "Engagement", src: engagementVideo },
  { id: "halfsaree", title: "Half Saree", src: halfSareeVideo },
  { id: "kitchen", title: "Kitchen Decoration", src: kitchenDecorationVideo },
  { id: "lakshmi1", title: "Lakshmi Saree Draping 1", src: lakshmiSaree1Video },
  { id: "lakshmi2", title: "Lakshmi Saree Draping 2", src: lakshmiSaree2Video },
];

const Portfolio = ({ reduceMotion }: PortfolioProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<(typeof allImages)[number] | null>(null);
  const scrollLockRef = useRef(0);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [lightboxAnimating, setLightboxAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [videoAudio, setVideoAudio] = useState<Record<string, boolean>>(
    () => Object.fromEntries([...reelVideos, { id: "wedding" }, { id: "halfsaree" }].map((v) => [v.id, false]))
  );
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const lightboxImageRef = useRef<HTMLImageElement | null>(null);
  const imageRefs = useRef<Map<string | number, HTMLDivElement>>(new Map());

  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") return allImages;
    return allImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  const visibleImages = useMemo(() => filteredImages.slice(0, visibleCount), [filteredImages, visibleCount]);
  const hasMoreImages = visibleCount < filteredImages.length;

  const currentImageIndex = useMemo(() => {
    if (!selectedImage) return -1;
    return filteredImages.findIndex((img) => img.id === selectedImage.id);
  }, [selectedImage, filteredImages]);

  const handleImageClick = useCallback((image: (typeof allImages)[number], e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent?.stopImmediatePropagation?.();
    }
    setSelectedImage(image);
    setImageLoaded(false);
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
      // Ensure we stay in portfolio section
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection && scrollLockRef.current > 0) {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: scrollLockRef.current,
            behavior: 'instant'
          });
        });
      }
    }, 200);
  }, []);

  const handlePrevious = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (currentImageIndex > 0 && !lightboxAnimating) {
      setImageLoaded(false);
      setSelectedImage(filteredImages[currentImageIndex - 1]);
    }
  }, [currentImageIndex, filteredImages, lightboxAnimating]);

  const handleNext = useCallback((e?: React.MouseEvent | React.TouchEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (currentImageIndex < filteredImages.length - 1 && !lightboxAnimating) {
      setImageLoaded(false);
      setSelectedImage(filteredImages[currentImageIndex + 1]);
    }
  }, [currentImageIndex, filteredImages, lightboxAnimating]);

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

  const handleSoundToggle = (videoId: string) => {
    setVideoAudio((prev) => {
      const newState: Record<string, boolean> = {};
      const newValue = !prev[videoId];

      Object.keys(prev).forEach((id) => {
        newState[id] = id === videoId ? newValue : false;
      });

      Object.keys(videoRefs.current).forEach((id) => {
        const videoEl = videoRefs.current[id];
        if (videoEl) {
          videoEl.muted = !newState[id];
        }
      });

      return newState;
    });
  };

  useEffect(() => {
    [...reelVideos, { id: "wedding" }, { id: "halfsaree" }].forEach((video) => {
      const videoEl = videoRefs.current[video.id];
      if (videoEl) {
        videoEl.loop = true;
        videoEl.muted = !videoAudio[video.id];
        void videoEl.play().catch(() => undefined);
      }
    });
  }, [videoAudio, reelVideos]);

  useEffect(() => {
    if (selectedImage) {
      const scrollY = window.scrollY;
      scrollLockRef.current = scrollY;
      document.body.classList.add("lightbox-open");
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
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

      document.addEventListener("keydown", handleEscape, { passive: false });
      document.addEventListener("keydown", handleArrowKeys, { passive: false });

      return () => {
        document.body.classList.remove("lightbox-open");
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        // Only restore scroll if we have a valid position
        if (scrollLockRef.current > 0) {
          requestAnimationFrame(() => {
            window.scrollTo({
              top: scrollLockRef.current,
              behavior: 'instant'
            });
          });
        }
        document.removeEventListener("keydown", handleEscape);
        document.removeEventListener("keydown", handleArrowKeys);
      };
    } else {
      document.body.classList.remove("lightbox-open");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    }
  }, [selectedImage, handleCloseLightbox, handlePrevious, handleNext]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFD6D1] via-[#FFE4E1] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-[#2C1B1B] mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-[#2C1B1B]/80 max-w-2xl mx-auto">
            Every plate tells a story of tradition and artistry
          </p>
        </div>

        {/* Videos Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-playfair font-bold text-[#2C1B1B] mb-6 text-center">
            Our Work in Motion
          </h3>

          {/* All Videos in a Row - Preserve Original Aspect Ratios */}
          <div className="mb-6">
            <div className="flex flex-wrap justify-center gap-6">
              {reelVideos.map((video) => (
                <div
                  key={video.id}
                  className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-[#FFB6C1] shadow-xl"
                  style={{ maxWidth: "320px", width: "100%" }}
                >
                  <div className="relative w-full flex items-center justify-center bg-black/20" style={{ minHeight: "400px" }}>
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
                      className="w-full h-auto max-h-[500px] object-contain"
                      loop
                      playsInline
                      muted={!videoAudio[video.id]}
                      onLoadedData={(e) => {
                        const element = e.currentTarget;
                        element.loop = true;
                        element.muted = !videoAudio[video.id];
                        void element.play().catch(() => undefined);
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => handleSoundToggle(video.id)}
                        className="w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
                        aria-label={videoAudio[video.id] ? "Mute" : "Unmute"}
                      >
                        {videoAudio[video.id] ? (
                          <Volume2 className="w-4 h-4" />
                        ) : (
                          <VolumeX className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 16:9 YouTube Videos with Quotes */}
          <div className="space-y-6">
            {/* First 16:9 Video Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Quote */}
              <div className="lg:col-span-2 hidden lg:block">
                <div className="bg-gradient-to-br from-[#FFE4E1] to-[#FFD6D1] rounded-2xl p-6 border-2 border-[#FFB6C1]">
                  <Quote className="w-8 h-8 text-[#FF69B4] mb-4" />
                  <p className="text-[#2C1B1B] font-playfair italic text-lg leading-relaxed">
                    "Every plate carries a story, every arrangement a memory."
                  </p>
                </div>
              </div>

              {/* 16:9 Video - Wedding */}
              <div className="lg:col-span-8">
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-[#FFB6C1] shadow-xl">
                  <div className="relative" style={{ aspectRatio: "16/9" }}>
                    <video
                      ref={(el) => {
                        videoRefs.current.wedding = el;
                        if (el) {
                          el.loop = true;
                          el.muted = !videoAudio.wedding;
                          void el.play().catch(() => undefined);
                        }
                      }}
                      src={weddingVideo}
                      className="w-full h-full object-contain"
                      loop
                      playsInline
                      muted={!videoAudio.wedding}
                      onLoadedData={(e) => {
                        const element = e.currentTarget;
                        element.loop = true;
                        element.muted = !videoAudio.wedding;
                        void element.play().catch(() => undefined);
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => handleSoundToggle("wedding")}
                        className="w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
                        aria-label={videoAudio.wedding ? "Mute" : "Unmute"}
                      >
                        {videoAudio.wedding ? (
                          <Volume2 className="w-5 h-5" />
                        ) : (
                          <VolumeX className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Quote */}
              <div className="lg:col-span-2 hidden lg:block">
                <div className="bg-gradient-to-br from-[#FFE4E1] to-[#FFD6D1] rounded-2xl p-6 border-2 border-[#FFB6C1]">
                  <Quote className="w-8 h-8 text-[#FF69B4] mb-4" />
                  <p className="text-[#2C1B1B] font-playfair italic text-lg leading-relaxed">
                    "Handcrafted heritage, stage-ready plates for your special moments."
                  </p>
                </div>
              </div>
            </div>

            {/* Second 16:9 Video Row - Half Saree */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Quote */}
              <div className="lg:col-span-2 hidden lg:block">
                <div className="bg-gradient-to-br from-[#FFE4E1] to-[#FFD6D1] rounded-2xl p-6 border-2 border-[#FFB6C1]">
                  <Quote className="w-8 h-8 text-[#FF69B4] mb-4" />
                  <p className="text-[#2C1B1B] font-playfair italic text-lg leading-relaxed">
                    "Tradition meets artistry in every ceremonial detail."
                  </p>
                </div>
              </div>

              {/* 16:9 Video - Half Saree */}
              <div className="lg:col-span-8">
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-[#FFB6C1] shadow-xl">
                  <div className="relative" style={{ aspectRatio: "16/9" }}>
                    <video
                      ref={(el) => {
                        videoRefs.current.halfsaree = el;
                        if (el) {
                          el.loop = true;
                          el.muted = !videoAudio.halfsaree;
                          void el.play().catch(() => undefined);
                        }
                      }}
                      src={halfSareeVideo}
                      className="w-full h-full object-contain"
                      loop
                      playsInline
                      muted={!videoAudio.halfsaree}
                      onLoadedData={(e) => {
                        const element = e.currentTarget;
                        element.loop = true;
                        element.muted = !videoAudio.halfsaree;
                        void element.play().catch(() => undefined);
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => handleSoundToggle("halfsaree")}
                        className="w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
                        aria-label={videoAudio.halfsaree ? "Mute" : "Unmute"}
                      >
                        {videoAudio.halfsaree ? (
                          <Volume2 className="w-5 h-5" />
                        ) : (
                          <VolumeX className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Quote */}
              <div className="lg:col-span-2 hidden lg:block">
                <div className="bg-gradient-to-br from-[#FFE4E1] to-[#FFD6D1] rounded-2xl p-6 border-2 border-[#FFB6C1]">
                  <Quote className="w-8 h-8 text-[#FF69B4] mb-4" />
                  <p className="text-[#2C1B1B] font-playfair italic text-lg leading-relaxed">
                    "Celebrating milestones with timeless elegance and grace."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full border text-xs font-semibold tracking-[0.3em] uppercase transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-[#FF69B4] via-[#FF1493] to-[#FF69B4] text-white shadow-[0_15px_40px_rgba(255,105,180,0.4)]"
                  : "bg-white/80 text-[#2C1B1B]/80 border-[#FFB6C1] hover:border-[#FF69B4] hover:text-[#FF69B4]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Premium Masonry Grid */}
        <div className="masonry-grid-premium">
          {visibleImages.map((image, index) => (
            <MasonryItem
              key={image.id}
              image={image}
              index={index}
              onImageClick={handleImageClick}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreImages && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + LOAD_BATCH, filteredImages.length))}
              className="px-8 py-4 bg-gradient-to-r from-[#FF69B4] via-[#FF1493] to-[#FF69B4] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#FF69B4]/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto cta-glow-pop"
            >
              <Sparkles className="w-5 h-5" />
              Load More ({visibleCount}/{filteredImages.length})
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
            inset: 0,
            zIndex: 10001,
            width: '100vw',
            height: '100vh'
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
          {currentImageIndex < filteredImages.length - 1 && (
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
            {currentImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
