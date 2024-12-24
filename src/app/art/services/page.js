"use client";
import React, { useState, useEffect } from "react";
import Header1 from "../../../../components/HeaderBlack";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../../components/Footer";
import ScrollAnimationArt from "../../../../components/SharedComponents/ScrollAnimationArt";
import SeoComponents from "../../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { CiCircleChevRight } from "react-icons/ci";

function Page() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = " Performance-focused digital marketing services";
  const description =
    "At iVistaz, digital marketing services are tailored for optimal performance for the business, ensuring results are delivered.";
  const path = `${pathname}`;
  const metaImage = "";

  return (
    <>
      <SeoComponents
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />

      <ScrollAnimationArt />
      <Header1 />
      <Container fluid className="mb-lg-4 mb-0 p-0">
        <img
          src="/images/h-icon.svg"
          className="header-icon d-none d-lg-block d-sm-none"
          alt="Header Icon"
        />
        <Container fluid className="bg-white z-3 p-0 mb-0">
          <div className="custom_height_art_top"></div>
          <article>
            <div className="timeline4">
              <Container className="w-80 custom-container position-relative bg-white">
                {/* <h1 className="fs-80 fw-bold ps-6">ART</h1> */}

                {/* Bread-crumb */}
                <div className="d-flex flex-row align-items-center mb-3 flex-nowrap ps-6">
                  <p>
                    <Link href="/welcome" className="text-decoration-none ">
                      <span className="fs-6 text-black mb-0 px-1">Home</span>
                    </Link>
                    <span className="px-1">
                      <CiCircleChevRight fill="red" />
                    </span>
                    <Link href="/art" className="text-decoration-none ">
                      <span className="fs-6 text-black mb-0 px-1">Art</span>
                    </Link>
                    <span className="px-1">
                      <CiCircleChevRight fill="red" />
                    </span>
                    <Link href="" className="text-decoration-none px-1">
                      <span className="fs-6 text-decoration-none text-black mb-0">
                        Services
                      </span>
                    </Link>
                  </p>
                </div>
              </Container>
              <Container className="banner w-80 mb-0 z-3">
                <Row className="d-flex align-items-start">
                  <Col lg={12} className="position-relative">
                    <div className="position-relative">
                      <div className="timeline-badge4 mt-4"></div>
                      <div className="ps-6">
                        <h1 className="fs-21 fw-bold text-red position-relative">
                          Services
                        </h1>
                        <p className="para-text text-black">
                          At the core of everything we do lies the art of
                          transforming exceptional services into extraordinary
                          results with effective digital marketing techniques.
                          We are dedicated to crafting and curating tailored
                          digital marketing solutions that exceed your
                          expectations. Whether it’s a comprehensive package for
                          content creation and design or a single service, we’re
                          here to help brands achieve more than what they wish
                          for. And the best part? We have a{" "}
                          <Link href="/mastery/about-us" className="red">
                            performance-based digital marketing model
                          </Link>
                          . This means we get paid only when we deliver results.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <div className="row bg-white z-3 ps-6 pt-lg-5">
                    {/* Service Columns */}

                    {[
                      {
                        src: "/images/Content_Development.svg",
                        title: "Content Development",
                        subtitle: "(B2B & B2C)",
                        link: "/service/content-development-b2b-b2c",
                      },
                      {
                        src: "/images/Design.svg",
                        title: "Design",
                        link: "/service/design",
                      },
                      {
                        src: "/images/Search_Engine_Marketing.svg",
                        title: "Search Engine Marketing",
                        link: "/service/search-engine-marketing",
                      },
                      {
                        src: "/images/Search_Engine_Optimization.svg",
                        title: "Search Engine Optimization",
                        link: "/service/search-engine-optimization",
                      },
                      {
                        src: "/images/Social_Media_Marketing.svg",
                        title: "Social Media Marketing",
                        link: "/service/social-media-marketing",
                      },
                      {
                        src: "/images/Social_Media-Organic.svg",
                        title: "Social Media - Organic",
                        link: "/service/organic-social-media",
                      },
                      // { src: "/images/Web_Design.svg", title: "Web Design & Development", link: "/website-design-and-development" }
                    ].map((service, index) => (
                      <Col lg={4} key={index} className="mt-3 m-2 m-lg-0">
                        <div className="d-flex flex-column align-items-center text-center">
                          <div>
                            <img src={service.src} alt={service.title} />
                          </div>
                          <div className=" p-4">
                            <Link
                              className="text-decoration-none txt-danger"
                              href={service.link}
                            >
                              <p className="para-text mb-0">{service.title}</p>
                              {service.subtitle && (
                                <p className="para-text">{service.subtitle}</p>
                              )}
                            </Link>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </div>
                </Row>
                <Container>
                  <Row className="d-flex align-items-start bg-white p-0 position-relative">
                    <Col lg={4} className="mt-4 ps-8 position-relative">
                      <div className="d-flex flex-column align-items-center text-start">
                        <div className="">
                          <img src="/images/Web_Design.svg" />
                        </div>
                        <div className=" p-4">
                          <Link
                            className="text-decoration-none txt-danger text-center"
                            href="/service/website-design-and-development"
                          >
                            <p className="para-text mb-0">
                              Web Design & Development
                            </p>
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>
                </Container>
              </Container>
              <div className="custom_height_art_bottom"></div>
            </div>
          </article>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default Page;
