import { useState } from "react";
import { X, Share2, Download } from "lucide-react";

interface PlateBuilderProps {
  onClose: () => void;
}

const patterns = [
  { id: "traditional", name: "Traditional", color: "#D99A4A" },
  { id: "floral", name: "Floral", color: "#FF6B9D" },
  { id: "geometric", name: "Geometric", color: "#4ECDC4" },
  { id: "minimal", name: "Minimal", color: "#95E1D3" },
];

const colors = [
  { id: "gold", name: "Gold", value: "#D99A4A" },
  { id: "rose", name: "Rose", value: "#FF6B9D" },
  { id: "peach", name: "Peach", value: "#FFB6C1" },
  { id: "cream", name: "Cream", value: "#FFF8DC" },
];

const PlateBuilder = ({ onClose }: PlateBuilderProps) => {
  const [selectedPattern, setSelectedPattern] = useState(patterns[0].id);
  const [selectedColor, setSelectedColor] = useState(colors[0].id);

  const handleShareToWhatsApp = () => {
    const message = `I've created a custom plate design!\n\nPattern: ${patterns.find((p) => p.id === selectedPattern)?.name}\nColor: ${colors.find((c) => c.id === selectedColor)?.name}\n\nI'd like to book this for my event.`;
    window.open(`https://wa.me/918197963763?text=${encodeURIComponent(message)}`, "_blank");
  };

  const selectedColorValue = colors.find((c) => c.id === selectedColor)?.value || colors[0].value;
  const selectedPatternData = patterns.find((p) => p.id === selectedPattern) || patterns[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-[#FFD6D1] p-6 flex items-center justify-between z-10">
          <h2 className="text-2xl font-playfair font-bold text-[#2C1B1B]">Plate Builder</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#FFD6D1] hover:bg-[#FFEFE6] flex items-center justify-center transition-colors"
            aria-label="Close plate builder"
          >
            <X className="w-5 h-5 text-[#2C1B1B]" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview */}
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div
                className="absolute inset-0 rounded-full shadow-2xl border-8"
                style={{
                  borderColor: selectedColorValue,
                  background: `radial-gradient(circle, ${selectedColorValue}15, ${selectedColorValue}05)`,
                }}
              >
                <div
                  className="absolute inset-8 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${selectedColorValue}40, ${selectedColorValue}20)`,
                  }}
                >
                  <div
                    className="absolute inset-8 rounded-full flex items-center justify-center"
                    style={{
                      background: selectedColorValue,
                      opacity: 0.1,
                    }}
                  >
                    <div
                      className="w-24 h-24 rounded-full border-4"
                      style={{
                        borderColor: selectedPatternData.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2C1B1B] mb-4">Select Pattern</h3>
              <div className="grid grid-cols-2 gap-4">
                {patterns.map((pattern) => (
                  <button
                    key={pattern.id}
                    onClick={() => setSelectedPattern(pattern.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedPattern === pattern.id
                        ? "border-[#D99A4A] bg-[#FFEFE6]"
                        : "border-[#FFD6D1] hover:border-[#D99A4A]/50"
                    }`}
                  >
                    <div
                      className="w-full h-16 rounded-lg mb-2"
                      style={{ backgroundColor: pattern.color, opacity: 0.3 }}
                    />
                    <p className="text-sm font-medium text-[#2C1B1B]">{pattern.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#2C1B1B] mb-4">Select Color</h3>
              <div className="flex gap-4">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-16 h-16 rounded-full border-4 transition-all ${
                      selectedColor === color.id
                        ? "border-[#D99A4A] scale-110"
                        : "border-transparent hover:scale-105"
                    }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <button
                onClick={handleShareToWhatsApp}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                Share to WhatsApp
              </button>
              <button
                onClick={onClose}
                className="w-full px-6 py-3 border-2 border-[#D99A4A] text-[#2C1B1B] rounded-xl font-semibold hover:bg-[#FFEFE6] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlateBuilder;

