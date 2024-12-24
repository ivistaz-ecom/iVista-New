import Link from "next/link";
import React from "react";
import { Col, Container } from "react-bootstrap";
import ScrollAnimationIndustries from '../../SharedComponents/ScrollAnimationindustries';
import CaseStudiesCategoriesComponents from "../../PropsShared/CaseStudiesCategoriesComponents";


const HospitlityComp = () => {
    const categoryId = 14;

    return (
        <>
            <ScrollAnimationIndustries />
            <Container fluid className='p-0 bg-black'>
                <article>
                    <Col className='timeline3'>
                        <div className='position-relative'>
                            <div className='timeline-badge3 mt-4'></div>
                            <Container className="w-80 pb-4 pt-4 ps-7" >
                                <p className="text-white para-text pe-lg-0 pe-3">In the last 12 years,<span className='fw-bold'> iVistaz has built a deep digital hospitality practice</span>.</p>
                            </Container>
                        </div>

                        <div className='position-relative p-0'>
                            <div className='timeline-badge3 mt-5'></div>
                            <Container className="iv-bg w-80 banner d-flex flex-column justify-content-center pb-5 pt-5 ps-7 ">
                                <p className="text-white para-text">We can leverage our experience in digital marketing for the hospitality industry <span className='fw-bold'> to grow and sustain online room revenues</span> for your properties and in turn, help increase <span className='fw-bold'> room occupancy, RevPAR (Revenue Per Available Room) and ADR (Average Daily Rate)</span>. We are also deeply aware that the customers of luxury hospitality brands are highly discerning, and our focus will be to enhance their overall digital experience with engaging UI/UX and content.</p>
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
                            <p className="fs-2 text-white">Here are some numbers from our experience in digital marketing for the hotel industry that will interest you.</p>
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

export default HospitlityComp
