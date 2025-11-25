import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sowrabha Ravishankar",
    rating: 4,
    date: "5 months ago",
    review:
      "The team was warm and ensured I was comfortable throughout my bridal service. While I felt the timing could have been tighter, I appreciate how receptive they were to my feedback—shows they genuinely care about elevating future experiences.",
    subtitle: "Local Guide · 16 reviews",
  },
  {
    name: "P Chandrashekar",
    rating: 5,
    date: "2 months ago",
    review:
      "Booked Makeup Republic for wedding & event preparation—impeccable grooming for both the bride and family. Super professional, punctual on ceremony day and every look translated beautifully on camera.",
    subtitle: "Services · Wedding & Event Preparation",
  },
  {
    name: "Vaishnavi HR",
    rating: 5,
    date: "2 months ago",
    review:
      "Absolutely loved the patience and fine detailing. From skin prep to the final touch-up, everything felt luxurious and personalised. Couldn’t have asked for a smoother experience.",
    subtitle: "",
  },
  {
    name: "Varsha M. Das",
    rating: 5,
    date: "2 years ago",
    review:
      "Two years later and I still get compliments when people see my wedding album. The airbrush finish, saree drape and jewellery setting were flawless. Makeup Republic genuinely understands timeless beauty.",
    subtitle: "",
  },
];

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden reveal-section"
      data-animate="true"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold gold-gradient mb-6">
            Client Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear what our happy clients have to say
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 card-hover-3d relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/90 mb-6 leading-relaxed line-clamp-6">
                {review.review}
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground mb-1">{review.name}</p>
                {review.subtitle && <p className="text-xs uppercase tracking-[0.3em] text-primary mb-1">{review.subtitle}</p>}
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-border">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-playfair font-bold gold-gradient mb-2">500+</div>
            <p className="text-muted-foreground">Happy Brides</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-playfair font-bold gold-gradient mb-2">8+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-playfair font-bold gold-gradient mb-2">100+</div>
            <p className="text-muted-foreground">Students Trained</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-playfair font-bold gold-gradient mb-2">5.0</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
