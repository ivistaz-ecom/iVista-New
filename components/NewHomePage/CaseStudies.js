import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Container } from "react-bootstrap";

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true); // State to track screen size

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Check if screen is desktop or mobile
    };

    handleResize(); // Set initial state based on the screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveIndex(next),
    customPaging: (i) => (
      <div
        className={`custom-dot ${i === activeIndex ? "active" : ""}`}
        style={{ width: "10px", height: "10px", borderRadius: "50%" }}
      ></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
        }}
      >
        {dots.length > 3 ? dots.slice(0, 3) : dots}
      </div>
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

  const cardData = [
    {
      title: "Case Studies",
      subtitle: "That Show What We Do",
      description: "Our work reflects our commitment to measurable outcomes...",
      image: "/images/homeImage/ShowWhatWeDo.jpg",
    },
    {
      title: "Solutions",
      subtitle: "That Stand the Test of Time",
      description:
        "Our work is designed to grow with you for sustainable success...",
      image: "/images/homeImage/TestOfTime.jpg",
    },
    {
      title: "Case Studies",
      subtitle: "That Show What We Do",
      description: "Our work reflects our commitment to measurable outcomes...",
      image: "/images/homeImage/ShowWhatWeDo.jpg",
    },
    {
      title: "Idea",
      subtitle: "That Make an Impact",
      description:
        "We focus on practical, innovative solutions that solve real challenges...",
      image: "/images/homeImage/robot.jpg",
    },
  ];

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
            width: 10px;
            height: 10px;
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
        `}
      </style>
      <Container className="bg-white" style={{ minHeight: "80vh" }}>
        <div className="container py-5">
          <h2 className="text-center text-danger fw-bold">CASE STUDIES</h2>
          <h3 className="text-center fw-bold">PROVEN RESULTS, CLEAR IMPACT</h3>
          <p className="text-center mb-5">
            Explore how we’ve helped businesses achieve measurable success.
          </p>
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <div key={index} className="d-flex justify-content-center">
                <Card
                  className={`case-study-card border border-danger rounded shadow m-md-5 m- ${
                    isDesktop && index === activeIndex ? "elevated" : "" // Add "elevated" class only on desktop
                  }`}
                  style={{ maxWidth: "350px" }}
                >
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <Card.Img
                      variant="top"
                      src={card.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-danger fs-5 fw-bold">
                      {card.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted fw-bold">
                      {card.subtitle}
                    </Card.Subtitle>
                    <Card.Text className="text-muted">
                      {card.description}
                    </Card.Text>
                    <Button
                      variant="link"
                      className="text-danger fw-bold text-decoration-none"
                    >
                      Learn More →
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
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
