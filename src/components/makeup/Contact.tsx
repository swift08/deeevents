import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Instagram, MapPin, Send, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const studioLocation = {
  address: "1, 1st Floor, Makeup Republic, #1, New Kantharaj Urs Rd, CFTRI Layout, Sharadadevi Nagar, Mysuru, Karnataka 570022",
  mapLink:
    "https://www.google.com/maps/place/Makeup+Republic/@12.2956258,76.610415,17z/data=!4m8!3m7!1s0x3baf7b50b56a1dc9:0x2135a903bf789fa!8m2!3d12.2956206!4d76.6129899!9m1!1b1!16s%2Fg%2F11kpk_sms9?entry=ttu",
  embedSrc: "https://www.google.com/maps?q=12.2956206,76.6129899&z=17&output=embed",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello! I'd like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nPreferred Date: ${formData.date}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918197963763?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success("Redirecting to WhatsApp...");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      id="contact"
      className="py-12 px-4 sm:px-6 lg:px-8 bg-black-card reveal-section"
      data-animate="true"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold gold-gradient mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your look? Book your appointment today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-playfair font-bold gold-gradient mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a 
                  href="tel:+918197963763"
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone / WhatsApp</p>
                    <p className="text-muted-foreground">+91 81979 63763</p>
                  </div>
                </a>

                <a 
                  href="mailto:deekshitharaj.1018@gmail.com"
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground break-all">deekshitharaj.1018@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/mysore_bridal_makeup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Instagram</p>
                    <p className="text-muted-foreground">@mysore_bridal_makeup</p>
                  </div>
                </a>

                <a
                  href={studioLocation.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Studio Address</p>
                      <p className="text-muted-foreground leading-relaxed">{studioLocation.address}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold">
                    View on Google Maps <ExternalLink className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-6">
              <div className="rounded-2xl border border-border overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)] h-64">
                <iframe
                  title="Makeup Republic Location"
                  src={studioLocation.embedSrc}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 rounded-xl p-6">
              <h4 className="font-playfair font-bold text-xl gold-gradient mb-4">Business Hours</h4>
              <div className="space-y-2 text-foreground/90">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="text-primary font-semibold">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-primary font-semibold">By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-playfair font-bold gold-gradient mb-6">
              Book Your Appointment
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground mb-2 block">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-input border-border focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-foreground mb-2 block">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-input border-border focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground mb-2 block">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-input border-border focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date" className="text-foreground mb-2 block">Preferred Date</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-input border-border focus:border-primary transition-colors text-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-foreground mb-2 block">Service Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => handleChange(e as any)}
                    className="w-full h-10 px-3 py-2 bg-input border border-border rounded-md focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="Bridal Makeup">Bridal Makeup</option>
                    <option value="HD Makeover">HD Makeover</option>
                    <option value="Airbrush Makeover">Airbrush Makeover</option>
                    <option value="Party Makeup">Party Makeup</option>
                    <option value="Engagement Makeup">Engagement Makeup</option>
                    <option value="Makeup Course">Makeup Course</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground mb-2 block">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-input border-border focus:border-primary transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all text-lg py-6"
              >
                Send Message via WhatsApp
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
