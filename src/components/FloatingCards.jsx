import React from "react";
import { Shield, Heart, Globe, CheckCircle } from "lucide-react";

const FloatingCards = () => {
  const cards = [
    { icon: Shield, text: "Protected", delay: "0s" },
    { icon: Heart, text: "Trusted", delay: "0.5s" },
    { icon: Globe, text: "Global", delay: "1s" },
    { icon: CheckCircle, text: "Verified", delay: "1.5s" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cards.map((card, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            top: `${20 + index * 15}%`,
            left: `${10 + index * 20}%`,
            animationDelay: card.delay,
            animationDuration: "6s",
          }}
        >
          <div className="bg-white/80 animate-pulse backdrop-blur-sm border border-orange-200/50 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <div className="flex items-center space-x-2">
              <card.icon className="h-4 w-4 text-orange-500" />
              <span className="text-xs font-medium text-gray-700">
                {card.text}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FloatingCards;
