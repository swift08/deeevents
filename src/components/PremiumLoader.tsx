import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const PremiumLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-full blur-2xl opacity-50 animate-pulse" />
          <div className="relative bg-gradient-to-br from-amber-400 to-amber-600 p-6 rounded-full">
            <Sparkles className="w-12 h-12 text-black animate-pulse" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-playfair text-3xl font-bold text-white premium-text-shadow">
            Loading Excellence
          </h2>
          <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-slate-400 text-sm">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default PremiumLoader;

