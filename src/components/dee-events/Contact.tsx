import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with all form data
    const message = `Hello! I'm interested in booking plate decor services.\n\nName: ${formData.name}\nEvent Type: ${formData.eventType}\nEvent Date: ${formData.date}\nMessage: ${formData.message || "Not provided"}`;
    const whatsappUrl = `https://wa.me/918197963763?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form after opening WhatsApp
    setFormData({ name: "", eventType: "", date: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in booking plate decor services.\n\nName: ${formData.name || "Not provided"}\nEvent Type: ${formData.eventType || "Not provided"}\nDate: ${formData.date || "Not provided"}\nMessage: ${formData.message || "Not provided"}`;
    window.open(`https://wa.me/918197963763?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFE4E1] via-[#FFD6D1] to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-[#2C1B1B] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-[#2C1B1B]/70 max-w-2xl mx-auto">
            Let's make your ceremony unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-[#2C1B1B] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF69B4] to-[#FFB6C1] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C1B1B] mb-1">Phone</p>
                    <a href="tel:+918197963763" className="text-[#2C1B1B]/70 hover:text-[#FF69B4] transition-colors">
                      +91 81979 63763
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF69B4] to-[#FFB6C1] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C1B1B] mb-1">Email</p>
                    <a href="mailto:deekshitharaj.1018@gmail.com" className="text-[#2C1B1B]/70 hover:text-[#FF69B4] transition-colors">
                      deekshitharaj.1018@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF69B4] to-[#FFB6C1] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C1B1B] mb-1">Location</p>
                    <a
                      href="https://maps.app.goo.gl/BmZx4xvVbVwkykKRA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2C1B1B]/70 hover:text-[#FF69B4] transition-colors block"
                    >
                      1, 1st floor, makeup republic, #1, New Kantharaj Urs Rd, CFTRI layout, Sharadadevi Nagar, Mysuru, Karnataka 570022
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF69B4] to-[#FFB6C1] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C1B1B] mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/mysore_plate_decor?igsh=MWV1Njd2bXRpYnFlcA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2C1B1B]/70 hover:text-[#FF69B4] transition-colors"
                    >
                      @mysore_plate_decor
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#FFD6D1]">
              <button
                onClick={handleWhatsApp}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#FF69B4] via-[#FF1493] to-[#FF69B4] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#FF69B4]/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </button>
            </div>

            {/* Mini Map with Frame */}
            <div className="mt-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF69B4]/20 via-[#FFB6C1]/20 to-[#FFD6D1]/20 rounded-3xl blur-xl -z-10 animate-pulse" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FF69B4] p-2 bg-gradient-to-br from-[#FFEFE6] to-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF69B4]/10 to-transparent pointer-events-none rounded-2xl" />
                <a
                  href="https://maps.app.goo.gl/BmZx4xvVbVwkykKRA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl overflow-hidden"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1234567890!2d76.6129899!3d12.2956206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7b50b56a1dc9%3A0x2135a903bf789fa!2sMakeup%20Republic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full rounded-2xl"
                    title="Mysore Plate Decor Location"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#2C1B1B] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[#FFB6C1] rounded-xl focus:border-[#FF69B4] focus:outline-none transition-colors text-[#2C1B1B] placeholder:text-[#2C1B1B]/50"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-semibold text-[#2C1B1B] mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[#FFB6C1] rounded-xl focus:border-[#FF69B4] focus:outline-none transition-colors text-[#2C1B1B] bg-white"
                >
                  <option value="">Select event type</option>
                  <option value="babyshower">Babyshower</option>
                  <option value="engagement">Engagement</option>
                  <option value="half-saree">Half-Saree</option>
                  <option value="wedding">Wedding</option>
                  <option value="naming">Naming</option>
                  <option value="thread">Thread</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-[#2C1B1B] mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[#FFB6C1] rounded-xl focus:border-[#FF69B4] focus:outline-none transition-colors text-[#2C1B1B]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#2C1B1B] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-[#FFD6D1] rounded-xl focus:border-[#D99A4A] focus:outline-none transition-colors resize-none text-[#2C1B1B] placeholder:text-[#2C1B1B]/50"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-[#FF69B4] via-[#FF1493] to-[#FF69B4] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#FF69B4]/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

