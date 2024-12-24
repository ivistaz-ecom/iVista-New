"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap';
import HomeBanner from '../../../../components/Industries/HomeBanner';
import Header1 from '../../../../components/HeaderBlack';
import Footer from '../../../../components/Footer';
import SeoComponents from '../../../../components/SeoComponents/Seo'
import { usePathname } from 'next/navigation'
import { CiCircleChevRight } from "react-icons/ci";
import Link from 'next/link';

function page() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = " Digital marketing services across industries";
  const description = "By embracing innovative solutions and a passion for creating exceptional performances, iVistaz delivers expert digital marketing services for various industries.";
  const path = `${pathname}`;
  const metaImage = "";
  return (
    <>

      <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />
      <Header1 />
      <Container fluid className="iv-bg p-0">
        <div className='custom_height_per_top'></div>
        <Container className='w-80 custom-container iv-bg position-relative z-3 mb-0 mt-0'>
          {/* <Container className="w-80 custom-container position-relative iv-bg z-3">
          <h1 className="text-offwhite fs-80 fw-bold z-3 pt-4 py-4">
            PERFORMANCE
          </h1>
         </Container> */}


          {/* Bread-crumb */}
          <div className='d-flex flex-row align-items-center mb-3 flex-nowrap '>
            <p>
              <Link href="/welcome"
                className='text-decoration-none '>
                <span className='fs-6 text-white mb-0 px-1'>Home</span>
              </Link>
              <span className='px-1'>
                <CiCircleChevRight fill='white' />
              </span>
              <Link href="/performance"
                className='text-decoration-none '>
                <span className='fs-6 text-white mb-0 px-1'>Performance</span>
              </Link>
              <span className='px-1'>
                <CiCircleChevRight fill='white' />
              </span>
              <Link href=""
                className='text-decoration-none px-1'>
                <span className='fs-6 text-decoration-none text-white mb-0'>Industries</span>
              </Link></p>
          </div>
        </Container>
        <HomeBanner />
        <div className='custom_height_per_bottom'></div>
        <Footer />
      </Container>
    </>

  )
}

export default page
