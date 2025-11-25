import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    eventType: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I'm interested in booking plate decor services.\n\nName: ${formData.name}\nEvent Type: ${formData.eventType}\nDate: ${formData.date}`;
    window.open(`https://wa.me/918197963763?text=${encodeURIComponent(message)}`, "_blank");
    setFormData({ name: "", eventType: "", date: "" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-40 flex items-center justify-center group"
        aria-label="Open WhatsApp booking"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Widget Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-3xl shadow-2xl z-40 animate-slide-up">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2C1B1B]">Book via WhatsApp</h3>
                <p className="text-sm text-[#2C1B1B]/60">Quick booking form</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="widget-name" className="block text-sm font-semibold text-[#2C1B1B] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="widget-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-[#FFD6D1] rounded-lg focus:border-[#D99A4A] focus:outline-none text-sm text-[#2C1B1B] placeholder:text-[#2C1B1B]/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="widget-event" className="block text-sm font-semibold text-[#2C1B1B] mb-1">
                  Event Type
                </label>
                <select
                  id="widget-event"
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-[#FFD6D1] rounded-lg focus:border-[#D99A4A] focus:outline-none text-sm text-[#2C1B1B] bg-white"
                >
                  <option value="">Select event</option>
                  <option value="Babyshower">Babyshower</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Half-Saree">Half-Saree</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Naming">Naming</option>
                  <option value="Thread">Thread</option>
                </select>
              </div>

              <div>
                <label htmlFor="widget-date" className="block text-sm font-semibold text-[#2C1B1B] mb-1">
                  Event Date
                </label>
                <input
                  type="date"
                  id="widget-date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-[#FFD6D1] rounded-lg focus:border-[#D99A4A] focus:outline-none text-sm text-[#2C1B1B]"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;

