"use client";
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Header from "../../../components/HeaderBlack";
import CountUp from "react-countup";
// import MasteryArtsPerfomancePage from './MasteryArtsPerfomancePage'
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Experience from "../experience/page";

function IhomePage() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title =
    "Welcome to iVistaz";
  const description =
    "Welcome to iVistaz, where innovative digital marketing solutions meet exceptional service. Explore our range of services designed to boost your online presence and drive business growth.";
  const path = `${pathname}`;
  const metaImage = "";

  const [isYearOfPerformance, setIsYearOfPerformance] = useState(1996);
  const [perfomance, setPerformance] = useState(0);

  const useMaseteryRef = useRef();

  function handleScrollToResults() {
    if (useMaseteryRef.current) {
      useMaseteryRef.current.scrollIntoView({ behavior: "smooth" }); // Check if ref is defined before using it
    }
  }

  const [currentSection, setCurrentSection] = useState("main");

  const [isMobile, setIsMobile] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 768);
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
        setIsMobile(window.innerWidth <= 768);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const rotateText = {
    transform: isMobile ? "rotate(0deg)" : "rotate(270deg)",
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const performance = year - isYearOfPerformance;
    setPerformance(performance);
  }, [isYearOfPerformance]);

  return (
    <>
      <style>
        {`
           #chat-bot-launcher-container.chat-bot-avatar-launcher, #chat-bot-launcher-container.chat-bot-launcher-notext {
            bottom: 15px;
            z-index: 0 !important;
            display: none;
        }
        `}
      </style>
      
      <SeoComponents
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />

      <Header />
      <Container
        className="bg-black h-100vh d-flex flex-column justify-content-center"
        fluid
      >
        <Row className="d-flex flex-column justify-content-center align-items-center">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white fs-80 ">
              <CountUp
                end={perfomance}
                prefix=""
                className="years fw-bold"
                suffix=" YEARS"
              />
            </h2>
            <h2 className="text-white fs-80 fw-bold">OF PERFORMANCE</h2>
            <h2 className="text-white fs-80 fw-bold">BACKED BY</h2>
            <h2 className="text-white fs-80 fw-bold">MASTERY AND ART</h2>
            <Col className="d-flex flex-column justify-content-center align-items-center pb-4">
              <Link href="" onClick={handleScrollToResults}>
                <div className="scroll-down cursor-pointer"></div>
              </Link>
            </Col>
          </Col>
        </Row>
      </Container>

      <Container
        className="bg-black h-100vh d-flex flex-column justify-content-center"
        ref={useMaseteryRef}
        fluid
      >
        <Row className="h-100vh d-flex flex-lg-row flex-column">
          <Col
            className={`d-flex flex-column p-0 z-1 ${
              isMobile ? "" : "border-end"
            } z-1`}
            lg={6}
            style={{ height: isMobile ? "66.66vh" : "" }}
          >
            <Col className="mastery h-100 p-0 border-bottom d-flex flex-column w-100">
              <Link
                href="/mastery-art-performance#mastery"
                className="h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer"
              >
                <div>
                  <h1 className="text-white fs-70 fw-bold"> MASTERY </h1>
                </div>
                <div className="show-mastery">
                  <Image
                    src="/home/masery.svg"
                    width={100}
                    height={10}
                    alt=""
                    className="w-100"
                  />
                </div>
              </Link>
            </Col>

            <Col
              className={`art p-0 d-flex justify-content-center align-items-center z-1 ${
                isMobile ? "border-bottom" : ""
              }`}
            >
              <Link
                href="/mastery-art-performance#art"
                className="h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer"
              >
                <div>
                  <h1 className="text-white fs-70 fw-bold art-txt"> ART </h1>
                </div>
                <div className="show-art">
                  <Image
                    src="/home/art.svg"
                    width={100}
                    height={10}
                    alt=""
                    className="w-100"
                  />
                </div>
              </Link>
            </Col>
          </Col>

          <Col
            className="p-0 z-0"
            lg={6}
            style={{ height: isMobile ? "33.33vh" : "" }}
          >
            <Col className="perfomance d-flex flex-column justify-content-center align-items-center h-100 p-0 z-0">
              <Link
                href="/mastery-art-performance#performance"
                className="h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer"
              >
                <Col className="p-0 d-flex flex-column justify-content-center align-items-center w-100 text-decoration-none">
                  <div style={rotateText}>
                    <div className="d-flex">
                      <h1 className="text-white fs-70 fw-bold">
                        {" "}
                        PERFORMANCE{" "}
                      </h1>
                    </div>
                    <div className="show-perfomance">
                      <Image
                        src="/home/masery.svg"
                        width={100}
                        height={10}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                </Col>
              </Link>
            </Col>
          </Col>
        </Row>
      </Container>

      {/* <div ref={useMaseteryRef}>
        <MasteryArtsPerfomancePage />
      </div> */}
    </>
  );
}

export default IhomePage;
