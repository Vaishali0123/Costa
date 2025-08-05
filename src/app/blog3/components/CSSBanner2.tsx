'use client';
import React from 'react';

const Banner = () => {
  const bannerStyle: React.CSSProperties = {
    backgroundImage: 'url(/images/Banner2.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '55vh',
    minHeight: '300px',
    maxHeight: '600px',
    position: 'relative',
    borderRadius: '30px',
    marginBottom: '32px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%'
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    color: 'white',
    maxWidth: '800px',
    width: '100%',
    padding: '0 16px'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
    marginBottom: '16px',
    fontWeight: 700,
    lineHeight: 1.2
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: 'clamp(0.9rem, 2vw, 1.125rem)',
    margin: '0 auto 24px auto',
    color: '#d0cace',
    maxWidth: '600px',
    lineHeight: 1.6,
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'white',
    color: 'purple',
    padding: '12px 24px',
    fontWeight: 600,
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    cursor: 'pointer',
    fontSize: 'clamp(0.85rem, 1.5vw, 1rem)'
  };

  return (
    <div style={bannerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={titleStyle}>
          Richird Norton photorealistics rendering as real photos
        </h1>
        <p style={descriptionStyle}>
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>
        <button style={buttonStyle}>Start planning your trip</button>
      </div>
    </div>
  );
};

export default Banner;
