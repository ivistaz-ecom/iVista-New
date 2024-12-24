
'use client'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ScrollAnimationService from '../../SharedComponents/ScrollAnimationServices'
import Link from 'next/link'


const DesignContentComponents = () => {
    return (
        <>
            <ScrollAnimationService />

            <Container fluid className="mt-4 p-0 mb-5">
                <article>
                    <div className='timeline1'>
                        {/* <h1 className='fs-4 text-red fw-bold ps-7 position-relative'>
                            <div className="timeline-badge1"></div>
                            <Container className='w-80'>
                                Design
                            </Container>
                        </h1> */}

                        <Col className='position-relative'>
                            <div className="timeline-badge1"></div>
                            <Container className='w-80 ps-7'>
                                <p className="text-black para-text fw-semibold">
                                    “Design is not just what it looks like and feels like. Design is how it works.” - Steve Jobs
                                </p>

                                <p className="text-black para-text pe-lg-0 pe-3">
                                    At iVistaz, we understand the critical role that design plays in captivating audiences and conveying your brand's message effectively. As a leading website design agency, our design services encompass various facets, including web design, logo design, collateral creation (brochures, white papers, case studies, etc.), infographic design, PowerPoint presentations, and newsletter design.
                                </p>
                            </Container>
                        </Col>

                        <Col className='position-relative'>
                            <div className="timeline-badge1 mt-1"></div>
                            <Container className='w-80 ps-7'>
                                <h1 className='fs-3 text-red fw-bold'>
                                    Web Design Services
                                </h1>
                            </Container>
                        </Col>

                        <Col>
                            <Container className='w-80 ps-7 '>
                                <p className="text-black para-text pe-lg-0 pe-3">
                                    Our web design services are tailored to create visually appealing and user-friendly websites that align with your brand identity and objectives. As a user experience design agency, we prioritize not only aesthetic appeal but also user experience (UX) and user interface (UI) design to ensure that your website delivers an engaging and intuitive browsing experience for your visitors. Our designers meticulously craft each element of your website, focusing on navigation ease, page load speed, and mobile responsiveness to enhance user satisfaction and encourage prolonged engagement.
                                </p>

                                <p className="text-black para-text pe-lg-0 pe-3">
                                    Today, mobile devices contribute to the majority of web traffic. Recognizing this shift, our web design philosophy revolves around a mobile-first approach to ensure an optimal user experience across all devices. As a premier UI UX design company in Bangalore, unlike traditional methods that merely adapt desktop designs for mobile screens, we take a proactive stance by crafting mobile responsive web designs from the ground up.
                                </p>

                                <p className="text-black para-text pe-lg-0 pe-3">
                                    Our mobile-first approach goes beyond mere responsiveness; it prioritizes seamless navigation, minimises scrolling requirements, integrates intuitive search functionality, and streamlines form-filling processes for enhanced user convenience. By placing mobile users at the forefront of our design process, we endeavor to make your website not only visually stunning but also function seamlessly across devices to maximize engagement and conversions.
                                </p>
                            </Container>
                        </Col>

                        <Col className='position-relative'>
                            <div className="timeline-badge1 mt-1"></div>
                            <Container className='w-80 ps-7'>
                                <h1 className='fs-4 text-red fw-bold'>
                                    Logo Design
                                </h1>
                            </Container>
                        </Col>

                        <Col>
                            <Container className='w-80 ps-7'>
                                <p className="text-black para-text">
                                    Whether it is your brand/company logo or a logo for your sub-brand, unit, or initiative, our designers will work closely with you to understand your brand ethos and create a logo that encapsulates your unique identity.
                                </p>
                            </Container>
                        </Col>

                        <Col className='position-relative'>
                            <div className="timeline-badge1 mt-2"></div>
                            <Container className='w-80 ps-7'>
                                <h1 className='fs-4 text-red fw-bold'>
                                    Infographics
                                </h1>
                            </Container>
                        </Col>

                        <Col>
                            <Container className='w-80 ps-7'>
                                <p className="text-black para-text pe-lg-0 pe-3">
                                    Infographics serve as powerful tools for communicating key messages and insights in a digestible format, enhancing audience engagement and retention. We will spend time understanding your brief and translating them into visually striking graphics that are easy to understand and share.
                                </p>
                            </Container>
                        </Col>

                        <Col className='position-relative'>
                            <div className="timeline-badge1 mt-2"></div>
                            <Container className='w-80 ps-7'>
                                <h1 className='fs-4 text-red fw-bold'>
                                    Collateral Design
                                </h1>
                            </Container>
                        </Col>

                        <Col>
                            <Container className='w-80 ps-7'>
                                <p className="text-black para-text pe-lg-0 pe-3">
                                    Our collateral design services include the creation of various marketing materials, like brochures, white papers, and other promotional materials.
                                </p>
                            </Container>
                        </Col>


                        <Col className='position-relative'>
                            <div className="timeline-badge1 mt-1"></div>
                            <Container className='w-80 ps-7'>
                                <h1 className='fs-5 text-red fw-bold'>
                                    What is your design requirement? <Link href="/contact-us" className='red'> Contact us</Link> today.
                                </h1>
                            </Container>
                        </Col>

                        {/* <Col className='position-relative mb-5'>
                            <div className="timeline-badge1 mt-1"></div>
                            <Container className='w-80 ps-7'>
                                <h1 className='fs-4 text-red fw-bold'>
                                    
                                </h1>
                            </Container>
                        </Col> */}
                    </div>
                </article>
            </Container>
        </>
    )
}

export default DesignContentComponents
