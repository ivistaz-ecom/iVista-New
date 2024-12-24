"use client";
import React, { useState } from "react";
import TrafficComponents from "../../../components/TrafficComponents";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  const title = " Increase Website Traffic";
  const description =
    "Drive more traffic to your website with iVistaz's proven strategies. Our expertise in SEO, content marketing, and social media will help you attract and retain visitors, boosting your online visibility and engagement.";
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
      <TrafficComponents />
    </>
  );
};

export default page;
