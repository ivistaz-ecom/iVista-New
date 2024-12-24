"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import CollectChatScript from "./ChatBot";
import CookieConsent from "react-cookie-consent";
import { GoPlus } from "react-icons/go";

function Footer() {
  const [showConsent, setShowConsent] = useState(false);

  const currentYear = new Date().getFullYear();

  const [isShow, setIsShow] = useState(true);
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);

  const handleOnclickFunction = () => {
    setIsShow(true);
    setIsShow1(false);
    setIsShow2(false);
    setIsShow3(false);
  };
  const handleOnclickFunction1 = () => {
    setIsShow1(true);
    setIsShow(false);
    setIsShow2(false);
    setIsShow3(false);
  };
  const handleOnclickFunction2 = () => {
    setIsShow1(false);
    setIsShow(false);
    setIsShow2(!isShow2);
    setIsShow3(false);
  };
  const handleOnclickFunction3 = () => {
    setIsShow1(false);
    setIsShow(false);
    setIsShow2(false);
    setIsShow3(!isShow3);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConsent(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Container fluid className="iv-bg p-0 z-2 position-relative shadow-lg">
        <Container className="w-80 p-12 d-lg-block d-none p-0 py-2">
          <Row>
            <Col className="f-head p-0" lg={3}>
              COMPANY
            </Col>
            <Col className="f-head p-0" lg={3}>
              <Link
                href="/art/services"
                className="text-decoration-none text-white"
              >
                SERVICES
              </Link>
            </Col>

            <Col className="f-head p-0" lg={3}>
              <Link
                href="/performance/industries"
                className="text-decoration-none text-white"
              >
                INDUSTRIES
              </Link>
            </Col>
            <Col className="f-head p-0" lg={3}>
              <Link
                href="/mastery/solutions"
                className="text-decoration-none text-white"
              >
                SOLUTIONS
              </Link>
            </Col>
          </Row>
        </Container>

        <Row className="w-80 p-4 d-lg-none d-flex"></Row>
      </Container>

      <Container
        fluid
        className="bg-black z-2 position-relative p-lg-0 px-4 footer-main d-lg-flex d-none"
      >
        <Container className="w-80 p-12 p-0 py-2">
          <Row>
            {/* ABOUT IVISTAZ */}
            <Col className="footer p-0" lg={3}>
              <Col className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2" lg={3}>
                IVISTAZ
              </Col>
              <ul>
                {/* <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Performance Focus
                                    </Link>
                                </li> */}
                <li>
                  {/* <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Company
                                    </Link> */}
                </li>
                <li>
                  <Link
                    href="/mastery/about-us"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-team"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-clients"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Clients
                  </Link>
                </li>

                <Link
                  href="/careers"
                  className="text-decoration-none text-white custom-footer-font"
                >
                  Careers
                </Link>

                <li>
                  <Link
                    href="/contact-us"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Contact Us
                  </Link>
                </li>

                {/* <li>
                                    <Link href="/privacy-policy" className='text-decoration-none text-white custom-footer-font'>
                                        Privacy Policy
                                    </Link>
                                </li> */}

                {/* <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Statement
                                    </Link>
                                </li> */}
                {/* <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Disclaimer
                                    </Link>
                                </li> */}
              </ul>
            </Col>

            {/* SERVICES */}
            <Col className="footer p-0" lg={3}>
              <Col className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2" lg={3}>
                <Link
                  href="/art/services"
                  className="text-decoration-none text-white"
                >
                  SERVICES
                </Link>
              </Col>
              <ul>
                <li>
                  <Link
                    href="/service/content-development-b2b-b2c"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Content Development (B2B & B2C)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/design"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/search-engine-marketing"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Search Engine Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/search-engine-optimization"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/social-media-marketing"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/organic-social-media"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Social Media - Organic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/website-design-and-development"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Web Design & Development
                  </Link>
                </li>

                {/* <li>
                                    <Link href="service/website-design-and-development" className='text-decoration-none text-white custom-footer-font'>
                                        Videos
                                    </Link>
                                </li> */}
              </ul>
            </Col>

            {/* INDUSTRIES */}
            <Col className="footer p-0" lg={3}>
              <Col className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2" lg={3}>
                <Link
                  href="/performance/industries"
                  className="text-decoration-none text-white"
                >
                  INDUSTRIES
                </Link>
              </Col>
              <ul>
                <li>
                  <Link
                    href="/industries/appliances"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Appliances
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/automobiles"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Automobiles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/beauty-wellness"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Beauty & Wellness
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/fashion-accessories"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Fashion & Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/hospitality"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Hospitality
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/jewellery"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Jewelry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/ngos"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Not-for-Profit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/technology-IT"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Tech/IT
                  </Link>
                </li>
              </ul>
            </Col>

            {/*SOLUTIONS*/}
            <Col className="footer p-0" lg={3}>
              <Col className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2" lg={2}>
                <Link
                  href="/mastery/solutions"
                  className="text-decoration-none text-white"
                >
                  SOLUTIONS
                </Link>
              </Col>
              <ul>
                <li>
                  <Link
                    href="/mastery/solutions#traffic"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Traffic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mastery/solutions#leadgen"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Lead-gen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mastery/solutions#onlinesales"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Online Sales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mastery/solutions#exp"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    User Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mastery/solutions#value"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Value Creation
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Socil Media */}
      <Container
        className="iv-grey pt-2 pb-2 z-2 position-relative  d-lg-block d-none "
        fluid
      >
        <Container className="text-lg-center text-start">
          <Row className="g-0">
            <Col className="d-flex align-items-center justify-content-end">
              <p className="footer-text">Follow Us:</p>
            </Col>
            <Col className="d-flex align-items-center justify-content-start">
              <Link
                href="https://www.linkedin.com/company/ivistawebsolutions/mycompany/"
                target="_blank"
              >
                <Image
                  src="/images/linkedin.svg"
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
                  src="/images/instagram.svg"
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
                  src="/images/facebook.svg"
                  width={40}
                  height={40}
                  className="social"
                  alt=""
                />
              </Link>
              <Link
                href="https://twitter.com/ivistasolutions?lang=en"
                target="_blank"
              >
                <Image
                  src="/images/twitter.svg"
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

      {/* Mobile Footer */}
      <Container
        fluid
        className="bg-black z-2 position-relative p-lg-0 px-4 footer-main d-lg-none d-flex"
      >
        <Row>
          {/* ABOUT IVISTAZ */}
          <Col className="footer p-0" lg={3}>
            <Col
              className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2 w-100"
              lg={3}
              onClick={handleOnclickFunction}
            >
              <Row className="d-flex flex-row justify-content-between w-100">
                <Col>COMPANY</Col>
                <Col className="d-flex flex-column align-items-end">
                  <GoPlus />
                </Col>
              </Row>
            </Col>
            {isShow && (
              <ul>
                {/* <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Performance Focus
                                    </Link>
                                </li> */}
                <li>
                  {/* <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Company
                                    </Link> */}
                </li>
                <li>
                  <Link
                    href="/mastery/about-us"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-team"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-clients"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Contact Us
                  </Link>
                </li>

                {/* <li>
                                    <Link href="/privacy-policy" className='text-decoration-none text-white custom-footer-font'>
                                        Privacy Policy
                                    </Link>
                                </li> */}

                {/* <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Statement
                                    </Link>
                                </li> */}
                {/* <li>
                                    <Link href="#" className='text-decoration-none text-white custom-footer-font'>
                                        Disclaimer
                                    </Link>
                                </li> */}
              </ul>
            )}
          </Col>

          {/* SERVICES */}
          <Col className="footer p-0" lg={3}>
            <Col
              className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2"
              lg={3}
              onClick={handleOnclickFunction1}
            >
              {/* <Link href="/art/services" className='text-decoration-none text-white' > */}
              {/* SERVICES */}
              {/* </Link> */}
              <Row className="d-flex flex-row justify-content-between w-100">
                <Col>SERVICES</Col>
                <Col className="d-flex flex-column align-items-end">
                  <GoPlus />
                </Col>
              </Row>
            </Col>

            {isShow1 && (
              <ul>
                <li>
                  <Link
                    href="/service/content-development-b2b-b2c"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Content Development (B2B & B2C)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/design"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/search-engine-marketing"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Search Engine Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/search-engine-optimization"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/social-media-marketing"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/organic-social-media"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Social Media - Organic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service/website-design-and-development"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Web Design & Development
                  </Link>
                </li>

                {/* <li>
                                    <Link href="service/website-design-and-development" className='text-decoration-none text-white custom-footer-font'>
                                        Videos
                                    </Link>
                                </li> */}
              </ul>
            )}
          </Col>

          {/* INDUSTRIES */}
          <Col className="footer p-0" lg={3}>
            <Col
              className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2"
              lg={3}
              onClick={handleOnclickFunction2}
            >
              {/* INDUSTRIES */}
              <Row className="d-flex flex-row justify-content-between w-100">
                <Col>INDUSTRIES</Col>
                <Col className="d-flex flex-column align-items-end">
                  <GoPlus />
                </Col>
              </Row>
            </Col>
            {isShow2 && (
              <ul>
                <li>
                  <Link
                    href="/industries/appliances"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Appliances
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/automobiles"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Automobiles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/beauty-wellness"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Beauty & Wellness
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/fashion-accessories"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Fashion & Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/hospitality"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Hospitality
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/jewellery"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Jewelry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/ngos"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Not-for-Profit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/technology-IT"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Tech/IT
                  </Link>
                </li>
              </ul>
            )}
          </Col>

          {/*SOLUTIONS*/}
          <Col className="footer p-0" lg={3}>
            <Col
              className="f-head d-lg-none d-flex py-lg-0 py-3 pb-2"
              lg={2}
              onClick={handleOnclickFunction3}
            >
              <Row className="d-flex flex-row justify-content-between w-100">
                <Col>SOLUTIONS</Col>
                <Col className="d-flex flex-column align-items-end">
                  <GoPlus />
                </Col>
              </Row>
            </Col>
            {isShow3 && (
              <ul>
                <li>
                  <Link
                    href="/mastery/solutions#traffic"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Traffic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mastery/solutions#leadgen"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Lead-gen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mastery/solutions#onlinesales"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Online Sales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mastery/solutions#exp"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    User Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mastery/solutions#value"
                    className="text-decoration-none text-white custom-footer-font"
                  >
                    Value Creation
                  </Link>
                </li>
              </ul>
            )}
          </Col>
        </Row>
      </Container>

      {/* Socil Media */}
      <Container
        className="iv-grey px-1 py-2 z-2 position-relative d-lg-none d-flex"
        fluid
      >
        <Container className="text-start">
          <Row className="g-0">
            <Col className="d-flex align-items-center justify-content-start">
              <p className="footer-text">Follow Us:</p>
              <Link
                href="https://www.linkedin.com/company/ivistawebsolutions/mycompany/"
                target="_blank"
              >
                <Image
                  src="/images/linkedin.svg"
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
                  src="/images/instagram.svg"
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
                  src="/images/facebook.svg"
                  width={40}
                  height={40}
                  className="social"
                  alt=""
                />
              </Link>
              <Link
                href="https://twitter.com/ivistasolutions?lang=en"
                target="_blank"
              >
                <Image
                  src="/images/twitter.svg"
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

      {/* Common  */}

      <Container
        className="bg-black pt-1 pb-1 z-2 ps-0 position-relative"
        fluid
      >
        <Container className="text-center copyright  p-0">
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
      {/* ChatBot */}
      <CollectChatScript />

      {/* Cookie */}
      {showConsent && (
        <CookieConsent
          enableDeclineButton
          flipButtons
          location="bottom"
          buttonText="Accept All"
          declineButtonText="Decline"
          cookieName="YourCookieName"
          style={{
            background: "#ffff",
            color: "black",
            fontFamily: '"monument regular", sans-serif',
          }}
          buttonStyle={{
            backgroundColor: "green",
            color: "white",
            fontSize: "15px",
            fontFamily: '"monument regular", sans-serif',
          }}
          declineButtonStyle={{
            margin: "10px 10px 10px 0",
            fontFamily: '"monument regular", sans-serif',
          }}
          expires={450}
        >
          We use cookies on our website to give you the most relevant experience
          by remembering your preferences and repeat visits. By clicking “Accept
          All”, you consent to the use of ALL the cookies. However, you may
          visit "Cookie Settings" to provide a controlled consent.
        </CookieConsent>
      )}
    </>
  );
}

export default Footer;
