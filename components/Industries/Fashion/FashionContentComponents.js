import React from 'react'
import ScrollAnimationIndustries from '../../SharedComponents/ScrollAnimationindustries';
import { Col, Container } from 'react-bootstrap';
import Link from 'next/link';
import CaseStudiesCategoriesComponents from '../../PropsShared/CaseStudiesCategoriesComponents';

const FashionContentComponents = () => {
    const categoryId = 13;

    return (
        <>

            <ScrollAnimationIndustries />
            <Container fluid className='bg-black p-0'>
                <article>
                    <Col className='timeline3'>
                        <div className='position-relative '>
                            <div className='timeline-badge3 mt-4'></div>
                            <Container className="w-80 pb-4 pt-4 ps-7" >
                                <p className="text-white para-text">
                                    According to an article by the Times of India, the fashion industry is poised to <Link href="https://timesofindia.indiatimes.com/blogs/voices/indian-apparel-and-fashion-market-in-next-five-years-industry-growth-challenges-and-opportunities/" target='_blank' className='hyper-link-red cursor-pointer'>grow into a $106 billion industry by 2026,</Link> bringing up the Indian fashion market on maps.</p>
                            </Container>
                        </div>


                        <div className='position-relative p-0'>
                            <div className='timeline-badge3 mt-5'></div>
                            <Container className="iv-bg w-80 banner pt-5 pb-5 ps-7">
                                <p className="fw-bold text-white fs-3">
                                    We will help you to capitalize on this market opportunity with robust digital solutions that include:</p>
                                <ul>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Bridging the gap between online visitors and sales (in-store and online) both on your e-store, as well as on marketplaces and<span className='fw-bold'> increasing online sales for fashion accessories.</span></p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">
                                            Creating<span className='fw-bold'> strong curated online experiences</span> for your customers to strengthen brand loyalty. Our digital marketing for fashion brands focuses on crafting compelling content and engaging experiences to attract and retain customers.
                                        </p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">
                                            Ensuring <span className='fw-bold'> consistent social media engagement</span> with your customers. Our social media marketing for fashion brands ensures your brand stays top-of-mind and engages with your audience across platforms, driving brand awareness and loyalty.
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
                            <p className="fs-2 text-white">Here’s how we helped fashion and accessories brands secure a winning edge:</p>
                        </Container>
                    </Col>

                    {/* case studies Props */}
                    <Container className="w-80 pb-5">
                        <CaseStudiesCategoriesComponents categoryId={categoryId} />
                    </Container>
                </article>
            </Container>
        </>
    )
}

export default FashionContentComponents
