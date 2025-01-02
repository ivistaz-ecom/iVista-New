import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Card, Button, Image, Container } from "react-bootstrap";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { caseStudiesData } from "../../utils/CaseStudiesData";

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false); // Track if user has scrolled past the animations
  const [ismobile, setIsMobile] = useState(false);

  const slidesToShow = isDesktop ? 3 : 1;

  useEffect(() => {
    // Check window size only after the component is mounted
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1024);
        setIsMobile(window.innerWidth <= 768);
      };
      handleResize(); // Call initially to set the state
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
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
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveIndex(next),
    customPaging: (i) => (
      <div
        className={`custom-dot ${
          Math.floor(activeIndex / slidesToShow) === i ? "active" : "inactive"
        }`}
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor:
            Math.floor(activeIndex / slidesToShow) === i ? "red" : "#f69093",
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
          gap: "0px",
        }}
      >
        {dots.slice(0, 2)} {/* Show only the first two dots */}
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
            transform: translateY(90px); /* Default position for fade-up */
            transition: all 3s ease-in-out;
          }
          .fade-card.active {
            opacity: 1;
            transform: translateY(0);
          }
          .case-study-card {
            transition: transform 0.8s ease, box-shadow 0.3s ease;
          }
         .slick-dots li {
            width: 4px !important; /* Remove width for individual dots */
            height: auto !important; /* Adjust height */
          }
          .custom-dot.active {
            background-color: red; /* Active dot color */
            border-color: red;
          }
          .custom-dot.inactive {
            background-color: #f69093 !important;
          }
          .case-study-card.elevated {
            transform: translateY(-75px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }
          @media (max-width: 1024px) {
            .case-study-card.elevated {
              transform: none !important; /* Remove elevation effect on mobile */
              box-shadow: none !important;
            }
          }   
        `}
      </style>
      <Container
        fluid
        className="bg-white mx-auto"
        style={{ width: ismobile ? "100%" : "75%" }}
      >
        <div className="container py-5">
          <h2 className="text-center text-danger fw-bold">CASE STUDIES</h2>
          <h3 className="text-center fw-bold">PROVEN RESULTS, CLEAR IMPACT</h3>
          <p className="text-center">
            Explore how we’ve helped businesses achieve measurable success.
          </p>
          <Slider {...settings}>
            {displayedData.map((card, index) => {
              const totalSlides = displayedData.length; // Total number of cards
              const middleIndex = Math.floor(slidesToShow / 2); // Adjust based on the number of visible slides
              const indexIsMiddle =
                index >= activeIndex &&
                index < activeIndex + slidesToShow &&
                index === activeIndex + middleIndex;

              return (
                <div key={index}>
                  <Card
                    className={`case-study-card mx-auto d-flex flex-column h-100 border-2 border-danger rounded-4 gap-1 mb-3 ${
                      !hasScrolled ? "fade-card" : ""
                    } ${isDesktop && indexIsMiddle ? "elevated" : ""}`}
                    style={{
                      maxWidth: "300px",
                      minHeight: "340px",
                      marginTop: ismobile ? "" : "25%",
                    }}
                  >
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div className="card-title d-flex justify-content-between align-items-center">
                        <p className="fs-1 mb-0 red para-text fw-bold ps-3 ">
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
          <div className="text-center mt-5 justify-content-center d-flex">
            <Link href="case-studies" className="btn btn-outline-danger">
              Explore All Case Studies
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CaseStudies;
