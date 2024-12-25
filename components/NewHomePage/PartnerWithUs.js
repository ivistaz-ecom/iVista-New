import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PartnerWithUs = () => {
  // State to check if it's mobile view
  const [isMobile, setIsMobile] = useState(false);

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // IntersectionObserver to apply animations when in viewport
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
      { threshold: 0.5 } // Trigger when 50% of the element is in the viewport
    );

    const elementsToObserve = document.querySelectorAll(
      ".fade-left, .fade-right, .fade-up"
    );
    elementsToObserve.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <style>
        {`
          /* Animation styles */
          .fade-left {
            opacity: 0;
            transform: translateX(-50px);
            transition: opacity 1s ease, transform 1s ease;
            font-size: 4rem;
          }

          .fade-right {
            opacity: 0;
            transform: translateX(50px);
            transition: opacity 1s ease, transform 1s ease;
          }

          .fade-up {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 1s ease, transform 1s ease;
            font-size: 20px;
          }

          /* Animate when in viewport */
          .animate {
            opacity: 1;
            transform: translate(0);
          }

          /* Button Styling for positioning */
          .learn-more-btn {
            position: absolute;
            top: 80%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10; /* Ensure it is above the video */
          }

            @media (max-width: 768px) {
            .fade-left, .fade-right, .fade-up {
              font-size: 20px;
            }

            .fade-left {
              font-size: 20px;
              margin: 0;
            }

            .fade-right {
              margin: 0;
            }

            .fade-up h3 {
              font-size: 18px;
            }

            .video-container {
              height: 30vh; /* Adjust height for mobile */
            }

            .object-fit-cover {
              object-position: center top; /* Ensure image covers well on mobile */
            }
              
            @media (max-width: 768px) {
              .learn-more-btn {
                position: absolute;
                width: 100%; /* Full width */
                top: 80%; /* Adjust the vertical position */
                left: 0; /* Align to the left edge */
                transform: translate(0, -50%); /* Center vertically */
                z-index: 10; /* Ensure it is above the video */
                text-align: center; /* Center the button text */
              }
            }
                    `}
      </style>

      <div className="container-fluid p-0 m-0 bg-black">
        <div className="position-relative">
          {/* Video for desktop view */}
          <div className="d-none d-md-block">
            <video
              src="/videos/digital_growth.mp4"
              className="w-100"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>

          {/* Video for mobile view */}
          <div className="d-block d-md-none">
            <video
              src="/videos/DigitalGrowthMobile.mp4"
              className="w-100"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>

          <div className="learn-more-btn text-center">
          <Link href="/art/services" className="btn btn-light border border-white hover-outline">
              Learn more about our Services
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`position-relative text-white ${isMobile ? "w-100" : ""}`}
        style={{ height: isMobile ? "60vh" : "75vh" }}
      >
        <Image
          src="/images/homeImage/PartnerBanner.jpeg"
          alt="Background Image"
          layout="fill"
          className="object-fit-cover"
          priority
        />

        <div
          className={`position-absolute text-center px-4 ${
            !isMobile ? "top-50 start-50 translate-middle" : ""
          }`}
       
        >
          <Image
            src="/images/homeImage/PartnerImage.png"
            alt="Partner Image"
            width={300}
            height={300}
            className="md:mb-3 img-fluid fade-right me-5"
            style={{
              maxWidth: isMobile ? "60%" : "500px",
              width: "100%",
              height: isMobile ? "40px" : "90px",
              marginLeft: isMobile ? "-20%" : "-60%",
            }}
          />

          <p
            className="fw-bold mb-0 fade-left "
            style={{
              fontSize: isMobile ? "1.7rem" : "",
              marginLeft: isMobile ? "50px" : "90px",
            }}
          >
            WITH US TO{" "}
          </p>

          <Image
            src="/images/homeImage/ArchiveImage.png"
            alt="Archive Image"
            width={300}
            height={300}
            className="md:mb-3 img-fluid fade-right"
            style={{
              maxWidth: isMobile ? "60%" : "500px",
              width: "100%",
              height: isMobile ? "40px" : "90px",
              marginRight: isMobile ? "20%" : "80%",
            
            }}
          />

          <p
            className="fw-bold my-0 fade-left ms-5"
            style={{
              fontSize: isMobile ? "1.7rem" : "",
              marginLeft: isMobile ? "50px" : "90px",
            }}
          >
            YOUR GOALS
          </p>

          <div className="my-4 fade-up">
            <p>
              Whether you have a challenge to solve or a goal to reach, we can
              design solutions for your needs.
            </p>
            <h3 className="fs-1">
              Contact us to turn your digital marketing goals into results.
            </h3>

            <div className=" text-center py-3">
          <Link href="/contact-us" className="btn btn-light border border-white hover-outline">
          Get in Touch
            </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerWithUs;
