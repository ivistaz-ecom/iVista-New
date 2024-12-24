"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header1 from "../../../components/HeaderBlack";
import NweHomePage from "../../../components/NewHomePage";
import NewFooter from "../../../components/NewFooter";


function page() {
//   const pathname = usePathname();
//   const [domainName, setDomainName] = useState("");

//   const title = "Join the iVistaz Team ";
//   const description =
//     "Looking for a dynamic career in digital marketing? Join the iVistaz team and be part of an innovative company dedicated to driving success for our clients. Explore our career opportunities today.";
//   const path = `${pathname}`;
//   const metaImage = "";

  return (
    <>
      {/* <SeoComponents
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      /> */}
      <Header1 />
      <Container className="bg-white p-0" fluid>
        <NweHomePage />
        <NewFooter />
      </Container>
    </>
  );
}

export default page;
