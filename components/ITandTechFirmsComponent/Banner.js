// components/Banner.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <div className="position-relative w-100">
      {/* Desktop video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-100 d-none d-md-block"
        style={{ height: '100vh', objectFit: 'cover' }}
      >
        <source src="/videos/tech-landing-banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-100 d-block d-md-none"
        style={{ height: '100vh', objectFit: '' }}
      >
        <source src="/videos/tech-landing-banner-mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Banner;
