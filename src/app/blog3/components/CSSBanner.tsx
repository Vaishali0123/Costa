'use client';
import React from 'react';

const Banner = () => {
  const bannerStyle: React.CSSProperties = {
    backgroundImage: 'url(/images/family-banner.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
    minHeight: '260px',
    maxHeight: '450px',
    position: 'relative',
    borderRadius: '30px',
    marginBottom: '32px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center'
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
    width: '100%',
    padding: '5% 8%',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
    fontWeight: 'bold',
    marginBottom: '12px',
    maxWidth: '800px',
    lineHeight: 1.2,
    textShadow: '1px 1px 3px rgba(0,0,0,0.4)'
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2.5vw, 2rem)',
    maxWidth: '650px',
    marginBottom: '20px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  };

  return (
    <div style={bannerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={titleStyle}>
          5 Efficient Rules How to Organize Your Working Place
        </h1>
        <p style={subtitleStyle}>
          Relationship tips couples therapists are giving all the time
        </p>
      </div>
    </div>
  );
};

export default Banner;
