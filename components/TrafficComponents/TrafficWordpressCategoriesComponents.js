'use client'
// import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, CloseButton, Image } from 'react-bootstrap'

import CaseStudiesCategoriesComponents from '../PropsShared/CaseStudiesCategoriesComponents'

const TrafficWordpressCategoriesComponents = () => {

    const categoryId = 2;

    return (
        <>
      <Container className="bg-black pb-5 text-center min-vh-100" fluid>
    <Container className="w-80">
        <Row className="d-flex flex-column align-items-center" style={{ height: '300px' }}>
            <Col className="d-flex flex-column justify-content-center align-items-center">
                <Link href="/">
                    <Image src="/images/ivista_logo.svg" width={300} height={80} className="img-fluid" />
                </Link>
            </Col>
            <Col>
                <p className="text-white fw-bold fs-3 text-center d-none d-md-block">
                    Here are some traffic performances<br />we have achieved for our clients.
                </p>
                <p className="text-white fw-bold fs-3 text-center d-block d-md-none">
                    Here are some traffic performances we have achieved for our clients.
                </p>
            </Col>
        </Row>
    </Container>

    <Container className="w-80">
        <CaseStudiesCategoriesComponents categoryId={categoryId} />
    </Container>
</Container>

        </>
    )
}

export default TrafficWordpressCategoriesComponents
