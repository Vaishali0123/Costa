"use client";
import React from "react";
import Bg from "../../../../public/BGs.png";
import Bgtwo from "../../../../public/blogbg.png";

const Banner = () => {
  const bannerStyle: React.CSSProperties = {
    backgroundImage: `url(${Bg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "50vh",
    minHeight: "260px",
    maxHeight: "450px",
    position: "relative",
    borderRadius: "30px",
    marginBottom: "32px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: "0",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 1,
  };

  const contentStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 10,
    width: "100%",
    padding: "5% 8%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: "Marcellus, serif",
    fontSize: "clamp(1.5rem, 4vw, 3rem)",
    fontWeight: "bold",
    marginBottom: "12px",
    maxWidth: "800px",
    lineHeight: 1.2,
    textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "20px",
    maxWidth: "650px",
    marginBottom: "20px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
  };

  return (
    <div style={bannerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Efficient Rules to get best insurance</h1>
        <p style={subtitleStyle}>
          Whether you're looking for pet insurance, health insurance, or
          disability insurance, we've got you covered.
        </p>
      </div>
    </div>
  );
};

export default Banner;
