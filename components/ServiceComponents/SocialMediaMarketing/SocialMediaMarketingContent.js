'use client'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ScrollAnimationServiceˀ from '../../SharedComponents/ScrollAnimationServices'
import Link from 'next/link'


const SocialMediaMarketingContent = () => {
    return (
        <>
            <ScrollAnimationServiceˀ />

            <Container fluid className="mt-4 p-0 mb-5">
                <article>
                    <div className='timeline1'>
                        {/* <h1 className='fs-3 text-red fw-bold ps-7 position-relative'>
                            <div className="timeline-badge1"></div>
                            <Container className='w-80 px-0'>
                                Social Media Marketing
                            </Container>
                        </h1> */}

                        <Col className='position-relative'>
                            <div className="timeline-badge1"></div>
                            <Container className='w-80 ps-7 pe-lg-0 pe-4'>
                                <p className="text-black para-text fw-bold">
                                    “Social media is not just a spoke on the wheel of marketing. It’s becoming the way entire bicycles are built.” – Ryan Lilly, Author, Entrepreneur, Kauffman Foundation
                                </p>
                                <p className="text-black para-text">From targeting and retargeting to leveraging look-alike and custom audiences, as well as diving into demographics, behaviours, attributes, and interests – the power of precise targeting with social media advertising can be invaluable in helping businesses generate leads or sell online.
                                </p>

                                <p className="text-black para-text">
                                    Leveraging social media marketing services for driving website traffic, generating leads, or facilitating online sales goes beyond crafting compelling content or eye-catching visuals. Targeting, timing, ad formats, and bidding strategies must all come together in a well-thought-out plan. Only then can social media marketing truly fulfil its objectives and propel businesses towards success.
                                </p>

                                <p className="text-black para-text">
                                    We understand the critical role that social media plays in helping you reach your goals, and we&apos;re here to guide your brand towards success in this dynamic arena. For businesses in both the B2B and B2C sectors, through social media ad campaigns, we will harness the intricacies of audience segmentation to ensure that your ad is seen by the right people through the right social media platforms, working to generate traffic through Twitter ads, LinkedIn ads, YouTube ads and  Facebook ads.
                                </p>
                            </Container>
                        </Col>

                        <Col className='position-relative'>
                            <div className="timeline-badge1"></div>
                            <Container className='w-80 ps-7'>
                                <h1 className='fs-5 text-red fw-bold'>
                                    Leads, online sales, enquiries, room bookings - what goals do you want to achieve with social media marketing?
                                </h1>
                                <h1 className='fs-5 text-red fw-bold'>
                                    <Link href="/contact-us" className='red'> Contact us</Link> today.
                                </h1>

                            </Container>
                        </Col>

                        {/* <Col className='position-relative mb-5'>
                            <div className="timeline-badge1"></div>
                            <Container className='w-80 ps-7'>
                                <h1 className='fs-5 text-red fw-bold'>
                                <Link href="/contact-us" className='red'> Contact us</Link> today.
                                </h1>
                            </Container>
                        </Col> */}
                    </div>

                </article>
            </Container>
        </>
    )
}

export default SocialMediaMarketingContent