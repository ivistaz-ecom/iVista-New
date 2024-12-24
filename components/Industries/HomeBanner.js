import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
// import Image from 'next/image';
import Link from 'next/link'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Svg from './Automobiles/svg'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { FaArrowRight } from "react-icons/fa";
import ScrollAnimationPerformance from '../SharedComponents/ScrollAnimationPerformance';

import indust from './IndustriesLandingpage';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);


function HeroBanner() {

  return (
    <>
      <ScrollAnimationPerformance />
      <Container className="bg-white banner w-80 pb-5 container-height" >
        <article>
          <Row className="d-flex align-items-start ">
            <Col lg={12} className="mt-5 position-relative ps-6">
              <div className='timeline-badge5 mt-4'></div>
              <h1 className="fs-19 fw-bold py-4">
                Industries
              </h1>
              <p className="para-text pe-lg-2 ">Client expectations have taken a quantum leap, compelling individuals to adapt like never before. Brands have relentlessly pursued growth by embracing innovative solutions in Ecommerce development & growth strategies. That’s where we step in. With a passion for creating exceptional experiences and staying ahead of the curve, we’ve mastered our art. And today, we don’t just perform, we outperform.</p>
            </Col>

            <div className="d-flex flex-lg-row flex-column flex-wrap z-3 mt-4 bg-white">
              {indust.map((industry, index) => (
                <div key={index} className="mb-2 z-3 col-lg-3 p-3 col-sm-12">
                  <div className='d-flex flex-column text-center gap-4 shadow-lg px-3 py-4 w-100 rounded-4'>
                    <div>
                      <Image src={industry.image} alt={industry.title} className="industry-image" />
                    </div>
                    <div className='fw-bold'>
                      <h5>{industry.title}</h5>
                    </div>
                    <div className='text-center'>
                      <Link href={`/${industry.slug}`} className="text-decoration-none">
                        <button type="submit" className="btn btn-151 border border-danger w-100">
                          <p className='mb-0 para-text w-100'>Read More</p>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/automobiles">Automobiles</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/technology-IT">Tech/IT</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/hospitality">Hospitality</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/appliances">Appliances</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/ngos">Not-for-Profits/NGOs</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/jewellery">Jewellery</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/beauty-wellness">Beauty & Wellness</Link></Col>

            <Col lg={12} className="mt-4 position-relative ps-6 mb-5">
              <div className='timeline-badge5 mt-2'></div>
              <Link className="fs-3 i-link fw-semibold" href="/industries/fashion-accessories">Fashion & Accessories</Link></Col> */}
          </Row>

        </article>
      </Container>

    </>
  )
}

export default HeroBanner
