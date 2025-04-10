'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const OurServices = () => {
    const TechIndustryData = [
        {
            id: 1,
            buttonText: 'B2B LEAD GEN',
            contentTitle: 'B2B LEAD GENERATION',
            subtitle: 'Struggling to deliver quality leads to your sales pipeline?',
            description1:
                'We will analyze web data patterns, identify intent signals, and engage with the right decision-makers in your client organizations.',
            description2:
                'We create hyper-targeted campaigns crafted to get you the desired response or enquiry.',
            points: ['Email marketing and drip campaigns', 'Conversational AI chatbots'],
            type: 'basic',
        },
        {
            id: 2,
            buttonText: 'CONTENT DEVELOPMENT',
            contentTitle: 'CONTENT THAT SPEAKS TO YOUR AUDIENCE',
            subtitle: '',
            description1:
                'Your prospects demand content that informs, educates, and influences their decisions. Whether it’s dynamically personalizing website content for each visitor or crafting deeply researched, high-impact articles tailored to your target audience, we leverage GenAI to deliver results. Our AI-driven approach ensures that your website adapts in real-time to visitor behavior, industry, and intent—while our expert-led content creation process uses AI-powered tools to generate, refine, and optimize blogs, whitepapers, and email campaigns.',
            description2:
                'We create hyper-targeted campaigns crafted to get you the desired response or enquiry.',
            points: [
                'AI-powered web content personalization to generate dynamic content tailored to the visitor’s industry, role, and past interactions',
                'Thought-leadership content – white papers, playbooks, articles, e-books and POVs',
            ],
            type: 'basic',
        },
        {
            id: 3,
            buttonText: 'AI SEO',
            contentTitle: 'SEO THAT WORKS IN THE AI ERA',
            highlightTitle: 'SEO THAT WORKS IN THE AI ERA',
            mainText: 'Move over Google. Users are now using GenAI to get answers to their queries.',
            highlightNote: 'Are you leveraging this opportunity?',
            features: [
                {
                    heading: 'AI-Optimized Keyword Strategy',
                    text: 'We go beyond traditional keyword research, leveraging AI-powered tools to identify high-intent, conversational, and long-tail keywords that align with how users (and AI-driven search engines) now search.',
                },
                {
                    heading: 'Content Structuring for AI Crawlers',
                    text: 'We optimize content with schema markup, NLP-friendly formatting, and topic clustering to ensure better indexing and visibility on Google’s AI-powered search (SGE) and Bing Chat.',
                },
                {
                    heading: 'SEO Performance Enhancement',
                    text: 'We continuously analyze search trends, user behavior, and competitor insights to refine and optimize content dynamically for better rankings.',
                },
                {
                    heading: 'AI-Generated & Human-Refined Content',
                    text: 'We use GenAI to create SEO-rich drafts, which are then reviewed and refined by experts to maintain accuracy, readability, and authority—helping you rank higher in AI-curated search results',
                },
            ],
            type: 'aiSeo',
        },
        {
            id: 4,
            buttonText: 'Website Design Service',
            contentTitle: 'Website Design & Management',
            highlightTitle: 'Website Design & Management',
            mainText: 'Your website is your digital storefront. We build and manage visually compelling websites that are mobile-friendly, SEO-optimized, and designed to capture leads effectively.',
            highlightNote: '',
            features: [
                {
                    heading: 'AI-Powered, Conversion-Optimized Design',
                    text: 'We create visually stunning, user-friendly websites that leverage AI-driven UX insights to enhance engagement and boost conversions.',
                },
                {
                    heading: 'End-to-End Website Management',
                    text: 'From security updates and performance optimization to content updates and A/B testing, we ensure your website stays fast, secure, and up-to-date.',
                },
                {
                    heading: 'SEO-Integrated & Mobile-First Approach',
                    text: 'Every site we build is fully optimized for search engines and mobile responsiveness, ensuring seamless experiences across all devices and higher search rankings.',
                },
            ],
            type: 'aiSeo',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <style>{`
             .our-service-tab {
                    writing-mode: vertical-lr;
                    text-orientation: mixed;
                    color:  #FF0000;
                    border-radius: 20px;
                    font-weight: bold;
                    font-size: 48px;
                    border: none;
                    white-space: nowrap;
                    transition: all 0.3s ease;
                    width: 20px;
                    height: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: start;
                    text-align: center;
                    text-transform: uppercase;
                    rotate: 180deg;
                }
                .service-tab {
                    writing-mode: vertical-lr;
                    text-orientation: mixed;
                    background: black;
                    color: white;
                    border-radius: 20px;
                    padding: 1rem 0.5rem;
                    font-weight: bold;
                    font-size: 1.2rem;
                    border: none;
                    white-space: nowrap;
                    transition: all 0.3s ease;
                    width: 50px;
                    height: 500px;
                    display: flex;
                    align-items: center;
                    justify-content: start;
                    text-align: center;
                    text-transform: uppercase;
                    rotate: 180deg;
                }

                .service-tab:hover {
                    background: red !important;
                    color: white !important;
                }

                .content-box {
                    border: 1px solid #FF0000;
                    border-radius: 20px;
                    box-shadow: 0 0 10px rgba(255, 0, 0, 0.05);
                    height: 500px;
                    animation: fadeSlideIn 0.5s ease;
                    min-width: 500px;
                    max-width: 800px;
    
                }
                    

             :root {
                --custom-red:  #FF0000;
                }

                .service-tab.active-tab {
                background-color: var(--custom-red) !important;
                color: white !important;
                box-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
                }

                .custom-red-text {
                color: var(--custom-red) !important;
                }
                .custom-red-bg {
                background-color: var(--custom-red) !important;
                }
                .border-right-dotted-red {
                border-right: 2px dotted #FF0000 !important;
                }

                @keyframes fadeSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @media (max-width: 768px) {
                    .service-tab {
                        writing-mode: horizontal-tb;
                        width: auto;
                        height: auto;
                        padding: 0.6rem 1rem;
                        font-size: 0.75rem;
                        margin-bottom: 0.5rem;
                        rotate: 0deg;
                        justify-content: center;
                        text-align: center;
                         border-radius: 5px;
                    }
                        .our-service-tab {
                        writing-mode: horizontal-tb;
                        width: auto;
                        height: auto;
                        padding: 0.6rem 1rem;
                        font-size: 2rem;
                        margin-bottom: 0.5rem;
                        rotate: 0deg !important;
                        justify-content: center;
                        text-align: center;
                    }
                    .service-tabs-container {
                        flex-direction: row !important;
                        flex-wrap: wrap;
                        justify-content: center;
                        margin-bottom: 1rem;
                    }
                    .content-box {
                        min-width: 100% !important;
                        max-width: 100% !important;
                        height: auto !important;
                    }


            `}</style>

            <Container fluid className="p-md-5 p-3 bg-white">
                {/* Mobile Tabs */}
                <p className=" d-md-none d-flex our-service-tab" >Our Services</p>
                <Row className="d-md-none d-flex mobile-tab-row gap-2 p-3 mx-auto justify-content-start">
                    {TechIndustryData.map((service, index) => (
                        <Button
                            key={index}
                            className={`service-tab ${activeIndex === index ? 'active-tab' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {service.buttonText}
                        </Button>
                    ))}
                </Row>

                {/* Mobile Content */}
                <Row className="d-md-none">
                    <Col>
                        <div className="content-box p-4">
                            {TechIndustryData[activeIndex].type === 'basic' && (
                                <>
                                    <h4 className="custom-red-text fw-bold fs-4">
                                        {TechIndustryData[activeIndex].contentTitle}
                                    </h4>
                                    <h5 className="fw-semibold mt-3">{TechIndustryData[activeIndex].subtitle}</h5>
                                    <p className="mt-3">{TechIndustryData[activeIndex].description1}</p>
                                    <p>{TechIndustryData[activeIndex].description2}</p>
                                    <ul>
                                        {TechIndustryData[activeIndex].points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {TechIndustryData[activeIndex].type === 'aiSeo' && (
                                <>
                                    <h4 className="custom-red-text fw-bold fs-4">
                                        {TechIndustryData[activeIndex].highlightTitle}
                                    </h4>
                                    <h5 className="mt-3">{TechIndustryData[activeIndex].mainText}</h5>
                                    <p className="custom-red-text">{TechIndustryData[activeIndex].highlightNote}</p>
                                    <Row>
                                        {TechIndustryData[activeIndex].features.map((feature, idx) => (
                                            <Col xs={12} key={idx} className="mb-3">
                                                <h6 className="custom-red-text fw-semibold">{feature.heading}</h6>
                                                <p>{feature.text}</p>
                                            </Col>
                                        ))}
                                    </Row>
                                </>
                            )}
                        </div>
                    </Col>
                </Row>

                {/* Desktop Tabs + Content */}
                <Row className="d-none d-md-flex justify-content-center align-items-center flex-wrap gap-3 container-fluid">
                    <p className="our-service-tab" >Our Services</p>
                    {/* Tabs before */}
                    {TechIndustryData.map((service, index) =>
                        index < activeIndex ? (
                            <Button
                                key={index}
                                className={`service-tab ${activeIndex === index ? 'active-tab' : ''}`}

                                onClick={() => setActiveIndex(index)}
                            >
                                {service.buttonText}
                            </Button>
                        ) : null
                    )}
                    {/* Active Tab */}
                    <Button
                        className="service-tab custom-red-bg text-white"
                        onClick={() => setActiveIndex(activeIndex)}
                    >
                        {TechIndustryData[activeIndex].buttonText}
                    </Button>

                    {/* Content Box */}
                    <div className="content-box p-4" key={activeIndex}>
                        {TechIndustryData[activeIndex].type === 'basic' && (
                            <>
                                <h4 className="custom-red-text fw-bold fs-1">
                                    {TechIndustryData[activeIndex].contentTitle}
                                </h4>
                                <h5 className="fw-semibold mt-3">{TechIndustryData[activeIndex].subtitle}</h5>
                                <p className="mt-3">{TechIndustryData[activeIndex].description1}</p>
                                <p>{TechIndustryData[activeIndex].description2}</p>
                                <ul>
                                    {TechIndustryData[activeIndex].points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {TechIndustryData[activeIndex].type === 'aiSeo' &&
                            Array.isArray(TechIndustryData[activeIndex].features) && (
                                <>
                                    <h4 className="custom-red-text fw-bold fs-1">
                                        {TechIndustryData[activeIndex].highlightTitle}
                                    </h4>
                                    <h5 className="mt-3">{TechIndustryData[activeIndex].mainText}</h5>
                                    <p className="custom-red-text py-2">{TechIndustryData[activeIndex].highlightNote}</p>
                                    <Row>
                                        {TechIndustryData[activeIndex].features.map((feature, idx, arr) => {
                                            const isLast = idx === arr.length - 1;
                                            const borderClass = !isLast ? 'border-right-dotted-red' : '';

                                            return (
                                                <Col md={3} key={idx} className={`mb-4 px-3 ${borderClass}`}>
                                                    <h6 className="custom-red-text pb-2 fw-semibold">{feature.heading}</h6>
                                                    <p>{feature.text}</p>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </>
                            )}
                    </div>
                    {/* Tabs after */}
                    {TechIndustryData.map((service, index) =>
                        index > activeIndex ? (
                            <Button key={index} className="service-tab" onClick={() => setActiveIndex(index)}>
                                {service.buttonText}
                            </Button>
                        ) : null
                    )}
                </Row>
            </Container>
        </>
    );
};

export default OurServices;

