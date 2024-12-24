"use client"
import React from 'react'
import Header1 from '../../../../../components/HeaderBlack'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Link from 'next/link';
import Image from 'next/image'
function page() {
  return (
    <>
      <Container fluid className="mb-4">
        <Header1 />
        <Container className="bg-black banner w-80" >
          <Row className="d-flex align-items-center">
            <Col lg={7} className="pl-8">
              <h1 className="fs-21 fw-bold text-white">DEVELOPMENT AND DESIGN</h1>
            </Col>
            <Col lg={5}>
              <Image src="/images/automobiles.svg" width={400} height={400} />
            </Col>
          </Row>
        </Container>
        <Container className="pt-4 w-80 pb-4 pt-4" >
          <p className="para-text">Our web development artists use code to create beautiful, functional, and user-friendly websites. We understand that a well-designed website is more than just a pretty face; it is a powerful tool that can be used to grow your business. We strive to create websites that reflect your brand identity, meet your business goals, and exceed your expectations.</p>
        </Container>
        <Container className="text-center w-80">
          <Button className="btn btn-14">Contact us</Button>
        </Container>

      </Container>
    </>
  )
}

export default page