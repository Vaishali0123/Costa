"use client";
import Image from "next/image";
import React from "react";
import pic from "../../../../public/three.jpg";
import Link from "next/link";
const Banner = () => {
  const bannerStyle: React.CSSProperties = {
    backgroundImage: "url(/images/Banner2.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "55vh",
    minHeight: "300px",
    maxHeight: "600px",
    position: "relative",
    borderRadius: "30px",
    marginBottom: "32px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: "0",
    backgroundColor: "white",

    zIndex: 1,
  };

  const contentStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 10,
    // textAlign: "center",
    color: "white",
    // maxWidth: "800px",
    width: "100%",
    padding: "0 16px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "clamp(1.5rem, 4vw, 3rem)",
    marginBottom: "16px",
    fontWeight: 700,
    lineHeight: 1.2,
    color: "black",
    width: "80%",
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: "clamp(0.9rem, 2vw, 1.125rem)",
    margin: "0 auto 24px 0",
    color: "black",
    maxWidth: "600px",
    lineHeight: 1.6,
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "white",
    color: "purple",
    padding: "12px 24px",
    fontWeight: 600,
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
    cursor: "pointer",
    fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
  };

  return (
    <div style={bannerStyle}>
      <Image
        alt="pic"
        src={pic}
        style={overlayStyle}
        className="object-contain object-right w-full h-full"
      />
      <div
        style={contentStyle}
        className="flex justify-start items-start flex-col "
      >
        <h1 style={titleStyle} className="font-[marcellus]">
          Find the Right Insurance with Confidence
        </h1>
        <p style={descriptionStyle}>
          From health to home to disability — get expert-backed guidance for
          every coverage you need.
        </p>
        <Link
          href="https://admin.costaricaninsurance.com/understanding-medical-insurance-a-comprehensive-guide/"
          target="_blank"
          style={buttonStyle}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Banner;
