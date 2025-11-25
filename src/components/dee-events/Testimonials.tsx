import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialsProps {
  reduceMotion: boolean;
}

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    event: "Wedding",
    text: "The plate decor was absolutely stunning! Every detail was perfect and added so much elegance to our wedding. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    event: "Engagement",
    text: "Mysore Plate Decor made our engagement ceremony truly special. The traditional designs were beautiful and the service was excellent.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anita Reddy",
    event: "Half-Saree",
    text: "They understood exactly what we wanted and delivered beyond expectations. The plates were handcrafted with such care and attention to detail.",
    rating: 5,
  },
  {
    id: 4,
    name: "Suresh Nair",
    event: "Babyshower",
    text: "Perfect for our babyshower! The plates were adorable and the setup was done so professionally. Thank you for making our day special!",
    rating: 5,
  },
];

const Testimonials = ({ reduceMotion }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!reduceMotion) {
        setIsFlipping(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
          setIsFlipping(false);
        }, 300);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  const goToPrevious = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsFlipping(false);
    }, 300);
  };

  const goToNext = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsFlipping(false);
    }, 300);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FFEFE6] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-[#2C1B1B] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#2C1B1B]/70 max-w-2xl mx-auto">
            Real stories from real celebrations
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card with 3D Flip */}
          <div
            className="relative h-96"
            style={{ perspective: "1000px" }}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 ${
                isFlipping ? "flip-card" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="absolute inset-0 bg-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div>
                  <Quote className="w-12 h-12 text-[#D99A4A] mb-4 opacity-50" />
                  <p className="text-xl text-[#2C1B1B] mb-6 leading-relaxed">
                    "{currentTestimonial.text}"
                  </p>
                </div>
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#D99A4A] text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="font-semibold text-[#2C1B1B]">{currentTestimonial.name}</p>
                  <p className="text-sm text-[#2C1B1B]/60">{currentTestimonial.event} Ceremony</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#2C1B1B]" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#2C1B1B]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsFlipping(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsFlipping(false);
                  }, 300);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#D99A4A] w-8"
                    : "bg-[#D99A4A]/30 hover:bg-[#D99A4A]/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

