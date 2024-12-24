import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ServiceBanner from '../../PropsShared/ServiceBanner'
import Link from 'next/link'

const HomeBanner = () => {

    const backgroundImage = {
        url: '/services/videos_banner.jpg'
    };

    const bannerSubHeading = ""
    const bannerHeading = "VIDEOS"
    return (
        <>
            <Container className="w-80" >
                <Row className="d-flex align-items-center">
                    <Col className='d-flex flex-row flex-wrap p-0 align-items-center pt-1 ps-lg-0 ps-1'>
                        <Link href="/art/services"
                            className='text-decoration-none mb-0'>
                            <h6 className='text-black '>SERVICES</h6>
                        </Link>
                        <Link href=""
                            className='text-decoration-none mb-0'>
                            <h6 className='breadcrumbs text-decoration-none text-black'>VIDEOS</h6>
                        </Link>
                    </Col>
                    <ServiceBanner backgroundImage={backgroundImage} bannerSubHeading={bannerSubHeading} bannerHeading={bannerHeading} />
                </Row>
            </Container>
        </>
    )
}

export default HomeBanner