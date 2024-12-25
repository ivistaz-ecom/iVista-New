import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Card, Button, Image } from "react-bootstrap";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { caseStudiesData } from "../../utils/CaseStudiesData";

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Active index for elevation effect
  const [isDesktop, setIsDesktop] = useState(true); // State to track screen size
  const slidesToShow = isDesktop ? 3 : 1; // Number of slides visible based on screen size

  // Handle screen resize to determine desktop or mobile
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Set initial state based on the screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveIndex(next),
    customPaging: (i) => (
      <div
        className={`custom-dot ${i === activeIndex ? "active" : ""}`}
        style={{ width: "12px", height: "12px", borderRadius: "50%" }}
      ></div>
    ),
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
        }}
      >
        {dots}
      </ul>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const displayedData = caseStudiesData.slice(0, 6); // Limit to 6 items

  return (
    <>
      <style>
        {`
          .case-study-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .case-study-card.elevated {
            transform: translateY(-30px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }
          .custom-dot {
            width: 12px;
            height: 12px;
            border: 2px solid red;
            border-radius: 50%;
            transition: border-color 0.3s ease;
          }
          .custom-dot.active {
            background-color: red;
          }
          @media (max-width: 1024px) {
            .case-study-card.elevated {
              transform: none !important; /* Remove elevation effect on mobile */
              box-shadow: none !important;
            }
          }
          .slick-prev, .slick-next {
            z-index: 1;
          }
          .card {
            border: 2px solid #dc3545;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }
          .card-title {
            font-size: 1.5rem;
            font-weight: 700;
          }
          .card-stats {
            font-size: 2rem;
            font-weight: 600;
            color: #ED2224;
          }
          .card-text {
            font-size: 0.9rem;
            font-weight: 400;
            color: #6c757d;
          }
        `}
      </style>
      <div className="bg-white" style={{ minHeight: "80vh" }}>
        <div className="container py-5">
          <h2 className="text-center text-danger fw-bold">CASE STUDIES</h2>
          <h3 className="text-center fw-bold">PROVEN RESULTS, CLEAR IMPACT</h3>
          <p className="text-center mb-5">
            Explore how we’ve helped businesses achieve measurable success.
          </p>
          <Slider {...settings}>
            {displayedData.map((card, index) => {
              const middleIndex = Math.floor(slidesToShow / 2); // Middle card index
              const shouldElevate =
                index >= activeIndex &&
                index < activeIndex + slidesToShow &&
                index === activeIndex + middleIndex;

              return (
                <div key={index}>
                  <Card
                    className={`case-study-card mx-auto d-flex flex-column h-100 m-5 ${
                      isDesktop && shouldElevate ? "elevated" : ""
                    }`}
                    style={{ maxWidth: "350px", minHeight: "340px" }}
                  >
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div className="card-title d-flex justify-content-between align-items-center">
                        <p className="card-stats mb-0">{card.stats}</p>
                        <Image
                          src={card.image}
                          alt={card.title}
                          className="ms-2"
                          width={50}
                          height={50}
                        />
                      </div>
                      <Card.Title className="mt-3">{card.title}</Card.Title>
                      <Card.Text>{card.description}</Card.Text>
                      <Link
                        href={card.link}
                        variant="link"
                        className="text-red fw-bold text-start text-decoration-none"
                      >
                        Learn More ↗
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Slider>
          <div className="text-center mt-5">
            <Button variant="outline-danger">Explore All Case Studies</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
