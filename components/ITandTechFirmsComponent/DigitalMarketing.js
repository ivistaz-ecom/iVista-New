'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import bgImage from '/public/it_and_tech_firms/digital_marketing_bg_img.jpeg';
import { FaArrowCircleRight } from "react-icons/fa";


const contentData = {
    MQLs: `Marketing Qualified Leads (MQLs) are no longer just about downloads and form fills. Using AI-powered insights, we track real-time buyer intent, behaviour patterns, and engagement signals to qualify leads with precision. This ensures your sales team connects with prospects who are not only interested but ready to decide—faster and more effectively.`,
    CONTENT: `Our content strategies are tailored for the GenAI era—hyper-personalized, data-driven, and optimized for every stage of the buyer’s journey. From blogs to videos, we craft assets that drive engagement and action.`,
    SEO: `Leverage GenAI to supercharge your SEO. We blend traditional keyword strategies with AI-driven insights to help your business rank faster and smarter.`,
    WEBSITE: `Transform your website into a high-converting, intelligent experience. With GenAI, we personalize experiences in real time, increasing engagement and driving conversions.`,
};

const DigitalMarketing = () => {
    const [selected, setSelected] = useState('MQLs');
    const [showFront, setShowFront] = useState(true); // toggle side

    const handleButtonClick = (key) => {
        if (key !== selected) {
            setTimeout(() => {
                setSelected(key);
                setShowFront((prev) => !prev); // toggle side
            }, 50);
        }
    };

    return (
        <>
            <style>{`
    .flip-box {
        perspective: 1000px;
    }
    .flip-box-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s ease-in-out;
        transform-style: preserve-3d;
    }
    .flipped .flip-box-inner {
        transform: rotateY(180deg);
    }
    .flip-box-front,
    .flip-box-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background: #fff;
        padding: 2rem;
        border: 1px solid #dc3545;
        border-radius: 1rem;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }
    .flip-box-back {
        transform: rotateY(180deg);
    }
    .custome-h2 {
        color: #FF0000;
        font-size: 3.5rem;
    } 
    .custome-flip-btn {
        background-color: #FF0000;
        color: white;
        border-color: #FF0000;
    }
    .custome-flip-btn:hover,
    .bg-light.text-danger:hover {
        background-color: #FF0000 !important;
        color: white !important;
        border-color: #FF0000 !important;
    }
        .custome-flip-btn:hover .flip-icon,
.bg-light.text-danger:hover .flip-icon {
    color: white !important;
}
    

`}</style>


            <div className="pt-5">
                <Container>
                    {/* Desktop view */}
                    <h2 className="d-none d-lg-block custome-h2 fw-bold text-uppercase text-center mb-3" style={{ fontSize: '2.5rem' }}>
                        Digital Marketing <br />For the GenAI Era
                    </h2>

                    {/* Mobile view */}
                    <h2 className="d-block d-lg-none custome-h2 fw-bold text-uppercase text-center mb-2" style={{ fontSize: '1.5rem' }}>
                        Digital Marketing <br />For the GenAI Era
                    </h2>

                    <p className="text-center text-muted mb-4 mb-lg-5">
                        Helping you to transition from informing prospects to shaping decisions in real-time
                    </p>
                </Container>


                <div className="position-relative" style={{ height: '700px' }}>
                    <Image
                        src={bgImage}
                        alt="Background"
                        fill
                        priority
                        className="object-cover w-100 h-100 position-absolute top-0 start-0"
                        style={{ zIndex: -2 }}
                    />
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: -1 }}
                    />

                    <Container className="h-100 d-flex align-items-center mx-auto justify-content-center">
                        <Row className="position-relative w-100">
                            <Col md={4}>
                                {Object.keys(contentData).map((key) => (
                                    <Button
                                        key={key}
                                        className={`fs-4 d-flex justify-content-between align-items-center w-100 mb-3 fw-bold rounded-4 py-3 px-4 border border-danger ${selected === key ? 'custome-flip-btn' : 'bg-light text-danger'}`}
                                        onClick={() => handleButtonClick(key)}
                                    >
                                        {key}
                                        <FaArrowCircleRight
                                            className={`flip-icon ms-auto fs-5 ${selected === key ? 'text-white' : 'text-danger'}`}
                                        />

                                    </Button>

                                ))}
                            </Col>
                            <Col md={1}></Col>
                            <Col md={1}></Col>

                            <Col md={6} className="m-auto">
                                <div className={`flip-box ${!showFront ? 'flipped' : ''}`} style={{ height: '300px' }}>
                                    <div className="flip-box-inner">

                                        <div className="flip-box-front d-flex align-items-center justify-content-center">
                                            <p className="mb-0 text-justify text-start">{showFront ? contentData[selected] : ''}</p>
                                        </div>

                                        <div className="flip-box-back d-flex align-items-center justify-content-center">
                                            <p className="mb-0 text-justify text-start">{!showFront ? contentData[selected] : ''}</p>
                                        </div>

                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default DigitalMarketing;
