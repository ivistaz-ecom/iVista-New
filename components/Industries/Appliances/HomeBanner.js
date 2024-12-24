import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button, Image, CloseButton } from 'react-bootstrap'
import Link from 'next/link'
import BannerAllPage from '../../PropsShared/BannerAllPage';
import CaseStudiesCategoriesComponents from '../../PropsShared/CaseStudiesCategoriesComponents';
import ScrollAnimationIndustries from '../../SharedComponents/ScrollAnimationindustries';
import SeoComponents from '../../../components/SeoComponents/Seo'
import { usePathname } from 'next/navigation'
import { CiCircleChevRight } from "react-icons/ci";



function HeroBanner() {

  const pathname = usePathname();
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = "Increase Online Sales for Home Appliances | Expert Digital Marketing for Appliance Brands";
  const description = "Boost your appliance brand's online sales with our specialised digital marketing strategies. Capitalise on the growing market and enhance your brand's visibility and engagement on e-stores and marketplaces. Discover how we can help you succeed in the rapidly evolving appliances industry.";
  const path = `${pathname}`;
  const metaImage = "";


  const backgroundImage = {
    url: '/industrie/appliances_banner.jpg'
  };

  const mobileBackgroundImage = {
    url: '/industrie/mobile_industries_banner/appliances_mob_banner.jpg'
  };

  const bannerHeading = 'APPLIANCES'

  return (
    <>

      <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />
      <ScrollAnimationIndustries />

      <Container fluid className="bg-black p-0 position-relative z-3">
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
                <h6 className='text-decoration-none text-white mb-0'>Appliances</h6>
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
