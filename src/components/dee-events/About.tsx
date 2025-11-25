import { Sparkles, Heart, Award, Users } from "lucide-react";
import ownerPhoto from "@/assets/artist-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FFEFE6] to-[#FFD6D1] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB6C1]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF69B4]/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-[#2C1B1B] mb-4">
            Meet the Artisan
          </h2>
          <p className="text-xl text-[#2C1B1B]/70 max-w-2xl mx-auto">
            The creative mind behind every beautiful ceremony
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Owner Photo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF69B4] to-[#FFB6C1] rounded-3xl blur-2xl opacity-50 transform rotate-6 group-hover:opacity-70 group-hover:rotate-12 transition-all duration-500" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFB6C1] group-hover:border-[#FF1493] transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_30px_80px_rgba(255,105,180,0.4)]">
              <img
                src={ownerPhoto}
                alt="Deekshitha Raj - Event Management Specialist"
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF69B4]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold text-[#2C1B1B] mb-3">
                Deekshitha Raj
              </h3>
              <p className="text-lg text-[#FF69B4] font-semibold mb-4">Event Management Specialist & Creative Director</p>
            </div>

            <div className="space-y-4 text-[#2C1B1B]/80 text-lg leading-relaxed">
              <p>
                With a passion for creating unforgettable moments, Deekshitha Raj brings years of expertise in event
                management and traditional ceremony decor. Her meticulous attention to detail and deep understanding of
                cultural traditions ensures every event is executed flawlessly.
              </p>
              <p>
                Specializing in custom plate decor for weddings, engagements, babyshowers, and traditional ceremonies,
                Deekshitha combines modern aesthetics with timeless traditions to create stunning visual experiences that
                honor your special moments.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#FFB6C1] text-center hover:border-[#FF1493] hover:bg-white/80 hover:scale-105 hover:shadow-xl hover:shadow-[#FF69B4]/30 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF69B4] to-[#FFB6C1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 group-hover:from-[#FF1493] group-hover:to-[#FF69B4] transition-all duration-300">
                  <Award className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-semibold text-[#2C1B1B] mb-2 group-hover:text-[#FF1493] transition-colors">Expert Planning</h4>
                <p className="text-sm text-[#2C1B1B]/70 group-hover:text-[#2C1B1B] transition-colors">Years of experience in event coordination</p>
              </div>

              <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#FFB6C1] text-center hover:border-[#FF1493] hover:bg-white/80 hover:scale-105 hover:shadow-xl hover:shadow-[#FF69B4]/30 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF69B4] to-[#FFB6C1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 group-hover:from-[#FF1493] group-hover:to-[#FF69B4] transition-all duration-300">
                  <Heart className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-semibold text-[#2C1B1B] mb-2 group-hover:text-[#FF1493] transition-colors">Personal Touch</h4>
                <p className="text-sm text-[#2C1B1B]/70 group-hover:text-[#2C1B1B] transition-colors">Customized designs for every occasion</p>
              </div>

              <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#FFB6C1] text-center hover:border-[#FF1493] hover:bg-white/80 hover:scale-105 hover:shadow-xl hover:shadow-[#FF69B4]/30 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF69B4] to-[#FFB6C1] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 group-hover:from-[#FF1493] group-hover:to-[#FF69B4] transition-all duration-300">
                  <Users className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-semibold text-[#2C1B1B] mb-2 group-hover:text-[#FF1493] transition-colors">Client Focused</h4>
                <p className="text-sm text-[#2C1B1B]/70 group-hover:text-[#2C1B1B] transition-colors">Dedicated to making your vision reality</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="px-8 py-4 bg-gradient-to-r from-[#FF69B4] via-[#FF1493] to-[#FF69B4] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#FF69B4]/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Let's Plan Your Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

