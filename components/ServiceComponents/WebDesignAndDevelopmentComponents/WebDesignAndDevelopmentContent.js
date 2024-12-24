'use client'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import ScrollAnimation from '../../SharedComponents/ScrollAnimationServices'
// import ScrollAnimation from '../../SharedComponents/ScrollAnimation'

const WebDesignAndDevelopmentContent = () => {
    return (
        <>
            <ScrollAnimation />

            <Container fluid className="mt-4 p-0 mb-5">
                <article>
                    <div className='timeline1'>
                        <div className='position-relative'>
                            <div className="timeline-badge1"></div>
                            <Container className='w-80 ps-7'>
                                <p className="text-black para-text fw-semibold pe-lg-0">
                                    If your website is not engaging, intuitive, and visually appealing, you're losing potential customers to competitors. That is why a professionally designed website by a top website designing company is crucial to bring back visitors for meaningful engagement. </p>

                                <p className="text-black para-text pe-lg-0">
                                    Your brand&apos;s reputation hinges on your digital footprint. The website and mobile app serve as the primary showcases for your brand, products, expertise, and distinctiveness.
                                </p>

                                <p className="text-black para-text pe-lg-0">
                                    With over 28 years of experience, we have crafted more than 500 websites for businesses spanning aviation, e-commerce, healthcare, home appliances, hospitality, NGOs, technology, real estate, and retail.
                                </p>

                                <p className="text-black para-text pe-lg-0">
                                    As a leading website development company in Bangalore, we prioritize user-centricity in our web design and development process and delve into questions on behalf of your users: &quot;How easily can they access information?&quot;  and &quot;How many steps are required from discovery to enquiry?&quot;  This approach embodies User Experience (UX) principles, encompassing design, interface, information architecture, navigation, and content.
                                </p>

                                <p className="text-black para-text pe-lg-0">
                                    Whether you need a B2B website, a compelling website for your NGO, or a solution from a mobile app development company, we tailor our designs to align with your digital marketing objectives while optimizing user experience.
                                </p>
                            </Container>
                        </div>

                        <div className='position-relative mt-3  px-0'>
                            <div className="timeline-badge1"></div>
                            <Container className='w-80 ps-7'>
                                <h3 className='fs-4 text-red fw-bold p-0'>
                                    Web and Mobile App Expertise:
                                </h3>
                                <div className='d-flex flex-lg-row flex-column flex-wrap'>
                                    <div className="text-black para-text mb-0 col-lg-4 text-center d-flex align-items-stretch">
                                        <div className='px-3 py-4 shadow m-4 ms-lg-0 d-flex align-items-center w-100 justify-content-center rounded-4'>
                                            User Interface (UI) and User Experience (UX) design
                                        </div>
                                    </div>
                                    <div className="text-black para-text mb-0 col-lg-4 text-center d-flex align-items-stretch">
                                        <div className='px-3 py-4 shadow m-4 ms-lg-0 d-flex align-items-center w-100 justify-content-center rounded-4'>
                                            Information Architecture
                                            <br />
                                            {/* Add a line break if needed */}
                                        </div>
                                    </div>
                                    <div className="text-black para-text mb-0 col-lg-4 text-center d-flex align-items-stretch">
                                        <div className='px-3 py-4 shadow m-4 ms-lg-0 d-flex align-items-center w-100 justify-content-center rounded-4'>
                                            Illustrations and animations
                                        </div>
                                    </div>
                                    <div className="text-black para-text mb-0 col-lg-4 text-center d-flex align-items-stretch">
                                        <div className='px-3 py-4 shadow m-4 ms-lg-0 d-flex align-items-center w-100 justify-content-center rounded-4'>
                                            Dynamic and responsive designs
                                        </div>
                                    </div>
                                    <div className="text-black para-text mb-0 col-lg-4 text-center d-flex align-items-stretch">
                                        <div className='px-3 py-4 shadow m-4 ms-lg-0 d-flex align-items-center w-100 justify-content-center rounded-4'>
                                            Mobile responsiveness
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>

                        <div className='position-relative mt-3 px-0'>
                            <div className="timeline-badge1"></div>
                            <Container className='w-80 ps-7'>
                                <p className='fs-4 text-red fw-bold'>
                                    Technology Proficiency:
                                </p>
                                <div className='d-flex flex-row flex-wrap'>
                                    <div className="text-black para-text mb-0 col-lg-3 col-6">
                                        <div className='text-center px-3 py-4 d-flex flex-column gap-'>
                                            <div>
                                                <Image src='/services/web_design_development/wordpress.png' fluid alt=''></Image>
                                            </div>
                                            <div>
                                                WordPress
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-black para-text mb-0 col-lg-3 col-6">
                                        <div className='text-center px-3 py-4 d-flex flex-column gap-'>
                                            <div>
                                                <Image src='/services/web_design_development/next_js.png' fluid alt=''></Image>
                                            </div>
                                            <div>
                                                Next Js
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-black para-text mb-0 col-lg-3 col-6">
                                        <div className='text-center px-3 py-4 d-flex flex-column gap-'>
                                            <div>
                                                <Image src='/services/web_design_development/react.png' fluid alt=''></Image>
                                            </div>
                                            <div>
                                                React
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-black para-text mb-0 col-lg-3 col-6">
                                        <div className='text-center px-3 py-4 d-flex flex-column gap-'>
                                            <div>
                                                <Image src='/services/web_design_development/magento.png' fluid alt=''></Image>
                                            </div>
                                            <div>
                                                Magento
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-black para-text mb-0 col-lg-3 col-6">
                                        <div className='text-center px-3 py-4 d-flex flex-column gap-'>
                                            <div>
                                                <Image src='/services/web_design_development/html5.png' fluid alt=''></Image>
                                            </div>
                                            <div>
                                                HTML
                                            </div>
                                            <div>
                                                (Bootstrap, Tailwind CSS, MUI, Shadcn)
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-black para-text mb-0 col-lg-3 col-6">

                                        <div className='text-center px-3 py-4 d-flex flex-column gap-'>
                                            <div>
                                                <Image src='/services/web_design_development/shopify.png' fluid alt=''></Image>
                                            </div>
                                            <div>
                                                Shopify
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-black para-text mb-0 col-lg-3 col-6">

                                        <div className='text-center px-3 py-4 d-flex flex-column gap-'>
                                            <div>
                                                <Image src='/services/web_design_development/php.png' fluid alt=''></Image>
                                            </div>
                                            <div>
                                                PHP Framework
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </Container>
                        </div>
                        <h1 className='para-text text-red fw-bold pb-5 mt-2 position-relative px-0'>
                            <div className="timeline-badge1"></div>
                            <Container className='w-80 ps-7 custom_height_service'>
                                <Link href="/contact-us" className='red'>Contact us</Link> today to embark on your journey to digital success.
                            </Container>
                        </h1>
                    </div>
                </article>
            </Container>

        </>
    )
}

export default WebDesignAndDevelopmentContent