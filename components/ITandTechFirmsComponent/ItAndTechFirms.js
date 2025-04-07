"use client";
import React, { useEffect, useRef } from "react";

const ItAndTechFirms = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    } else {
                        entry.target.classList.remove("animate");
                    }
                });
            },
            { threshold: 0.5 }
        );

        const el = textRef.current;
        if (el) {
            observer.observe(el);
        }

        return () => {
            if (el) observer.unobserve(el);
        };
    }, []);

    return (
        <>
            <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s ease, transform 1s ease;
          font-size: 30px;
        }

        .fade-up.animate {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

            <div className="text-center p-2 p-lg-5">
                <p
                    ref={textRef}
                    className="fade-up p-2 p-lg-5 lh-lg"
                    style={{ fontSize: '1rem' }} // mobile size (fs-6 equivalent)
                >
                    <span className="d-none d-lg-inline" style={{ fontSize: '1.5rem' }}>
                        Mid-sized IT and tech firms in face a defining challenge: driving sustainable growth while navigating constant technological disruption and rising competitive pressures. The playbook of the past—demand generation through traditional content, events, and outbound efforts—is no longer enough. With the rise of Generative AI, marketing must transition from informing prospects to shaping decisions in real-time.
                    </span>
                    <span className="d-lg-none">
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

        </>
    );
};

export default ItAndTechFirms;
