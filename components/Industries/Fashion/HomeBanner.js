'use client'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image, CloseButton } from 'react-bootstrap'
// import Image from 'next/image'
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

  const title = "Digital Marketing Solutions for Fashion Brands | Increase Online Sales & Social Engagement";
  const description = "Unlock the potential of your fashion brand with our tailored digital marketing services. From increasing online sales for fashion accessories to enhancing social media engagement, we help bridge the gap between online visitors and sales while creating curated online experiences to strengthen brand loyalty. Discover how our expertise can elevate your brand's online presence and drive growth in the dynamic fashion industry.";
  const path = `${pathname}`;
  const metaImage = "";

  const backgroundImage = {
    url: '/industrie/fashion_and_accessories_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/fashion_and_accessories_mob_banner.jpg'
  }

  const bannerHeading = 'FASHION & ACCESSORIES'

  return (
    <>
      <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />
      <Container fluid className='bg-black p-0 position-relative z-3'>
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
                <h6 className='text-decoration-none text-white mb-0'>Fashion & Accessories</h6>
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
