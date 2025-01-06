import React, { useEffect, useState } from "react";
import Image from "next/image";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Check window size to determine if it is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Adjust delay as needed

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Check on initial load
    handleResize();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <style>
        {`
          /* Initial opacity and position for fade effects */
          .fade-left,
          .fade-right,
          .fade-up {
            opacity: 0;
            transform: translate(50px, 0); /* Start position */
            transition: opacity 1s ease, transform 1s ease;
          }

          .fade-left {
            transform: translateX(-50px); /* Move left */
          }

          .fade-right {
            transform: translateX(50px); /* Move right */
          }

          .fade-up {
            transform: translateY(50px); /* Move up */
          }

          /* When the 'animate' class is applied */
          .animate {
            opacity: 1;
            transform: translate(0, 0); /* Reset position */
          }

          /* Custom styles for white lines */
          .line-left {
            width: 12%;
            height: 6px;
          }

          .line-right {
            width: 40%;
            height: 6px;
          }            

          /* Mobile-specific styles */
          @media (max-width: 767px) {
            .fade-left p, .fade-right p {
              font-size: 1.5rem;
            }
            .fade-left img, .fade-right img {
              max-width: 80%;
              height: auto;
            }
            .fade-left, .fade-right {
              max-width: 100%;
            }
          }
        `}
      </style>

      <div className="position-relative text-center text-white vh-100 overflow-hidden bg-black">
        {/* Background Image */}
        <Image
          src="/images/homeImage/home_banner.jpeg"
          alt="Background Image"
          rel="preload"
          fill
          className="object-fit-cover"
          priority
        />

        {/* Centered Content */}
        <div className="position-relative z-3 px-4 d-flex flex-column align-items-center justify-content-center h-100">
          {/* Line on Left + DIGITAL MARKETING */}
          <div
            className={`fade-left ${
              animate ? "animate" : ""
            } d-flex align-items-center justify-content-start w-100`}
          >
            <div className="bg-white line-left me-3"></div>
            <p
              className="fw-bold mb-0"
              style={{ fontSize: isMobile ? "1.3rem" : "4rem" }}
            >
              DIGITAL MARKETING
            </p>
          </div>

          {/* Neon SOLUTIONS Image */}
          <div
            className={`fade-right ${
              animate ? "animate" : ""
            } position-relative`}
            style={{
              maxWidth: isMobile ? "80%" : "650px",
              width: "100%",
              height: isMobile ? "40px" : "95px",
              
            }}
          >
            <Image
              src="/images/homeImage/SolutionTextImage.png"
              alt="Solutions Text"
              loading="lazy"
              fill
              className="object-fit-contain img-fluid"
              style={{
                right: isMobile ? "" : "20%",
              }}
            />
          </div>

          {/* ALIGNED WITH + Line on Right */}
          <div
            className={`fade-left ${
              animate ? "animate" : ""
            } d-flex align-items-center justify-content-end w-100`}
          >
            <p
              className="fw-bold mb-0 me-3"
              style={{ fontSize: isMobile ? "1.3rem" : "4rem" }}
            >
              ALIGNED WITH
            </p>
            <div className="bg-white line-right"></div>
          </div>

          {/* Your Goals Image */}
          <div
            className={`fade-right ${
              animate ? "animate" : ""
            } position-relative`}
            style={{
              maxWidth: isMobile ? "80%" : "700px",
              width: "100%",
              height: isMobile ? "40px" : "90px",
            }}
          >
            <Image
              src="/images/homeImage/YourGoalTextImage.png"
              alt="Your Goals"
              loading="lazy"
              fill
              className="object-fit-contain img-fluid "
              style={{
                left: isMobile ? "" : "26%",
              }}
            />
          </div>

          {/* Subtext */}
          <p
            className={`fade-up ${
              animate ? "animate" : ""
            } fs-5 mt-5 lh-base text-center`}
            style={{
              width: isMobile ? "100%" : "50%",
            }}
          >
            We focus on your most important outcomes – generating leads,
            increasing online sales, growing revenues, and improving keyword
            rankings
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
