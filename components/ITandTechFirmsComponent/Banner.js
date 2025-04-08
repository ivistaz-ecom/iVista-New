import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <div className="position-relative w-100" style={{ height: '100vh', overflow: 'hidden' }}>
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ zIndex: -1 }}
      >
        {/* Desktop video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-100 h-100 d-none d-md-block"
          style={{ objectFit: 'cover' }}
        >
          <source src="/videos/tech_solution_banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-100 h-100 d-block d-md-none"
          style={{ objectFit: 'cover' }}
        >
          <source src="/videos/tech_solution_banner_mobile_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

   
    </div>
  );
};

export default Banner;
