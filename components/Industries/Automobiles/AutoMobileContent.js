import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import CaseStudiesCategoriesComponents from '../../PropsShared/CaseStudiesCategoriesComponents'
import ScrollAnimationIndustries from '../../SharedComponents/ScrollAnimationindustries';

const AutoMobileContent = () => {

    const categoryId = 10;

    return (
        <>
            <ScrollAnimationIndustries />
            <Container fluid className="p-0">
                <Container fluid className="bg-black p-0">
                    <article>
                        <Col className='timeline3'>
                            <div className='position-relative'>
                                <div className='timeline-badge3 mt-4'></div>
                                <Container className="pt-4 w-80 pb-4 ps-7" >
                                    <p className="text-white para-text pe-lg-2 pe-3"><Link href='/pdf/THE_AUTOMOBILE_SECTOR_IN_INDIA.pdf' target='_blank' className='hyper-link-red cursor-pointer'>According to the Ministry of Heavy Industries,</Link> Government of India, the automotive industry is likely to see significant transformations at a global level in the next ten years. Among the notable changes will be the shift of growth in demand for automobiles from developed nations to developing nations (mainly BRICS).</p>
                                    <p className="text-white para-text pe-lg-2 pe-3">India aims to double its auto industry size to Rs. 15 trillion by end of the year 2024 (Source: Ministry of Heavy Industries).</p>
                                </Container>
                            </div>

                            <div className='position-relative'>
                                <div className='timeline-badge3 mt-5'></div>
                                <Container className="iv-bg w-80 banner pt-5 pb-5 ps-7 ">
                                    <p className="fw-bold text-white fs-4">
                                        Your focus would be on strengthening your market share in India by growing your sales and dealer network through digital marketing for the automotive industry. Through our online marketing service for automobile companies, iVistaz can support you in this journey and help
                                    </p>
                                    <ul>
                                        <li className='industry-bullet'>
                                            <p className="text-white para-text">
                                                Your brand to<span className='fw-bold'> increase online enquiries, bookings and sales conversion ratios</span>
                                            </p>
                                        </li>
                                        <li className='industry-bullet'>
                                            <p className="text-white para-text">You to increase your<span className='fw-bold'>  qualified leads and sales</span> conversion ratios for you and for your dealers
                                            </p>
                                        </li>
                                    </ul>
                                    <Container className="">
                                        <Col className='d-flex flex-column align-items-center'>
                                            <Link className="btn-14 z-0" href="/contact-us">Contact Us</Link>
                                        </Col>

                                        {/* Mobile view  */}
                                        {/* <Col className='d-flex flex-column justify-content-center d-flex d-lg-none'>
                                            <Link className="btn-14 z-0" href="/contact-us">Contact Us</Link>
                                        </Col> */}
                                    </Container>
                                </Container>
                            </div>
                            <Container className="mt-5 mb-5 w-80 ps-7">
                                <p className="fs-2 text-white">Here’s how we have helped brands win over the dynamic and highly competitive industry through digital marketing for automobile brands:</p>
                            </Container>
                        </Col>

                        {/* case studies Props */}
                        <Container className="w-80 pb-5">
                            <CaseStudiesCategoriesComponents categoryId={categoryId} />
                        </Container>
                    </article>
                </Container >

            </Container>
        </>
    )
}

export default AutoMobileContent
