import React from 'react'
import { Col, Container } from 'react-bootstrap'
import CaseStudiesCategoriesComponents from '../../PropsShared/CaseStudiesCategoriesComponents'
import ScrollAnimationindustries from '../../SharedComponents/ScrollAnimationindustries'
import Link from 'next/link'

const AppliancesContent = () => {

    const categoryId = 11;

    return (
        <>

            <ScrollAnimationindustries />
            <Container fluid className="bg-black p-0">
                <article>
                    <Col className='timeline3'>
                        <div className='position-relative'>
                            <div className='timeline-badge3 mt-4'></div>
                            <Container className="pt-4 w-80 pb-4 pt-4 ps-7" >
                                <p className="text-white para-text pe-3">
                                    The Indian Appliances and Consumer Electronics industry is expected to double to Rs. 1.48 trillion by 2025 <Link href="https://retail.economictimes.indiatimes.com/news/consumer-durables-and-information-technology/consumer-electronics/indian-appliances-consumer-electronic-industry-to-double-to-rs-1-48-crore-by-2025/95568165" target='_blank' className='hyper-link-red'>according to CEAMA</Link>.  A recent report  <Link href="https://yourstory.com/2022/10/indian-online-shoppers-migh-outnumber-us-shoppers-ecommerce" target='_blank' className='hyper-link-red'>by Flipkart and Bain & Co</Link> states that the number of online shoppers in India is likely to <span className='fw-bold'>grow to 400 million-450 million by 2027</span> from 180 million-190 million in 2021 and appliances (along with mobiles and electronics) <span className='fw-bold'> will have among the highest market shares at 25-30%</span>.
                                </p>
                            </Container>
                        </div>

                        <div className='position-relative'>
                            <div className='timeline-badge3 mt-5'> </div>
                            <Container className="iv-bg w-80 banner ps-7 pt-5 pb-5">
                                <p className="text-white para-text">The size of customers doing research online and buying offline is rapidly shrinking. More and more buyers are now comfortable buying even large appliances online. Undoubtedly, you would be looking to capitalize on this opportunity.</p>
                                <p className="text-white para-text">Our carefully tailored digital marketing strategies will help to increase online sales for appliances brands, boosting visibility and engagement both on your brand e-store as well as on marketplaces. With our expertise in digital marketing for the appliances industry, we ensure your brand stands out in a competitive market.</p>
                                <p className="text-white para-text">We focus on strategies that optimize online sales for home appliances brands, leveraging targeted campaigns and data-driven insights to reach your ideal customers. Our approach will help you capture the growing market of online shoppers and drive significant sales growth.</p>
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
                            <p className="fs-2 text-white">Here’s how we have helped appliance brands to win in the e-commerce channel:</p>
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

export default AppliancesContent

