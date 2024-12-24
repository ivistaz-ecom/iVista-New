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
              <h1 className="fs-21 fw-bold text-white">CONTENT DEVELOPMENT & DESIGN</h1>
            </Col>
            <Col lg={5}>
              <Image src="/images/automobiles.svg" width={400} height={400} />
            </Col>
          </Row>
        </Container>
        <Container className="pt-4 w-80 pb-4 pt-4" >
          <p className="fw-bold fs-2 red">Content (B2B & B2C)</p>
          <p className="para-text">We are artists who have mastered the art of capturing attention, engaging communities, and driving action. We understand that content is more than just words and images; it is a powerful tool that can be used to build relationships, drive sales, and create brand awareness.</p>
        </Container>

        <Container className="pt-4 w-80 pb-4 pt-4" >
          <p className="fw-bold fs-2 red">Videos</p>
          <p className="para-text">We are artists who craft stories that are both visually stunning and strategically sound. Our videos have helped our clients achieve their marketing goals, from increasing brand awareness to driving sales. If you’re looking for a marketing partner who can help you create videos that will reach your target audience and achieve your business goals, then we encourage you to contact us.</p>
        </Container>
        <Container className="pt-4 w-80 pb-4 pt-4" >
          <p className="fw-bold fs-2 red">Design</p>
          <p className="para-text">We value the significance of your brand objectives, as they serve as the foundation for our intelligent marketing strategies. When creating digital media materials for your brand, we rely on crucial factors and insights. Through careful design and attention to detail, we craft materials that leave a lasting impression on your audience. Connect with us to collaborate on creating marketing assets that will elevate your brand and drive success.</p>
        </Container>
        <Container className="text-center w-80">
          <Button className="btn btn-14">Contact us</Button>
        </Container>

      </Container>
    </>
  )
}

export default page