"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button, Image, CloseButton } from 'react-bootstrap'
import BannerAllPage from '../../PropsShared/BannerAllPage';
import SeoComponents from '../../../components/SeoComponents/Seo'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { CiCircleChevRight } from "react-icons/ci";



function HeroBanner() {

  const pathname = usePathname();
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = "Strengthening market share in Indian Automobile Industry";
  const description = "As India sees transformative growth at global levels for the automobile industry, digital marketing services are imperative to grow brand networks.";
  const path = `${pathname}`;
  const metaImage = "";

  const backgroundImage = {
    url: '/industrie/automobile_banner.jpg'
  };

  const bannerHeading = 'AUTOMOBILES'

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/automobile_mobile_banner.jpg'
  }

  return (
    <>
      <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />

      <Container className='bg-black z-3 position-relative p-0' fluid>
        <Container className="w-80 custom-container">
          <Row className="d-flex align-items-center">
          <Col className='d-flex flex-row flex-wrap align-items-center mb-3'>
              <Link href="/performance/industries"
                className='text-decoration-none '>
                <h6 className='text-white mb-0 px-1'>Industries</h6>
              </Link>
              <CiCircleChevRight fill='white' />
              <Link href=""
                className='text-decoration-none px-1'>
                <h6 className='text-decoration-none text-white mb-0'>Automobiles</h6>
              </Link>
            </Col>
            <BannerAllPage backgroundImage={backgroundImage} bannerHeading={bannerHeading} mobileBackgroundImage={mobileBackgroundImage} />
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default HeroBanner
