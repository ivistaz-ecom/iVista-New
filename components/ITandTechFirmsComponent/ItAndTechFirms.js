"use client";
import React from "react";

const ItAndTechFirms = () => {
    return (
        <div className="position-relative bg-white" style={{ zIndex: 1 }}>
            {/* Custom styles */}
            <style>{`
        .it-tech-text {
          font-weight: bold;
          padding: 80px !important;
          font-size: 2rem;
          line-height: 1.5;
          display: inline-block;
        }

        .it-tech-text-mobile {
          font-weight: bold;
          padding: 40px 10px 40px 10px !important;
          font-size: 1rem;
          line-height: 1.6;
          display: none;
        }

        @media (max-width: 768px) {
          .it-tech-text {
            display: none;
          }

          .it-tech-text-mobile {
            display: block;
          }
        }
      `}</style>

            {/* Text Section */}
            <div className="text-center">
                <p className="lh-lg m-0">
                    <span className="it-tech-text">
                        Mid-sized IT and tech firms face a defining challenge: driving sustainable growth while navigating constant technological disruption and rising competitive pressures. The playbook of the past—demand generation through traditional content, events, and outbound efforts—is no longer enough. With the rise of Generative AI, marketing must transition from informing prospects to shaping decisions in real-time.
                    </span>

                    <span className="it-tech-text-mobile">
                        Mid-sized IT and tech firms face a defining challenge: driving sustainable growth while navigating constant technological disruption and rising competitive pressures. The playbook of the past—demand generation through traditional content, events, and outbound efforts—is no longer enough. With the rise of Generative AI, marketing must transition from informing prospects to shaping decisions in real-time.
                    </span>
                </p>
            </div>

            {/* Video Section */}
            <div className="position-relative w-100">
                {/* Desktop Video */}
                {/* Desktop Video */}
                <div className="d-none d-md-block">
                    <div className="ratio ratio-16x9">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        >
                            <source src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/IvistazWebsite/ai-powered-marketing/ivistaz_comes_in_desktop_video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Mobile Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-100 d-block d-md-none"
                    style={{ height: '90vh', objectFit: 'cover' }}
                >
                    <source src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/IvistazWebsite/ai-powered-marketing/ivistaz_comes_in_mobile_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default ItAndTechFirms;
