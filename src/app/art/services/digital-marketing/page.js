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
              <h1 className="fs-21 fw-bold text-white">DIGITAL MARKETING</h1>
            </Col>
            <Col lg={5}>
              <Image src="/images/automobiles.svg" width={400} height={400} />
            </Col>
          </Row>
        </Container>
        <Container className="pt-4 w-80 pb-4 pt-4" >
          <p className="fw-bold fs-2 red">Search Engine Optimization</p>
          <p className="para-text">In a world that’s more interconnected than ever and a market filled with fierce competition, how can your brand stand out and gain the visibility it craves? We’ve mastered the art of standing out and maintaining a strong presence in this dynamic landscape, organically. Curious to discover how we’ve revolutionized the game for numerous brands we’ve collaborated with?</p>
        </Container>

        <Container className="pt-4 w-80 pb-4 pt-4" >
          <p className="fw-bold fs-2 red">Search Engine Marketing</p>
          <p className="para-text">In a dynamic search landscape, our SEM expertise is the art of connecting brands with customers. We craft customized strategies, striking the ideal balance between organic and paid search, to enhance visibility, drive qualified traffic, and measure performance. Dive in to know more about our tailored approach for long-term growth and immediate results across your online presence.</p>
        </Container>
        <Container className="pt-4 w-80 pb-4 pt-4" >
          <p className="fw-bold fs-2 red">Social Media Marketing</p>
          <p className="para-text">In a crowded online world, how does your brand maintain relevance and engage new customers? For that you require a social media partner that sees it as an art, excelling in strategy, content creation, campaign planning, implementation, and delivering impressive ROI consistently. Our strategies will help you create a clarity to your audience about your brand no matter the medium.</p>
        </Container>
        <Container className="text-center w-80">
          <Button className="btn btn-14">Contact us</Button>
        </Container>

      </Container>
    </>
  )
}

export default page