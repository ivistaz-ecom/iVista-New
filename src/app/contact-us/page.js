"use client"
import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import Header1 from '../../../components/HeaderBlack';
import Footer from '../../../components/Footer'; 
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import ContactusComponents from '../../../components/ContactUsComponents'


function page() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  const title = "Contact Us ";
  const description =
    "Reach out to iVistaz Ecom Services Pvt. Ltd. for business inquiries, service requests, or any assistance. Visit us at our Bengaluru office or follow us on social media for updates and support. Get started on your journey towards enhanced performance with iVistaz today.";
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
      <Container className="bg-black pb-5" fluid>
        <ContactusComponents />
      </Container>
      <Footer />
    </>
  )
}

export default page
