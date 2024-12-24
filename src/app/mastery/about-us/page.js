"use client";
import React from "react";
import Aboutus from "../../../../components/mastery/AboutUs";
import { Container } from "react-bootstrap";
import Header1 from "../../../../components/HeaderBlack";
import Footer from "../../../../components/Footer";
import Link from "next/link";
import { CiCircleChevRight } from "react-icons/ci";
import SeoComponents from "../../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { useState } from "react";

function page() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  const title = " About iVistaz";
  const description =
    "Learn more about iVistaz, a leading digital marketing agency committed to delivering exceptional results. Our team of experts specializes in performance marketing, branding, web development, and more.";
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

      <Header1 />
      <Container fluid className="bg-black pb-3">
        <div className="custom_height_top"></div>
        <Container className="w-80 custom-container bg-black position-relative z-3 mb-0">
          {/* <h1 className="text-offwhite fs-70 fw-bold text-start ps-5 mb-0">MASTERY</h1> */}
          {/* Bread-crumb */}
          <div className="d-flex flex-row align-items-center pb-3 flex-nowrap">
            <p>
              <Link href="/welcome" className="text-decoration-none ">
                <span className="fs-6 text-white mb-0 px-1">Home</span>
              </Link>
              <span className="px-1">
                <CiCircleChevRight fill="white" />
              </span>
              <Link href="/mastery" className="text-decoration-none ">
                <span className="fs-6 text-white mb-0 px-1">Mastery</span>
              </Link>
              <span className="px-1">
                <CiCircleChevRight fill="white" />
              </span>
              <Link href="" className="text-decoration-none px-1">
                <span className="fs-6 text-decoration-none text-white mb-0">
                  About Us
                </span>
              </Link>
            </p>
          </div>
        </Container>
        <Aboutus />
        <div className="custom_height_bottom"></div>
      </Container>
      <Footer />
    </>
  );
}

export default page;
