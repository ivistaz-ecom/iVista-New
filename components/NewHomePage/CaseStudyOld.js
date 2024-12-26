import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Card, Button, Image } from "react-bootstrap";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { caseStudiesData } from "../../utils/CaseStudiesData";

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false); // Track if user has scrolled past the animations
  const slidesToShow = isDesktop ? 3 : 1;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (hasScrolled) return;

      const elements = document.querySelectorAll(".fade-card");
      let allCardsVisible = true;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("active");
        } else {
          allCardsVisible = false;
        }
      });

      // If all cards have been animated, disable further animations
      if (allCardsVisible) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

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

  const displayedData = caseStudiesData.slice(0, 6);

  return (
    <>
      <style>
        {`
          .fade-card {
            opacity: 0;
            transform: translateY(50px); /* Default position for fade-up */
            transition: all 3s ease-in-out;
          }
          .fade-card.active {
            opacity: 1;
            transform: translateY(0);
          }

          .case-study-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .case-study-card.elevated {
            transform: translateY(-40px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }
          @media (max-width: 1024px) {
            .case-study-card.elevated {
              transform: none !important; /* Remove elevation effect on mobile */
              box-shadow: none !important;
            }
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
              const middleIndex = Math.floor(slidesToShow / 2);
              const shouldElevate =
                index >= activeIndex &&
                index < activeIndex + slidesToShow &&
                index === activeIndex + middleIndex;

              return (
                <div key={index}>
                  <Card
                    className={`case-study-card mx-auto d-flex flex-column h-100 m-5 border-2 border-danger rounded-4 ${
                      !hasScrolled ? "fade-card" : ""
                    } ${isDesktop && shouldElevate ? "elevated" : ""}`}
                    style={{ maxWidth: "350px", minHeight: "340px" }}
                  >
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div className="card-title d-flex justify-content-between align-items-center">
                        <p className="fs-3 mb-0 red para-text fw-bold ps-3 ">
                          {card.stats}
                        </p>
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
            <Button
              variant="outline-danger"
              onClick={() => setHasScrolled(true)} // Disable animations manually
            >
              Explore All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
