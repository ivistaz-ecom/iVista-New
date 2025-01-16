"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js for routing
import { Container, Row, Col } from "react-bootstrap";
import CollectChatScript from "./ChatBot";

const NewFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
  
    
      {/* <div className="py-3 bg-black "></div> */}

      <div className="text-white position-relative d-flex mx-auto z-2" style={{}}>
        {/* Background Image */}
        <div className="position-absolute w-100 h-100">
          {/* Desktop Footer Image */}
          <Image
            src="/images/homeImage/NewFooter.png" // Replace with the path to your desktop image
            alt="Footer Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="d-none d-lg-block" // Show only on large screens and above
          />

          {/* Mobile Footer Image */}
          <Image
            src="/images/homeImage/mobile_footer.jpg" // Replace with the path to your mobile image
            alt="Footer Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="d-lg-none" // Show only on smaller screens
          />
        </div>

        {/* Content */}
        <div className="container py-5 position-relative">
          <div className="row">
            {/* Services Column */}
            <div className="col-md-3 mb-4">
              <Link
                href="/art/services"
                className="text-white text-decoration-none"
              >
                {" "}
                <h5 className="mb-3 fw-bold">Services</h5>
              </Link>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/service/content-development-b2b-b2c"
                  >
                    Content Development (B2B & B2C)
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/service/design"
                  >
                    Design
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/service/search-engine-marketing"
                  >
                    Search Engine Marketing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/service/search-engine-optimization"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/service/social-media-marketing"
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/service/organic-social-media"
                  >
                    Social Media - Organic
                  </Link>
                </li>

                {/* <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/"
                  >
                    Videos
                  </Link>
                </li> */}
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/service/website-design-and-development"
                  >
                    Web Design & Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="col-md-3 mb-4">
              <Link
                className="text-white text-decoration-none"
                href="/mastery/solutions"
              >
                <h5 className="mb-3 fw-bold">Solutions</h5>
              </Link>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/mastery/solutions#traffic"
                  >
                    Traffic
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/mastery/solutions#leadgen"
                  >
                    Lead-gen
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/mastery/solutions#onlinesales"
                  >
                    Online Sales
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/mastery/solutions#exp"
                  >
                    User Experience
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/mastery/solutions#value"
                  >
                    Value Creation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries Column */}
            <div className="col-md-3 mb-4">
              <Link
                className="text-white text-decoration-none"
                href="/performance/industries"
              >
                <h5 className="mb-3 fw-bold">Industries</h5>
              </Link>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/industries/appliances"
                  >
                    Appliances
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/industries/automobiles"
                  >
                    Automobiles
                  </Link>
                </li>
                {/* <li className="mb-2">
                  <Link className="text-white text-decoration-none" href="/">
                    Aviation
                  </Link>
                </li> */}
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/industries/beauty-wellness"
                  >
                    Beauty & Wellness
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/industries/fashion-accessories"
                  >
                    Fashion & Accessories
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/industries/hospitality"
                  >
                    Hospitality
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/industries/jewellery"
                  >
                    Jewelry
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/industries/ngos"
                  >
                    Not-for-Profits/NGOs
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/industries/technology-IT"
                  >
                    Tech/IT
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Column */}
            <div className="col-md-3 mb-4">
              <Link
                href="/mastery/about-us"
                className="text-white text-decoration-none"
              >
                <h5 className="mb-3 fw-bold">About iVistaz</h5>
              </Link>
              <ul className="list-unstyled">
                {/* <li className="mb-2">
                  <Link className="text-white text-decoration-none" href="/">
                    Performance Focus
                  </Link>
                </li> */}
                {/* <li className="mb-2">
                  <Link className="text-white text-decoration-none" href="/">
                    Company
                  </Link>
                </li> */}
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/our-team"
                  >
                    Team
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/our-clients"
                  >
                    Clients
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/careers"
                  >
                    Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/contact-us"
                  >
                    Contact
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/mastery-art-performance"
                  >
                    M.A.P
                  </Link>
                </li>

                <li className="mt-3 fw-bold mb-2">
                  <Link
                    className="text-white text-decoration-none fw-bold"
                    href="/case-studies"
                  >
                    Case Studies
                  </Link>
                </li>
                <li className="fw-bold mb-2">
                  <Link
                    className="text-white text-decoration-none fw-bold"
                    href="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="mt-3 mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/privacy-policy"
                  >
                    Privacy Statement
                  </Link>
                </li>
                {/* <li className="mb-2">
                  <Link
                    className="text-white text-decoration-none"
                    href="/statement"
                  >
                    Statement
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media and Privacy Policy Section */}
      <Container
        className="iv-grey px-1 py-2 z-4 position-relative d-flex "
        fluid
      >
        <Container className="text-centre ">
          <Row className="g-0">
            <Col className="d-flex align-items-center justify-content-center">
              <p className="footer-text">Follow Us:</p>
              <Link
                href="https://www.linkedin.com/company/ivistawebsolutions/mycompany/"
                target="_blank"
              >
                <Image
                  src="/images/linkerin_icon.svg"
                  width={43}
                  height={43}
                  className="social"
                  alt=""
                />
              </Link>
              <Link
                href="https://www.instagram.com/ivistawebsolutions/"
                target="_blank"
              >
                <Image
                  src="/images/insta_icon.svg"
                  width={44}
                  height={44}
                  className="social"
                  alt=""
                />
              </Link>
              <Link
                href="https://www.facebook.com/ivistasolutions/"
                target="_blank"
              >
                <Image
                  src="/images/facebook_icon.svg"
                  width={30}
                  height={30}
                  className="social"
                  alt=""
                />
              </Link>
              <Link
                href="https://twitter.com/ivistasolutions?lang=en"
                target="_blank"
              >
                <Image
                  src="/images/x_icon.svg"
                  width={44}
                  height={44}
                  className="social"
                  alt=""
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Common Footer Section */}
      <Container
        className="bg-black pt-1 pb-1 z-2 ps-0 position-relative"
        fluid
      >
        <Container className="text-center copyright p-0">
          <div className="d-flex flex-lg-row flex-column gap-lg-5 gap-1 col-lg-12">
            <div className="col-lg-9 text-lg-start text-center">
              <p className="mb-0" style={{ fontSize: "17px" }}>
                © {currentYear} iVistaz Ecom Services Pvt. Ltd.
              </p>
            </div>

            <div className="text-lg-start text-center">
              <Link
                href="/privacy-policy"
                className="text-decoration-none text-white para-text "
                style={{ fontSize: "14px" }}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </Container>
      </Container>
      <CollectChatScript />
    </>
  );
};

export default NewFooter;
