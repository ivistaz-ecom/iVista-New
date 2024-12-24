"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Header1 from "../../../components/HeaderBlack";
import CaseStudiesFetchDataIndex from "../../../components/CaseStudies";
import Footer from "../../../components/Footer";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { useState } from "react";

function HeroBanner() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  const title = "Success Stories & Case Studies";
  const description =
    "Explore our success stories and case studies to see how iVistaz has helped businesses achieve their marketing goals. Learn from our proven strategies and discover how we can drive success for your brand.";
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
      <Container className="bg-black" fluid>
        <CaseStudiesFetchDataIndex />
        <Footer />
      </Container>
    </>
  );
}

export default HeroBanner;
