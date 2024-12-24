"use client";
import React from "react";
import Footer from "../../../components/Footer";
import ScrollAnimation from "../../../components/SharedComponents/ScrollAnimation";
import Header from "../../../components/HeaderBlack";
import NewMastery from "../../../components/ivistaz/NewMastery";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MasteryArtPerformance = () => {
    const pathname = usePathname();
    const [domainName, setDomainName] = useState("");
  
    const title = " Mastery in Art Performance Marketing";
    const description =
      "Achieve mastery in art performance marketing with iVistaz. Our specialized strategies help artists and performers increase their online visibility and reach, ensuring their talents are showcased to the right audience.";
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

      <Header />
      <ScrollAnimation />
      <div className="custom-container">
        <NewMastery />
        <Footer />
      </div>
    </>
  );
};

export default MasteryArtPerformance;
