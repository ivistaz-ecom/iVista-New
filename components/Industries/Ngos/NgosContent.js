import React from 'react'
import { Col, Container } from 'react-bootstrap';
import ScrollAnimationIndustries from '../../SharedComponents/ScrollAnimationindustries';
import CaseStudiesCategoriesComponents from '../../PropsShared/CaseStudiesCategoriesComponents';
import Link from 'next/link';

const NgosContent = () => {

    const categoryId = 16;

    return (
        <>
            <ScrollAnimationIndustries />
            <Container fluid className='bg-black p-0'>
                <article>
                    <Col className='timeline3 pt-1'>
                        <div className='position-relative '>
                            <div className='timeline-badge3 mt-4'></div>
                            <Container className="pt-4 w-80 pb-4 ps-7" >

                                <p className="text-white  pe-lg-2 pe-3 para-text">As social development produces both new possibilities and fresh challenges, active attempts to establish a better future for monitoring, assessment, and learning will become increasingly more crucial in the coming years. These changes in the philanthropic landscape—and the world around it—are profoundly altering the backdrop for decision-making inside social sector organizations as well as the larger practice of monitoring, evaluation, and learning.</p>
                            </Container>
                        </div>

                        <div className='position-relative '>
                            <div className='timeline-badge3 mt-5'></div>
                            <Container className="iv-bg w-80 banner pt-5 pb-5 ps-7">
                                <p className="fw-bold text-white fs-3 para-text">Our digital marketing services for nonprofit organizations will help your audience understand your niche and help create awareness for your projects:</p>
                                <ul>
                                    {/* <li className='industry-bullet'>
                                        <p className="text-white para-text">Providing end-to-end services that will bring in more attention from the identified target group</p>
                                    </li> */}
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Evaluating or reframing the current positioning, message, and narrative for value creation</p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Generating traction for your website and offerings with captivating content and SEO</p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Generating new and repeat visitors for your website and improving engagement with content that resonates</p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Crafting SEO strategies to improve your search engine rankings and drive relevant traffic to your website</p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Email marketing to help generate interest from relevant resource and funding organizations for your social impact projects</p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Targeted campaigns on Google and Meta to generate outcomes for your CSR projects</p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Web design and re-design to create a seamless UX/UI and help deliver an intuitive user experience</p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">
                                            End-to-end social media management including content, design, and engagement analysis
                                        </p>
                                    </li>
                                </ul>
                                {/* <p className="text-white ">We specialize in social media marketing for non-profit organizations to enhance your social presence and engagement. Additionally, our digital marketing for NGOs ensures your campaigns are effective and far-reaching. For those needing a stronger online presence, our web design for NGOs will create a user-friendly and impactful website to support your mission.</p> */}
                                <Container className="">
                                    <Col className='d-flex flex-column align-items-center '>
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
                            <p className="fs-2 text-white">Explore how we have partnered with organizations to create meaningful change, amplify their reach, and drive impactful outcomes:</p>
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

export default NgosContent
