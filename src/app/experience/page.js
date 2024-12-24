"use client"
import Image from 'next/image';
import React, { useState, useEffect ,useRef} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import Header from '../../../components/HeaderBlack'
// import '../../src/app/globals.css';
import Footer from '../../../components/Footer';


const Experience = () => {
    const [currentSection, setCurrentSection] = useState('main');

    const [isMobile, setIsMobile] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(0);

    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setViewportWidth(window.innerWidth);
            setIsMobile(window.innerWidth <= 768);
            const handleResize = () => {
                setViewportWidth(window.innerWidth);
                setIsMobile(window.innerWidth <= 768);
            };
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const rotateText = {
        transform: isMobile ? 'rotate(0deg)' : 'rotate(270deg)',
    };

    return (
        <>
        <Header/>
            {currentSection === 'main' && (
                <Container className="bg-black h-100vh d-flex flex-column justify-content-center" fluid>
                    <Row className='h-100vh d-flex flex-lg-row flex-column'>
                        <Col className={`d-flex flex-column p-0 z-1 ${isMobile ? '' : 'border-end'} z-1`} lg={6} style={{ height: isMobile ? '66.66vh' : '' }}>
                            <Col className='mastery h-100 p-0 border-bottom d-flex flex-column w-100'>
                                <Link href="/mastery-art-performance#mastery" className='h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer'>
                                    <div>
                                        <h1 className='text-white fs-70 fw-bold'> MASTERY </h1>
                                    </div>
                                    <div className='show-mastery'>
                                        <Image src="/home/masery.svg" width={100} height={10} alt='' className='w-100' />
                                    </div>
                                </Link>
                            </Col>

                            <Col className={`art p-0 d-flex justify-content-center align-items-center z-1 ${isMobile ? 'border-bottom' : ''}`}>
                                <Link href="/mastery-art-performance#art" className='h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer'>
                                    <div>
                                        <h1 className='text-white fs-70 fw-bold art-txt'> ART </h1>
                                    </div>
                                    <div className='show-art'>
                                        <Image src="/home/art.svg" width={100} height={10} alt='' className='w-100' />
                                    </div>
                                </Link>
                            </Col>
                        </Col>

                        <Col className='p-0 z-0' lg={6} style={{ height: isMobile ? '33.33vh' : '' }}>
                            <Col className='perfomance d-flex flex-column justify-content-center align-items-center h-100 p-0 z-0'>
                                <Link href="/mastery-art-performance#performance" className='h-100 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-decoration-none cursor-pointer'>
                                    <Col className='p-0 d-flex flex-column justify-content-center align-items-center w-100 text-decoration-none'>
                                        <div style={rotateText}>
                                            <div className='d-flex'>
                                                <h1 className='text-white fs-70 fw-bold'> PERFORMANCE </h1>
                                            </div>
                                            <div className='show-perfomance'>
                                                <Image src="/home/masery.svg" width={100} height={10} alt='' className='w-100' />
                                            </div>
                                        </div>
                                    </Col>
                                </Link>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
}

export default Experience;
