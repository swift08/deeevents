import { GraduationCap, Award, BookOpen, Users, Clock, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: Award,
    title: "Professional Bridal Makeup",
    duration: "6 Weeks",
    description: "Master the art of bridal makeup with advanced techniques, color theory, and product knowledge.",
    highlights: ["Traditional & Modern Looks", "Skin Prep & Foundation", "Eye Makeup Mastery"],
  },
  {
    icon: BookOpen,
    title: "HD Makeup Course",
    duration: "4 Weeks",
    description: "Learn high-definition makeup techniques perfect for photography and videography.",
    highlights: ["Camera-Ready Techniques", "Contouring & Highlighting", "Product Selection"],
  },
  {
    icon: GraduationCap,
    title: "Airbrush Makeup",
    duration: "3 Weeks",
    description: "Expert training in airbrush application for flawless, long-lasting makeup.",
    highlights: ["Airbrush Equipment", "Application Techniques", "Troubleshooting"],
  },
  {
    icon: Users,
    title: "Advanced Hairstyling",
    duration: "5 Weeks",
    description: "Comprehensive hairstyling course covering traditional and contemporary styles.",
    highlights: ["Bridal Hairstyles", "Hair Accessories", "Styling Tools Mastery"],
  },
  {
    icon: Clock,
    title: "Makeup Basics",
    duration: "2 Weeks",
    description: "Perfect for beginners to learn fundamental makeup application and techniques.",
    highlights: ["Color Matching", "Basic Tools", "Daily Makeup"],
  },
];

const Academy = () => {
  return (
    <section
      id="academy"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-black-card reveal-section"
      data-animate="true"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-primary font-semibold tracking-wider uppercase">Education</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold gold-gradient mb-6">
            Makeup Academy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry experts and transform your passion into a professional career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 overflow-hidden hover:border-primary transition-all duration-300 card-hover-3d"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-button cta-pop"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Enroll Now
                </Button>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Certification Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 rounded-2xl p-8 md:p-12 text-center">
          <Award className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-playfair font-bold gold-gradient mb-4">
            Get Certified
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            All courses include professional certification upon completion, helping you establish credibility and launch your makeup artistry career.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More About Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Academy;
