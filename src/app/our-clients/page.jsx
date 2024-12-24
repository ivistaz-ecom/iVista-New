'use client'
import React from "react";
import OurClinetsComponents from "../../../components/OurClientsComponents";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { useState } from "react";


const page = () => {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  const title = "Our Clients";
  const description =
    " Discover the diverse range of clients we serve at iVistaz. Our success stories highlight the impact of our tailored digital marketing strategies across various industries.";
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
        <OurClinetsComponents />
      </div>
    </>
  );
};

export default page;
