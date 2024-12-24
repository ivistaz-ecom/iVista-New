"use client";
import React, { useState } from "react";
import LeadsComponents from "../../../components/LeadsComponents";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  const title = "Generate Quality Leads ";
  const description =
    "Attract and convert high-quality leads with iVistaz. Our comprehensive lead generation strategies are designed to optimize your marketing efforts, ensuring a steady flow of potential customers ready to engage with your brand.";
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

      <LeadsComponents />
    </>
  );
};
export default page;
