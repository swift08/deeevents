import { Award, Briefcase, Heart, Users } from "lucide-react";
import artistPhoto from "@/assets/artist-photo.jpg";

const achievements = [
  {
    icon: Briefcase,
    title: "8+ Years",
    description: "Professional Experience",
  },
  {
    icon: Users,
    title: "500+",
    description: "Happy Clients",
  },
  {
    icon: Award,
    title: "Multiple",
    description: "Industry Awards",
  },
  {
    icon: Heart,
    title: "100%",
    description: "Client Satisfaction",
  },
];

const About = () => {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-black-card reveal-section" data-animate="true">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold gold-gradient mb-6">
            Meet the Artist
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The creative force behind Makeup Republic's stunning transformations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-primary shadow-[0_0_60px_rgba(212,175,55,0.45)] transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_90px_rgba(212,175,55,0.6)]">
              <img
                src={artistPhoto}
                alt="Deekshitha Raj - Founder & Lead Makeup Artist"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold gold-gradient mb-2">
                Deekshitha Raj
              </h3>
              <p className="text-lg text-primary font-semibold mb-6">
                Founder & Lead Makeup Artist
              </p>
            </div>

            <div className="space-y-3 text-foreground/90 leading-relaxed">
              <p>
                With over 8 years of experience in the beauty industry, Deekshitha Raj has established herself as one of Mysore's most sought-after bridal makeup artists. Her passion for makeup artistry began at a young age, and she has since honed her skills through continuous learning and practice.
              </p>
              <p>
                Deekshitha specializes in bridal makeup, HD makeup, and airbrush techniques. Her approach combines traditional Indian beauty with contemporary trends, creating looks that are both timeless and modern. She believes that every bride deserves to feel confident and beautiful on their special day.
              </p>
              <p>
                Beyond her work as a makeup artist, Deekshitha is passionate about education. Through her academy, she has trained over 100 aspiring makeup artists, sharing her knowledge and helping others pursue their dreams in the beauty industry.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-all"
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-playfair font-bold gold-gradient mb-1">
                      {achievement.title}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quote */}
            <div className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
              <p className="text-lg italic text-foreground/90">
                "My goal is to enhance your natural beauty and create a look that makes you feel confident and radiant. Every client is unique, and I take pride in customizing my approach to suit individual preferences and styles."
              </p>
              <p className="text-primary font-semibold mt-3">- Deekshitha Raj</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
