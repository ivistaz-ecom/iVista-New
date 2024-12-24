'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

const BannerAllPage = ({ backgroundImage, bannerHeading, mobileBackgroundImage }) => {

    //const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    //const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
            setIsMobile(window.innerWidth <= 768);
        };

        // Check if window is available before adding event listener
        if (typeof window !== 'undefined') {
            handleResize(); // Call it initially to set the initial state
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);


    return (
        <>
            <div
                className='d-flex flex-column justify-content-lg-center justify-content-start align-items-start align-items-lg-start pt-lg-0 pt-4 rounded-5'
                style={{
                    backgroundImage: isMobile ? `url(${mobileBackgroundImage.url})` : `url(${backgroundImage.url})`, // Access the URL from the object
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: isMobile ? '412px' : '358px',
                }}
            >

                <Col lg={7} className="pl-8 d-flex flex-column text-align-start">
                    <p className=" fw-bold lh-1 py-3 font-size">{bannerHeading}</p>
                </Col>
            </div>
        </>
    )
}

export default BannerAllPage