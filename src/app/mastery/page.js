"use client"
import React, { useState, useEffect } from 'react';
import Header1 from '../../../components/HeaderBlack'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import Footer from '../../../components/Footer';
import { CiCircleChevRight } from "react-icons/ci";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";


function page() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  const title = "Achieve Marketing Mastery ";
  const description =
    " Reach new heights of marketing mastery with iVistaz. Our expert team provides tailored strategies and insights to help you dominate your market and achieve long-term success.";
  const path = `${pathname}`;
  const metaImage = "";


  const [countVisible, setCountVisible] = useState([true, false, false, false]);

  const handleMouseEnter = (index) => {
    const newCountVisible = [false, false, false, false];
    newCountVisible[index] = true;
    setCountVisible(newCountVisible);
  };

  const handleMouseLeave = () => {
    setCountVisible([true, false, false, false]);
  };

  return (
    <>

      <style>
        {
          `

    .section.d-flex.flex-row.row {
        min-height: 250px;
      }

    @media(max-width:767px) {
    .counter-txt {
       font-size: 18px !important;
  }
    }
    `
        }
      </style>

      <SeoComponents
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />

      <Header1 />
      <Container fluid className="bg-black d-flex flex-column justify-content-between min-vh-100 bg-black" >
        <Container className="w-80 custom-container">
          <Col className='w-auto'>
          </Col>
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
                <span className='fs-6 text-decoration-none text-white mb-0'>Mastery</span>
              </Link></p>
          </div>

          <h1 className="text-white fs-90 fw-bold d-inline-block d-block mb-3">MASTERY</h1>
          <Row className='d-flex flex-lg-row flex-column-reverse'>
            {/* <h1 className="text-white fs-70 fw-bold d-inline-block d-lg-block d-none">MASTERY</h1> */}

            <Row className="section d-flex flex-row ">
              {/* <p className="mastery-text mastery-h" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>Years of Experience & Expertise</p>
              <p className="mastery-text mastery-h" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>Clients Served </p>
              <p className="mastery-text mastery-h" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>Online Revenue Generated</p>
              <p className="mastery-text mastery-h" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>Websites Designed and Developed</p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              {countVisible[0] && (
                <CountUp end={28} prefix="" className="counter" />
              )}
              {countVisible[1] && (
                <CountUp end={800} suffix="+" className="counter" />
              )}
              {countVisible[2] && (
                <CountUp end={6} prefix="$" suffix='B' className="counter" />
              )}
              {countVisible[3] && (
                <CountUp end={500} suffix='+' className="counter" />
              )} */}
              <Col lg={3} xs={6} className='text-center d-flex flex-column justify-content-between'>
                <Col>
                  <CountUp end={28} prefix="" className="counter" />
                </Col>
                <Col >
                  <h4 className='text-white text-center counter-txt'>
                    Years of Experience & Expertise
                  </h4>
                </Col>
              </Col>

              <Col lg={3} xs={6} className='text-center d-flex flex-column justify-content-between'>
                <Col>
                  <CountUp end={800} suffix="+" className="counter" />
                </Col>
                <Col >
                  <h4 className='text-white text-center counter-txt'>
                    Clients Served
                  </h4>
                </Col>
              </Col>

              <Col lg={3} xs={6} className='text-center d-flex flex-column justify-content-between'>
                <Col>
                  <CountUp end={6} prefix="$" suffix='B' className="counter" />
                </Col>
                <Col >
                  <h4 className='text-white text-center counter-txt'>
                    Online Revenue Generated
                  </h4>
                </Col>
              </Col>


              <Col lg={3} xs={6} className='text-center d-flex flex-column justify-content-between'>
                <Col>
                  <CountUp end={500} suffix='+' className="counter" />
                </Col>
                <Col >
                  <h4 className='text-white text-center counter-txt'>
                    Websites Designed and Developed
                  </h4>
                </Col>
              </Col>
            </Row>

          </Row>
        </Container>

        <Container className="w-80 mt-lg-0 mt-5">
          <div id="wrapper">
            <section id="content">
            </section>
          </div>
          <Row className='d-flex flex-lg-row flex-column-reverse'>
            <Col className="overflow d-flex flex-column justify-content-end align-items-center">
              <Image src="/images/mastery_image.svg" className=" img-fluid" width={300} height={200} alt='' />
            </Col>
            <Col className="">
              <p className="mastery-text"> <span className='fst-italic fw-bold'>“Mastery demands all of a person.” </span>– Albert Einstein</p>
              <p className="mastery-text">
                Years of being in the digital marketing landscape and working with over 300+ clients have given us insights into how to master every aspect of this dynamic industry. Want to know how we do it?
              </p>
              <Container className="mt-5 pb-3 margin-left d-flex flex-column justify-content-center">
                <div className='d-flex flex-lg-row flex-column gap-3 justify-content-start'>
                  <div className='text-start'>
                    <Link href="/mastery/about-us" className="btn btn-13 b-width z-3">About Us</Link>
                  </div>
                  <div className='text-start'>
                    <Link href="/mastery/solutions" className="btn btn-13 b-width z-3">Solutions</Link>
                  </div>
                </div>

                {/* <Container className="mt-5 margin-left d-lg-flex d-none pt-4 mb-0">
                  <Link href="/art" className="text">ART</Link>
                  <Link href="/performance" className="text mx-lg-5 mx-4">PERFORMANCE</Link>
                </Container> */}
              </Container>
            </Col>
          </Row>

          {/* <Container className="mt-5 margin-left d-flex d-lg-none pb-4 pb-lg-0">
            <Link href="/art" className="text">ART</Link>
            <Link href="/performance" className="text mx-lg-5 mx-4">PERFORMANCE</Link>
          </Container> */}

        </Container>
      </Container>

      <Footer />
    </>
  )
}

export default page