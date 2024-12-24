"use client";
import React, { useState } from "react";
import EngagementComponents from "../../../components/EngagementComponents";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  const title = " Enhance Customer Engagement ";
  const description =
    "Engage your audience with compelling content and interactive strategies from iVistaz. Our services are designed to increase customer loyalty and drive meaningful interactions, helping you build stronger relationships with your audience.";
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
      <div>
        <EngagementComponents />
      </div>
    </>
  );
};

export default page;
