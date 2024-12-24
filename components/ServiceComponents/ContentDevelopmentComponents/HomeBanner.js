"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ServiceBanner from '../../PropsShared/ServiceBanner'
import SeoComponents from '../../SeoComponents/Seo'
import { usePathname } from 'next/navigation'
import { Breadcrumb } from 'react-bootstrap'
import Link from 'next/link'
import { CiCircleChevRight } from "react-icons/ci";


const HomeBanner = () => {

    const pathname = usePathname();
    const [domainName, setDomainName] = useState('');

    useEffect(() => {
        setDomainName(window.location.hostname);
    }, []);

    const title = "Content development for B2C and B2B businesses";
    const description = " iVistaz provides content development services for organisations across B2B and B2C sectors, going beyond mere content creation.";
    const path = `${pathname}`;
    const metaImage = "";
    // const backgroundImage = "/services/seo_banner.jpg"

    const backgroundImage = {
        url: '/services/content_development.jpg'
    };

    const mobileBackgroundImage = {
        url: '/service/mobile_service_banner/content_development_banner.jpg'
    }

    const bannerSubHeading = "CONTENT DEVELOPMENT"
    const bannerHeading = "B2B & B2C"
    return (
        <>

            <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />

            <Container className='bg-white z-3 position-relative' fluid>
                <Container className="w-80 custom-container z-index-100">
                    <Row className="d-flex align-items-center px-lg-0 px-2">
                        {/* Breadcrumb */}
                        <Col className='d-flex flex-row align-items-center mb-3'>
                            <p>
                                <Link href="/art/services"
                                    className='text-decoration-none '>
                                    <span className='text-black mb-0 px-1 fs-6'>Services</span>
                                </Link>
                                <CiCircleChevRight fill='red' />
                                <Link href=""
                                    className='text-decoration-none px-1'>
                                    <span className='text-decoration-none text-black mb-0 fs-6'>Content development for B2C and B2B</span>
                                </Link>
                            </p>
                        </Col>

                        <ServiceBanner
                            backgroundImage={backgroundImage}
                            mobileBackgroundImage={mobileBackgroundImage}
                            bannerSubHeading={bannerSubHeading}
                            bannerHeading={bannerHeading}
                        />
                    </Row>
                </Container>
            </Container>

        </>
    )
}

export default HomeBanner