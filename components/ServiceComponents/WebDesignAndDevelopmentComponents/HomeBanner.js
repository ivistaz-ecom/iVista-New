"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceBanner from '../../PropsShared/ServiceBanner'
import Link from 'next/link';
import SeoComponents from '../../SeoComponents/Seo'
import { usePathname } from 'next/navigation'
import { CiCircleChevRight } from "react-icons/ci";

const HomeBanner = () => {

    const pathname = usePathname();
    const [domainName, setDomainName] = useState('');

    useEffect(() => {
        setDomainName(window.location.hostname);
    }, []);

    const title = " Crafting Digital Excellence: Mastery, Art, and Performance in Digital Marketing";
    const description = "Explore the expertise of iVistaz, a digital marketing agency mastering the intricacies of performance marketing, crafting captivating digital art, and delivering unforgettable digital journeys with precision and excellence.";
    const path = `${pathname}`;
    const metaImage = "";

    const backgroundImage = {
        url: '/services/web_design_and_development_banner.jpg'
    };

    const mobileBackgroundImage = {
        url: '/services/mobile_service_banner/design_banner.jpg'
    }

    // Banner Main and Sub Heading
    const bannerSubHeading = 'WEB DESIGN &'
    const bannerHeading = 'DEVELOPMENT'

    return (

        <>
            <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />

            <Container className='bg-white z-3 position-relative' fluid>
                <Container className="w-80 custom-container z-index-100" >
                    <Row className="d-flex align-items-center px-lg-0 px-2 z-index-100">
                        <Col className='d-flex flex-row flex-wrap align-items-center mb-3'>
                            <Link href="/art/services"
                                className='text-decoration-none '>
                                <h6 className='text-black mb-0 px-1'>SERVICES</h6>
                            </Link>
                            <CiCircleChevRight fill='red' />   
                            <Link href=""
                                className='text-decoration-none px-1'>
                                <h6 className='text-decoration-none text-black mb-0'>Web design & development</h6>
                            </Link>
                        </Col>
                        <ServiceBanner backgroundImage={backgroundImage} bannerSubHeading={bannerSubHeading} bannerHeading={bannerHeading} mobileBackgroundImage={mobileBackgroundImage} />
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default HomeBanner