"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button, Image, CloseButton } from 'react-bootstrap'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from '../../PropsShared/BannerAllPage';
import ConfigData from '../../../config'
import SeoComponents from '../../../components/SeoComponents/Seo'
import { usePathname } from 'next/navigation'
import { CiCircleChevRight } from "react-icons/ci";



function HeroBanner() {

  const pathname = usePathname();
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = "Digital Marketing Solutions for Nonprofit Organizations | SEO, Social Media & Web Design";
  const description = "Maximize your nonprofit's impact with our comprehensive digital marketing services. From SEO and social media marketing to web design, we help NGOs and nonprofit organizations reach their audience and drive meaningful engagement.";
  const path = `${pathname}`;
  const metaImage = "";

  const backgroundImage = {
    url: '/industrie/ngos_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/NGOs_mob_banner.jpg'
  }

  const bannerHeading = 'NOT-FOR-PROFITS/ NGOs'

  return (
    <>

      <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />

      <Container fluid className='p-0 bg-black position-relative z-3'>
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
                <h6 className='text-decoration-none text-white mb-0'>Not-for-Profits/NGOs</h6>
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
