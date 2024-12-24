'use client'
import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ScrollAnimationService from '../../SharedComponents/ScrollAnimationServices'
import Link from 'next/link'


const SearchEngineMarketingContent = () => {
    return (
        <>
            <ScrollAnimationService />
            <Container className="mt-4 p-0 mb-5" fluid>
                <article>
                    <div className='timeline1'>
                        {/* <h1 className='fs-3 text-red fw-bold  position-relative'>
                            <div className="timeline-badge1"></div>
                            <Container className='w-80 ps-7'>
                                Search Engine Marketing
                            </Container>
                        </h1> */}
                        <Col className='position-relative'>
                            <div className="timeline-badge1"></div>
                            <Container className='w-80 ps-7 pe-lg-0 pe-3'>
                               
                                <p className="text-black para-text fw-semibold">
                                    Customers are continuously online and on the move, responding to stimuli and searching online. <br />
                                    Are you there, or will you be missed?
                                </p>
                                <p className="text-black para-text fw-semibold">
                                    Buyers are continuously tapping, scrolling, and clicking. <br />
                                    Will you be noticed or passed over?
                                </p>
                            
                                <p className="text-black para-text">
                                Digital journeys and buying decisions are unpredictable, impulsive, and fragmented. Buying decisions take place in micro-moments. However, when customers leave footprints online about what they are looking for, Search Engine Marketing (SEM) becomes essential. It helps businesses to showcase the right product or solution to the right target audience at the right time. With expert pricing, bidding, and targeting strategies, we can help your product or service advertisements be placed at the top of Search Engine Results Pages (SERP).
                                </p>

                                <p className="text-black para-text">
                                    Bidding and competition on top search engines like Google, Bing, and Yahoo! are intense. Imagine thousands of brands vying for the same space to get the attention and eyeballs of the same audience! To get top placements for your ad on the Search Engine Results Page (SERP), you will need an expert partner to craft your message, include the right keywords, exclude negative words, and deploy the right bidding strategy. As a leading search engine marketing company, we specialize in Pay-Per-Click advertising and paid search advertising to ensure your ads reach the intended audience effectively.
                                </p>

                                <p className="text-black para-text">
                                    Depending on your needs, we will recommend search ads, display ads, video ads, shopping ads, and discovery ads to drive traffic to your web conversion pages. As a premier video advertising agency, we ensure that your video ads are compelling and targeted. While helping you with online leads, sales, or bookings, our focus will also be to optimise your Cost Per Lead (CPL).
                                </p>


                            </Container>
                        </Col>

                        <div className='position-relative mb-5 '>
                            <div className="timeline-badge1"></div>
                            <Container className='w-80 ps-7'>
                                <h1 className='fs-5 text-red fw-bold'>
                                    Need help with your Search Engine Marketing? <Link href="/contact-us" className='red'> Contact us</Link> today.
                                </h1>
                            
                            </Container>
                        </div>
                    </div>
                </article>
            </Container>
        </>
    )
}

export default SearchEngineMarketingContent