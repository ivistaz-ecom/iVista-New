"use client";

import React from "react";
import BlogComponents from "../../../components/BlogsComponentes/";
import { Container } from "react-bootstrap";
import Header1 from "../../../components/HeaderBlack";
import Footer from "../../../components/Footer";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { useState } from "react";

function page() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  const title = "Digital Marketing Insights & Tips";
  const description =
    " Stay updated with the latest digital marketing insights and tips on the iVistaz blog. Our expert articles provide valuable information on SEO, social media, content marketing, and more to help you stay ahead in the digital landscape.";
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
      <Container fluid className="p-0 bg-black">
        <BlogComponents />
        <Footer />
      </Container>
    </>
  );
}

export default page;
