"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ItAndTechFirms from '../../../components/ITandTechFirmsComponent/index'
import Header1 from '../../../components/HeaderBlack'
import Footer from '../../../components/Footer'
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";

function page() {
    const pathname = usePathname();
    const [domainName, setDomainName] = useState("");

    const title = "AI-Powered Marketing for Mid-Sized IT & Tech Firms | iVistaz​";
    const description =
        "Transform your digital marketing with AI. iVistaz helps mid-sized IT and tech firms shift from traditional outreach to real-time, decision-shaping strategies.";
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
            <ItAndTechFirms />
            <Footer />
        </>
    );
}

export default page;
