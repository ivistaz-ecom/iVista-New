"use client"
import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import CountUp from 'react-countup';
import Link from 'next/link';
import Footer from '../../../components/Footer';
import Header1 from '../../../components/HeaderBlack';
import { CiCircleChevRight } from "react-icons/ci";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { useState } from "react";



function page() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  const title = "Art Marketing Solutions ";
  const description =
    "Promote your art with iVistaz's specialized marketing solutions. We help artists and galleries increase their online presence and connect with art enthusiasts, ensuring your work reaches a broader audience.";
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
      <Container fluid className=" d-flex flex-column justify-content-between min-vh-100">
        <Image src="/images/h-icon.svg" className="header-icon d-lg-flex d-none overflow-hidden" alt='' />

        <Container className="w-80 custom-container">
          {/* Bread-crumb */}
          <div className='d-flex flex-row align-items-center mb-3 flex-nowrap'>
            <p>
              <Link href="/welcome"
                className='text-decoration-none '>
                <span className='fs-6 text-black mb-0 px-1'>Home</span>
              </Link>
              <CiCircleChevRight fill='red' />
              <Link href=""
                className='text-decoration-none px-1'>
                <span className='fs-6 text-decoration-none text-black mb-0'>Art</span>
              </Link></p>
          </div>
          <Col>
            <h1 className="fs-70 fw-bold">ART</h1>
          </Col>
          <Row>
            <Col className="" lg={8}>
              <p className="art-text"><span className='fst-italic fw-bold'>“It’s not what you look that matters, it’s what you see.”</span> – Henry David Thoreau</p>
              <p className="art-text"> A picture may speak a thousand words but an action speaks louder than them. Therefore, we create digital experiences that lead to meaningful conversations and convert to qualified leads.</p>
              <Container className="mt-5 pb-5 margin-left">
                <Link href="/art/services" className="btn btn-11 z-0">Services</Link>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container className="w-80 pb-3">
          <Row className='d-flex flex-lg-row flex-column-reverse'>
            <Col className="d-flex justify-content-end flex-column py-4 py-lg-3">
              {/* <Container className=" margin-left d-lg-flex d-none flex-lg-row flex-column">
                <Link href="/mastery" className="arts-text">MASTERY</Link>
                <Link href="/performance" className="arts-text mx-lg-5">PERFORMANCE</Link>
              </Container> */}
            </Col>
            <Col className="">
              <Image src="/images/arts.svg" className="arts-img" alt='' />
            </Col>
          </Row>
          {/* <Container className="mt-5 margin-left d-flex d-lg-none pb-4 pb-lg-0">
            <Link href="/mastery" className="arts-text">MASTERY</Link>
            <Link href="/performance" className="arts-text mx-lg-5 mx-4">PERFORMANCE</Link>
          </Container> */}
        </Container>
      </Container>
      <Footer />
    </>
  )
}

export default page