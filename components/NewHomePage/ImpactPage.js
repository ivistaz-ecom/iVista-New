import Image from "next/image";
import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const ImpactPage = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <>
      <div
        className="bg-black d-flex align-items-center justify-content-center"
        style={{ height: isMobile ? "60vh" : "100vh" }}
      >
        <Container
          fluid
          className="position-relative d-flex flex-column align-items-center justify-content-center"
          style={{ maxWidth: "1200px" }}
        >
          {/* Top Dotted Red Design Image */}
          <div
            className="container-fluid d-flex"
            style={{ height: isMobile ? "80vh" : "100vh" }}
          >
            {/* Parent container */}
            <div className="position-relative h-100 w-100">
              <div
                className="position-absolute z-1"
                style={{ right: 0, top: "-80px" }}
              >
                <Image
                  src="/images/homeImage/MakeAnImpact.png"
                  alt="System Illustration"
                  width={900}
                  height={600}
                  className="img-fluid rounded object-fit-contain"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              {/* Text overlay */}
              <div
                className="position-absolute d-flex flex-column justify-content-center rounded text-white z-3"
                style={{
                  top: isMobile ? "53%" : "60%",
                  left: isMobile ? "0" : "-10px",
                  right: "5%",
                  transform: "translateY(-50%)",
                  background: "#ED2225",
                  padding: isMobile ? "5%" : "4%", // Adjusted for mobile
                  maxWidth: "600px",
                  width: "100%",
                }}
              >
                <p className="fw-bold display-4 mb-0">
                  <span className="fw-bold text-black">IDEAS</span> THAT
                </p>
                <p className="fw-bold display-4 mb-0">
                  MAKE AN <span className="fw-bold text-black">IMPACT</span>
                </p>
                <p className="mt-3">
                  We deliver practical, innovative solutions that solve real
                  challenges. Whether designing a new website or enhancing your
                  online visibility, our approach is results-driven and grounded
                  in expertise.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ImpactPage;
