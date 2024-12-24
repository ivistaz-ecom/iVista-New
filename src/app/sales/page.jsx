"use client";
import React, { useState } from "react";
import SalesComponents from "../../../components/SalesComponents";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  const title = " Boost Sales with Expert Digital Marketing";
  const description =
    "Maximize your sales potential with iVistaz's cutting-edge digital marketing solutions. Our tailored strategies focus on driving sales and increasing ROI, ensuring your business achieves sustained growth in a competitive market.";
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

      <SalesComponents />
    </>
  );
};

export default page;
