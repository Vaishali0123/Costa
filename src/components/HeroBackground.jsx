import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-orange-300/25 to-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-orange-400/40 rotate-45 animate-bounce delay-500"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-orange-500/50 rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-8 bg-orange-300/30 animate-pulse delay-300"></div>
      <div className="absolute top-2/3 left-1/3 w-6 h-2 bg-orange-400/35 animate-bounce delay-1000"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroBackground;
