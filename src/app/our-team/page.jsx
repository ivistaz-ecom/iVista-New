"use client";
import React from "react";
// import OurTeamComponents from "../../../components/OurTeamComponents";
import OurTeamComponents from "../../../components/OurTeamComponents/index";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { useState } from "react";

const page = () => {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  const title = "Meet the iVistaz Team";
  const description =
    "Get to know the talented team behind iVistaz. Our digital marketing experts are dedicated to helping your business succeed with innovative strategies and personalized service.";
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
      <OurTeamComponents />
    </>
  );
};

export default page;
