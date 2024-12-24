"use client"
import React, { useState, useEffect, useRef } from 'react'
import Header1 from '../../../components/HeaderBlack'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '../../../components/Footer';
import SeoComponents from '../../../components/SeoComponents/Seo'
import { usePathname } from 'next/navigation'
import { CiCircleChevRight } from "react-icons/ci";

function performance() {

  const pathname = usePathname();
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = "Performance Marketing Excellence ";
  const description = "Experience performance marketing excellence with iVistaz. Our data-driven strategies and innovative solutions ensure your marketing campaigns deliver maximum ROI and drive business growth.";
  const path = `${pathname}`;
  const metaImage = "";

  return (
    <>

      <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />
      <Header1 />

      <Container fluid className="iv-bg border-bottom d-flex flex-column justify-content-between min-vh-100 p-0 m-0">

        <Container className="w-80 mb-5 custom-container">
          {/* Bread-crumb */}
          <div className='d-flex flex-row align-items-center mb-3 flex-nowrap'>
            <p>
              <Link href="/welcome"
                className='text-decoration-none '>
                <span className='fs-6 text-white mb-0 px-1'>Home</span>
              </Link>
              <span className='px-1'>
                <CiCircleChevRight fill='white' />
              </span>
              <Link href=""
                className='text-decoration-none px-1'>
                <span className='fs-6 text-decoration-none text-white mb-0'>Performance</span>
              </Link></p>
          </div>

          <Col>
            <h1 className="text-white fs-70 fw-bold mb-5 text-start">PERFORMANCE</h1>
          </Col>
          <Row className='d-flex flex-lg-row flex-column justify-content-between'>
            <Col className="d-flex flex-column justify-content-between p-0" lg={7}>
              <Container className='text-start'>
                <p className="mastery-text">
                  <span className='fst-italic fw-bold'>“Behind every brilliant performance there were countless hours of practice and preparation.”</span> – Eric Butterworth
                </p>
                <p className="mastery-text">
                  We work in collaboration with our clients to design digital journeys that create experiences that people will never forget; and for that we intend to deliver performance beyond expectations.
                </p>
                <p className="mastery-text">
                  By creating high-performing digital marketing campaigns, we increase website traffic with SEO and content marketing. Through transformative digital experience design and performance optimization strategies, we make sure we deliver exactly what the client needs, and more.
                </p>
                <Container className="mt-3 pb-5 margin-left d-flex flex-column justify-content-center">
                  <div className='d-flex flex-lg-row flex-column gap-3'>
                    <div className='text-start'>
                      <Link href="/performance/industries" className="btn btn-13 b-width z-0">Industries</Link>
                    </div>
                    <div className='text-start'>
                      <Link href="/case-studies" className="btn btn-13 b-width z-0">Case Studies</Link>
                    </div>
                  </div>
                </Container>
              </Container>

              <Container className="margin-left d-lg-flex d-none mt-5 ps-4">
                {/* <Col className=''>
                  <Link href="/art" className="perform-text">ART</Link>
                  <Link href="/mastery" className="perform-text mx-5">MASTERY</Link>
                </Col> */}
              </Container>
            </Col>

            <Col className="arts">
              <Image src="/images/performance_image.svg" className="performance-img img-fluid h-100" width={500} height={290} alt='' />
            </Col>
          </Row>

          {/* <Container className="margin-left d-lg-none d-flex mt-3">
            <Col className='ms-3'>
              <Link href="/art" className="perform-text">ART</Link>
              <Link href="/mastery" className="perform-text mx-5">MASTERY</Link>
            </Col>
          </Container> */}
        </Container>
      </Container>
      <Footer />

    </>
  )
}

export default performance