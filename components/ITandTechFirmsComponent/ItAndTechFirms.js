"use client";
import React from "react";

const ItAndTechFirms = () => {
    return (
        <div className="position-relative bg-white" style={{ zIndex: 1 }}>
            <div className="text-center py-5" style={{ marginTop: '' }}>
                {/* Starts after the banner */}
                <p className="lh-lg">
                    <span className="d-none d-lg-inline fw-bold" style={{ fontSize: '2rem', lineHeight: '1.5', padding:'70px' }}>
                        Mid-sized IT and tech firms in face a defining challenge: driving sustainable growth while navigating constant technological disruption and rising competitive pressures. The playbook of the past—demand generation through traditional content, events, and outbound efforts—is no longer enough. With the rise of Generative AI, marketing must transition from informing prospects to shaping decisions in real-time.
                    </span>

                    <span className="d-lg-none fw-bold"style={{ fontSize: '1rem', lineHeight: '0.5', padding:'20px' }} >
                        Mid-sized IT and tech firms in face a defining challenge: driving sustainable growth while navigating constant technological disruption and rising competitive pressures. The playbook of the past—demand generation through traditional content, events, and outbound efforts—is no longer enough. With the rise of Generative AI, marketing must transition from informing prospects to shaping decisions in real-time.
                    </span>
                </p>
            </div>

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
                    <source src="/videos/ivistaz-tech-video-desktop.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Mobile video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-100 d-block d-md-none"
                    style={{ height: '100vh', objectFit: 'cover' }}
                >
                    <source src="/videos/ivistaz-tech-video-mobile.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default ItAndTechFirms;
